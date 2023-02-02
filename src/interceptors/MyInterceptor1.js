import axios from "axios";

export function MyInterceptor1() {
  axios.interceptors.request.use((req) => {
    console.log(req);
    req.headers["Authorization"] = "SOME TOKEN";
    req.headers["ABC"] = "XYZ";
    return req;
  });
}
