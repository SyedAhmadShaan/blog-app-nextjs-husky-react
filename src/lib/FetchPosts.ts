export const FetchPosts = async () => {
  const response = await fetch("https://dev.to/api/articles");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();

  // Map and validate the data
  return data.map((post: any) => ({
    id: post.id,
    title: post.title,
    description: post.description,
    cover_image: post.cover_image || null,
    published_at: post.published_at,
  }));
};
