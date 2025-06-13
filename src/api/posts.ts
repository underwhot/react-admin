import axios from "axios";

export const fetchPosts = async () => {
  const res = await axios.get(
    import.meta.env.VITE_API_URL + "content/posts.json",
  );
  return res.data;
};

export const fetchPostById = async (id: string) => {
  const res = await axios.get(
    import.meta.env.VITE_API_URL + `content/posts/${id}.json`,
  );
  return res.data;
};
