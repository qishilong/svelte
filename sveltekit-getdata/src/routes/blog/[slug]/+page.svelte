<script>
	export let data;
</script>

<h2>{data.post.title}</h2>
<div>{@html data.post.body}</div>

{#await data.comments}
	Loading comments...
{:then comments}
	{#each comments as comment}
		<p>{comment.content}</p>
	{/each}
{:catch error}
	<p>error loading comments: {error.message}</p>
{/await}
