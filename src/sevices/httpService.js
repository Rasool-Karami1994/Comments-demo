import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
// we use axios.interceptor for handel global errors in request and responses with backend and Apis.
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    toast.error("error occuered");
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export default http;
