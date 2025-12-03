export async function load() { 
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    posts
  };
}

export const prerender = true;