import { useWork } from "@/hooks/useWorks";
import { useParams } from "react-router";

export default function Work() {
  const { title } = useParams();
  const { data: work, isPending, error } = useWork(title || "");

  if (isPending) return <p className="text-center">Loading work...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="container py-10 text-center">
      <h2>{work?.title}</h2>
      <p>{work?.description}</p>
      <img src={import.meta.env.VITE_API_URL + work?.image} alt={work?.title} />
      <p>{work?.body}</p>
    </section>
  );
}
