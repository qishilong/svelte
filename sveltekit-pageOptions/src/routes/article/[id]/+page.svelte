<script>
  import { page } from '$app/stores';
  let { data } = $props();
</script>

{$page.params.id} Post Content

<hr />

<h2>{data.post.title}</h2>

<hr />

{data.post.body}
