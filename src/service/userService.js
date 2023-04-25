import axios from "axios";
import { BASE_URL, configHeaders } from "./config";

export const userServ = {
  login: (loginData) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: loginData,
      headers: configHeaders(),
    });
  },
  logup: (data) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: data,
      headers: configHeaders(),
    });
  },
};
