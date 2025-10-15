<!-- <script lang="ts">
	import { enhance } from '$app/forms';
	const { form }: { form: any } = $props();
</script>

<form method="POST" use:enhance>
	<label class="mb-2 block text-sm text-gray-900">
		UserName
		<input
			type="text"
			name="username"
			class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
		/>
	</label>

	<label class="mb-2 block text-sm text-gray-900">
		Password
		<input
			type="password"
			name="password"
			class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
		/>
	</label>

	<button
		type="submit"
		class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm text-white shadow-sm"
		>提交</button
	>
</form>

{#if form?.success}
	<p class="mt-2 text-sm text-gray-900">登录成功!</p>
{/if} -->

<script>
	import { goto } from '$app/navigation';
	import { enhance, applyAction } from '$app/forms';

	let loading = $state(false);
</script>

<form
	method="POST"
	action="/sign?/login"
	use:enhance={() => {
		loading = true;
		return async ({ result, update }) => {
			loading = false;
			if (result.type === 'redirect') {
				goto(result.location);
			} else {
				await applyAction(result);
			}
		};
	}}
>
	// ...
</form>
