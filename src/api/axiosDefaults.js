import axios from "axios";

axios.defaults.baseURL = "https://drf-api-alsona-0c809e0777a5.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
