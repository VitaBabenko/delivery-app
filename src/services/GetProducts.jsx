import axios from 'axios';

export const GetProducts = async () => {
  const BASE_URL = 'http://localhost:5000/api/products';

  const response = await axios.get(BASE_URL);

  return response.data;
};
