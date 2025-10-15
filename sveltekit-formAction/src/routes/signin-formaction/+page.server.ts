export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data, 'data')
    return {
      success: true,
      data
    }
  }
}