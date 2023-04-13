import { https } from "./config";

export const movieServ = {
  getMovieList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04");
  },
  getMovieTheater: () => {
    return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP04");
  },
  getDetailMovie: (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  getSearchMovie: (id) => {
    return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  }
}
