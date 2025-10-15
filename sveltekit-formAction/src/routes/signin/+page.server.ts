import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  login: async ({ request, url }) => {
    const formData = await request.formData();
    const username = formData.get('username');
    const redirectUrl = url.searchParams.get('redirectTo') || '/';

    if (!username) {
      return fail(400, { missing: true });
    }

    if (url.searchParams.has('redirectTo')) {
      redirect(303, redirectUrl);
    }

    return {
      success: true,
      data: Object.fromEntries(formData)
    };
  }
};

