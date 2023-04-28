import React from "react";
import Lottie from "lottie-react";
import { Button, Checkbox, Form, Input, Typography, message } from "antd";
import { userServ } from "../../service/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_USER_LOGIN } from "../../redux/constant/userConstant";
import { localUserServ } from "../../service/localService";
import login_animate from "../../asset/AnikiHamster.json";
const LoginPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    userServ
      .login(values)
      .then((res) => {
        message.success("Đăng nhập thành công");
        dispatch({
          type: SET_USER_LOGIN,
          payload: res.data.content,
        });
        localUserServ.set(res.data.content);
        navigate("/");
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      className="h-screeen p-14 pt-[133px] flex justify-center items-center "
      id="log-in"
    >
      <div className="container p-9 lg:p-20 bg-white rounded-lg flex items-center">
        <div className=" w-full lg:w-1/2 h-full pt-5">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            className="w-full"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Tài khoản"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Nhập tên người dùng",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Nhập mật khẩu",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ span: 24 }}
            >
              <Checkbox>Ghi nhớ tài khoản</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 24,
              }}
            >
              <button
                type="submit"
                className="w-full text-white  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Đăng nhập
              </button>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 24,
              }}
            >
              <Typography.Link href="/sign-up">
                Bạn chưa có tài khoản? Đăng ký
              </Typography.Link>
            </Form.Item>
          </Form>
        </div>
        <div className=" hidden lg:block lg:w-1/2 h-full">
          <Lottie animationData={login_animate} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
