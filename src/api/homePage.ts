import axios from "axios";

export const fetchHomePage = async (): Promise<{
  title: string;
  body: string;
}> => {
  const res = await axios.get(
    import.meta.env.VITE_API_URL + "content/homePage.json",
  );
  return res.data;
};
