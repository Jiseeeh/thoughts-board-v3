import axios from "axios";

const instance = axios.create();

/* Adding the API key to the header of every request. */
instance.interceptors.request.use((config) => {
  if (config.headers) config.headers["Authorization"] = process.env.API_KEY;

  return config;
});

export default instance;
