<script>
  let { data } = $props();
</script>

<h1>Posts list</h1>

<ul>
	{#each data.posts as { id, title }}
		<li>{title}</li>
	{/each}
</ul>
