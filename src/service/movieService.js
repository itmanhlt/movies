import { https } from "./config";

export const movieServ = {
  getMovieList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09");
  },
  getMovieTheater: () => {
    return https.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09"
    );
  },
  getDetailMovie: (id) => {
    return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  },
  getSearchMovieMobile: (name) => {
    return https.get(
      `/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09&tenPhim=${name}`
    );
  },
  getSearchMovieDesktop: (id) => {
    return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  },
};

