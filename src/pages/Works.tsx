import { useWorks } from "@/hooks/useWorks";
import { slugify } from "@/lib/utils";
import { Link } from "react-router";

export default function Works() {
  const { data: works, isPending, error } = useWorks();

  if (isPending) return <p className="text-center">Loading works...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="container py-10 text-center">
      <h1 className="mb-5 text-5xl font-bold">{works?.title}</h1>
      <ul className="grid grid-cols-2 gap-4">
        {works?.entries.map((work) => (
          <li key={work.title}>
            <Link
              to={`/works/${slugify(work.title)}`}
              className="block h-full border p-4"
            >
              <h2>{work.title}</h2>
              <p>{work.description}</p>
              <img
                src={import.meta.env.VITE_API_URL + work.image}
                alt={work.title}
              />
              <p>{work.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
