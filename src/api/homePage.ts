import axios from "axios";

export const fetchHomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await axios.get(
    import.meta.env.VITE_API_URL + "content/hero.json",
  );
  return res.data;
};
