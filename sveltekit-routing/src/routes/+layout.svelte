<script>
	let { children, data } = $props();
</script>

<a href="/authors">Auther List</a>
<a href="/posts">Post List</a>

<ul>
	{#each data.navs as { slug, title }}
		<li><a href="/{slug}">{title}</a></li>
	{/each}
</ul>

{@render children()}
