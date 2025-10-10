import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();
  if (post.title) {
    return {
      post,
    };
  }

  error(404, "Not found");
}
