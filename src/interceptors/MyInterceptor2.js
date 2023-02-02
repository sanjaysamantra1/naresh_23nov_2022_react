import axios from "axios";

export function MyInterceptor2() {
  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      alert("Error Interceptor called");
      if (err.response.status === 404) {
        throw new Error(`${err.config.url} not found`);
      }
      throw err;
    }
  );
}
