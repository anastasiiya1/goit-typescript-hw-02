import axios from "axios";

const API_KEY = "nLJWZpfvihc5rFIMKcxP2cFrdXLTcjpOmGEU_XTsamY";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`; // Оновлено
axios.defaults.params = {
  per_page: 10,
};

async function fetchImages(query, page) {
  try {
    const response = await axios.get(`search/photos`, {
      params: {
        query: query,
        page: page,
      },
    });
    return response.data.results;
    
  } catch (error) {
    alert("Error fetching images");
  }
}

export default fetchImages;
