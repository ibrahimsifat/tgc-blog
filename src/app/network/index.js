const URL = process.env.NEXT_PUBLIC_SERVER_BLOG_URL;
export async function getBlogs({ query }) {
  const res = await fetch(`${URL}/${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
