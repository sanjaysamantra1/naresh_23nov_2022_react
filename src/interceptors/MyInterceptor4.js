import axios from "axios";
import client from "../components/HTTP/api";

export function MyInterceptor4() {
  client.interceptors.request.use((req) => {
    console.log(req, "axios client");
    return req;
  });
}
