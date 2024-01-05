import axios from "axios";

export interface fetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d1acfb75118040758e33cbe13a0d9e34",
  },
});
