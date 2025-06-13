import { fetchHomePage } from "@/api/homePage";
import { useQuery } from "@tanstack/react-query";

export const useHomePage = () => {
  return useQuery({
    queryKey: ["homePage"],
    queryFn: fetchHomePage,
  });
};
