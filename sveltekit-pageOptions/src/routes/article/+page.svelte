<script>
	let { data } = $props();
</script>

<h1>Post List</h1>

<ul>
	{#each data.posts as { id, title }}
		<li><a href={`/article/${id}`}>{title}</a></li>
	{/each}
</ul>
