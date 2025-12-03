import { error } from "@sveltejs/kit"

export async function load({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await response.json()

  if (post.title) {
    return { post }
  }

  error(404, 'Post not found')
}

export function entries() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
}

export const prerender = true

export const csr = false;

export const ssr = false