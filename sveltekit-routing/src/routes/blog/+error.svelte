<script>
	import { page } from '$app/stores';
</script>

blog
<h1>{$page.status} : {$page.error?.message}</h1>

<style>
	h1 {
		color: red;
	}
</style>
