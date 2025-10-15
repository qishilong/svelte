<script lang="ts">
	import { page } from '$app/state';
	const { form, data } = $props();
</script>

{#if form?.success}
	<p class="mt-2 text-sm text-gray-900">登录成功! {data.user.name}</p>
{/if}

{#if $page.form?.success}
	<p class="mt-2 text-sm text-gray-900">登录成功! {data.user.name}</p>
{/if}

<form method="POST" action="?/register"></form>

<form method="POST" action="?/login">
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<button>Log in</button>
	<button formaction="?/register">Register</button>
</form>
