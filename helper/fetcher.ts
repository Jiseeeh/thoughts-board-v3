import axios from "@lib/axios";

export default async function fetcher(url: string, thoughtId: string) {
  const response = await axios.get(url, {
    params: {
      thoughtId,
    },
  });

  const data = response.data;

  if (data.success) return data.content;
  throw new Error(data.error);
}
