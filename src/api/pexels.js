import axios from "axios";

const API_URL = "https://api.pexels.com/v1/search";

export const fetchPhotos = async (query, page, perPage = 80) => {
  const { data } = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: perPage,
    },
    headers: {
      Authorization: import.meta.env.VITE_ACCESS_KEY,
    },
  });

  return data;
};
