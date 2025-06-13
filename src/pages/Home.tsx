import { useHomePage } from "@/hooks/useHomePage";

export default function Home() {
  const { data, isPending, error } = useHomePage();

  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="container py-10 text-center">
      <h1 className="mb-5 text-5xl font-bold">
        {isPending ? "Loading..." : data.title}
      </h1>
      <div>{isPending ? "Loading..." : data.description}</div>
    </section>
  );
}
