import { https } from "./config";

export const movieServ = {
  getMovieList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09");
  },
  getMovieTheater: () => {
    return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap");
  },
  getDetailMovie: (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
};
