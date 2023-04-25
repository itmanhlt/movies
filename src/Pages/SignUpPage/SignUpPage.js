import React, { useEffect, useState } from "react";
import { userServ } from "../../service/userService";
import { message } from "antd";
import { adminServ } from "../../service/adminService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  let [taiKhoan, setTaiKhoan] = useState("");
  let [hoTen, setHoTen] = useState("");
  let [matKhau, setMatKhau] = useState("");
  let [email, setEmail] = useState("");
  let [soDt, setSoDt] = useState("");
  let [maNhom, setMaNhom] = useState("GP01");
  let [userList, setUserList] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    // lấy danh sách người dùng
    adminServ
      .getUserList()
      .then((res) => {
        setUserList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // check rỗng
  function ktrRong(value, id) {
    if (value == "") {
      document.getElementById(id).innerHTML = "Vui lòng nhập thông tin";
      return false;
    } else {
      document.getElementById(id).innerHTML = ``;
      return true;
    }
  }

  // kiểm tra trùng
  let ktrTrung = (taiKhoan, email) => {
    let isValid = true;
    userList.map((user) => {
      // ktra trùng tên tài khoản
      if (user.taiKhoan == taiKhoan) {
        document.querySelector("#taiKhoanText").innerHTML =
          "Tài khoản đã tồn tại";
        isValid = false;
      }
      if (user.email == email) {
        isValid = false;
        document.querySelector("#emailText").innerHTML =
          "Email đã được đăng ký bởi tài khoản khác";
        isValid = false;
      }
    });
    return isValid;
  };

  // kiểm tra tài khoản
  let ktrTaiKhoan = (taiKhoan) => {
    let isValid = /\s/.test(taiKhoan);
    // true = co khoang trang, false = hop le
    if (isValid) {
      document.querySelector("#taiKhoanText").innerHTML =
        "Tài khoản không được có khoảng trắng";
    } else {
      document.querySelector("#taiKhoanText").innerHTML = "";
    }
    return !isValid;
  };

  // kiểm tra email
  let ktrEmail = (email) => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isValid = re.test(email);
    if (isValid) {
      document.getElementById("emailText").innerHTML = ``;
      return true;
    } else {
      document.getElementById("emailText").innerHTML =
        "Email không đúng định dạng";
      return false;
    }
  };

  // kiểm tra sdt
  let ktraSDT = (soDt) => {
    const re = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (re.test(soDt)) {
      document.querySelector("#soDtText").innerHTML = "";
      return true;
    } else {
      document.querySelector("#soDtText").innerHTML =
        "Số điện thoại không hợp lệ";
      return false;
    }
  };

  // Validate Form
  let validate = (user) => {
    let { taiKhoan, hoTen, matKhau, email, soDt, maNhom } = user;
    let isValid = true;
    // kiểm tra rỗng
    isValid =
      ktrRong(taiKhoan, "taiKhoanText") &
      ktrRong(hoTen, "hoTenText") &
      ktrRong(matKhau, "matKhauText") &
      ktrRong(email, "emailText") &
      ktrRong(soDt, "soDtText");
    if (isValid) {
      // ktra trùng (taiKhoan & email) && ktr taiKhoan
      isValid = ktrTrung(taiKhoan, email) && ktrTaiKhoan(taiKhoan);
      isValid = isValid & ktrEmail(email) & ktraSDT(soDt);
    }
    return isValid;
  };

  // handle onclick Submit
  let SignUp = () => {
    let userSignUp = { taiKhoan, hoTen, matKhau, email, soDt, maNhom };

    // validate thông tin đăng ký
    if (validate(userSignUp)) {
      userServ
        .logup(userSignUp)
        .then((res) => {
          message.success("Tạo tài khoản thành công");
          navigate("/sign-in");
        })
        .catch((err) => {
          message.error("Tạo tài khoản thất bại");
        });
    }
  };
  return (
    <div
      className="h-screen pt-[130px] pb-[50px] px-6 flex justify-center items-center"
      id="log-up"
    >
      <div className="container p-5 bg-white rounded-lg flex items-center">
        <section className="bg-gray-50 w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full bg-white rounded-lg md:mt-0  xl:p-0">
              <div className="space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center ">
                  Đăng ký tài khoản
                </h1>
                <div className="space-y-2 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-2">
                  <div className="space-y-2">
                    {/* Tài khoản */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Tài khoản
                      </label>
                      <input
                        type="taiKhoan"
                        name="taiKhoan"
                        value={taiKhoan}
                        onChange={(e) => {
                          setTaiKhoan(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="abcxyz"
                        required
                      />
                      <div
                        id="taiKhoanText"
                        className="text-red-600 lg:h-3"
                      ></div>
                    </div>
                    {/* Họ tên */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Họ tên
                      </label>
                      <input
                        type="hoTen"
                        name="hoTen"
                        value={hoTen}
                        onChange={(e) => {
                          setHoTen(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Nguyễn Văn A"
                      />
                      <div id="hoTenText" className="text-red-600 lg:h-3"></div>
                    </div>
                    {/* Mật khẩu */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Mật khẩu
                      </label>
                      <input
                        type="password"
                        name="matKhau"
                        value={matKhau}
                        onChange={(e) => {
                          setMatKhau(e.target.value);
                        }}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      />
                      <div
                        id="matKhauText"
                        className="text-red-600 lg:h-3"
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {/* Email */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                      </label>
                      <input
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="name@company.com"
                      />
                      <div id="emailText" className="text-red-600 lg:h-3"></div>
                    </div>
                    {/* Số điện thoại */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Số điện thoại
                      </label>
                      <input
                        type="soDt"
                        name="soDt"
                        value={soDt}
                        onChange={(e) => {
                          setSoDt(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="090XXXXXXX"
                      />
                      <div id="soDtText" className="text-red-600 lg:h-3"></div>
                    </div>
                    {/* Mã nhóm*/}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Mã nhóm
                      </label>
                      <select
                        id="maNhom"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={(e) => {
                          setMaNhom(e.target.value);
                        }}
                      >
                        <option value="GP01" selected>
                          GP01
                        </option>
                        <option value="GP02">GP02</option>
                        <option value="GP03">GP03</option>
                        <option value="GP04">GP04</option>
                        <option value="GP05">GP05</option>
                        <option value="GP06">GP06</option>
                        <option value="GP07">GP07</option>
                        <option value="GP08">GP08</option>
                      </select>
                      <div
                        id="maNhomText"
                        className="text-red-600 lg:h-3"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 lg:text-center lg:m-auto">
                  <button
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={SignUp}
                  >
                    Tạo tài khoản
                  </button>
                  <p className="text-sm font-light text-gray-500">
                    Bạn đã có tài khoản?{" "}
                    <a
                      href="/sign-in"
                      className="font-medium text-primary-600 hover:underline "
                    >
                      Đăng nhập
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
