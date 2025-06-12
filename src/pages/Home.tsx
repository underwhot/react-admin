import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({
    title: "Loading...",
    description: "Loading...",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("content/hero.json");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container py-10 text-center">
      <h1 className="mb-5 text-5xl font-bold">{data.title}</h1>
      <div>{data.description}</div>
    </section>
  );
}
