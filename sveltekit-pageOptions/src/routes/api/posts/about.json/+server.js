import { json } from '@sveltejs/kit';

export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json()

  return json(data)
}

export const prerender = true