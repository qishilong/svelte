<script lang="ts">
	type Result = {
		success?: boolean;
	};

	let username = $state('');
	let password = $state('');
	let result = $state<Result>({});

	async function submit() {
		const response = await fetch('/api/add', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: {
				'content-type': 'application/json'
			}
		});

		result = await response.json();
	}
</script>

<label class="mb-2 block text-sm text-gray-900">
	UserName
	<input
		type="text"
		bind:value={username}
		class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
	/>
</label>

<label class="mb-2 block text-sm text-gray-900">
	Password
	<input
		type="password"
		bind:value={password}
		class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
	/>
</label>

<button
	onclick={submit}
	class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm text-white shadow-sm"
	>提交</button
>

{#if result?.success}
	<p class="mt-2 text-sm text-gray-900">登录成功!</p>
{/if}
