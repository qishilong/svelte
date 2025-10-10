<script>
	import { page } from '$app/state';
	let { data } = $props();

	console.log(page);
	console.log(page.params);
</script>

{page.data.post.id} Post Content

<hr />

<h2>{page.data.post.title}</h2>

<hr />

{data.post.body}
