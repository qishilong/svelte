import { error, json, text } from "@sveltejs/kit";


export async function GET({ url, fetch }) {
  const id = url.searchParams.get("id");

  if (!id) {
    error(400, "没有 id 参数");
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  return json(post);
}

export async function fallback({ request }) {
  return text(`I caught your ${request.method} request!`);
}
