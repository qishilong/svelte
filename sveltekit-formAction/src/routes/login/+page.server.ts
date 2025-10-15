export async function load({ cookies }) {
  const user = await db.getUserFromSession(cookies.get("sessionid"));
  return { user };
}

export const actions = {
  login: async ({ cookies, request }) => {
    // 通过 request.formData() 获取数据
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    const user = await db.getUser(email);
    // 设置 sessionid
    cookies.set("sessionid", await db.createSession(user), { path: "/" });

    return { success: true };
  },
  register: async (event) => {
    // TODO register the user
  },
};
