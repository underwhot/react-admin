import { fetchWorkByTitle, fetchWorks } from "@/api/works";
import { useQuery } from "@tanstack/react-query";

export const useWorks = () => {
  return useQuery({
    queryKey: ["works"],
    queryFn: fetchWorks,
  });
};

export const useWork = (title: string) => {
  return useQuery({
    queryKey: ["work", title],
    queryFn: () => fetchWorkByTitle(title),
    enabled: !!title, // avoids running if title is undefined
  });
};
