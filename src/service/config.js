import axios from "axios";
import {
  SET_LOADING_OFF,
  SET_LOADING_ON,
} from "../redux/constant/userConstant";

import { store } from "../../src/index";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";

const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MSIsIkhldEhhblN0cmluZyI6IjEyLzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDQ3NjgwMDAwMCIsIm5iZiI6MTY2NTI0ODQwMCwiZXhwIjoxNjk0NjI0NDAwfQ.SUELcPShU58ZkNS3CbFDhM02KMzll9j00ndjVSaiJ8Q";

export let configHeaders = () => {
  return {
    TokenCybersoft: TokenCybersoft,
  };
};
export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaders(),
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch({ type: SET_LOADING_ON, payload: true });
    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch({ type: SET_LOADING_OFF, payload: false });
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    console.log("api di");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch({ type: SET_LOADING_OFF, payload: false });
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch({ type: SET_LOADING_OFF, payload: false });
    return Promise.reject(error);
  }
);
