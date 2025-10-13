function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function loadComments() {
  try {
    // throw new Error("error");
    await sleep(4000);
    return [
      { content: "This is a test comment!" },
      { content: "This is a test comment!" },
    ];
  } catch (error) {

  }
}

async function loadPost(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  return post;
}

export async function load({ params }) {
  return {
    comments: loadComments(),
    post: await loadPost(params.slug),
  };
}
