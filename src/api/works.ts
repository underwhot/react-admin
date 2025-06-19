import type { Work, WorksList } from "@/lib/types";
import { slugify } from "@/lib/utils";
import axios from "axios";

export const fetchWorks = async (): Promise<WorksList> => {
  const res = await axios.get(
    import.meta.env.VITE_API_URL + "content/works.json",
  );
  return res.data;
};

export const fetchWorkByTitle = async (title: string): Promise<Work | null> => {
  const res = await axios.get(
    import.meta.env.VITE_API_URL + "content/works.json",
  );

  return res.data.entries.find((work: Work) => slugify(work.title) === title);
};
