<script>
  let {data} = $props()
  import { page } from '$app/state';

  // console.dir(page, { depth: null })
</script>

{#if data.user}
	welcome, {data.user.name}!
{/if}

{#if page.data.user}
	welcome, {page.data.user.name}!
{/if}
