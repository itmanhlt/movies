import axios from "axios";
import {
  SET_LOADING_OFF,
  SET_LOADING_ON,
} from "../redux/constant/userConstant";

import { store } from "../../src/index";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";

const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjE4LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTk5MDQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2MTM4MDAwfQ.qCglC_oyHM79HVc5mRXJfocVkww4VUpWO7ug7MWtJoY";

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
