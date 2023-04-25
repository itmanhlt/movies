import axios from "axios";
import { https } from "./config";
export const adminServ = {
  getUserList: () => {
    return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00`);
  },
};
