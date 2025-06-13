import { usePosts } from "@/hooks/usePosts";
import type { Post } from "@/lib/types";

export default function Posts() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="container py-10 text-center">
      <h1 className="mb-5 text-5xl font-bold">Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
