export async function load() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  // throw new Error('custom error');
  console.log(posts.length)
  return {
    posts
  };
}