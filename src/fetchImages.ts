import axios from "axios";

const API_KEY = "nLJWZpfvihc5rFIMKcxP2cFrdXLTcjpOmGEU_XTsamY";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  per_page: 10,
};

export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  description: string;
  likes: number;
}

async function fetchImages(query: string, page: number): Promise<Image[]> {
  try {
    const response = await axios.get(`search/photos`, {
      params: {
        query,
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    alert("Error fetching images");
    return [];
  }
}

export default fetchImages;
