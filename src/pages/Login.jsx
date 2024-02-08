import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import "../Sass/Logincomponents.scss";
import Spinner from "../utils/Spinner";
import Slider from "react-slick";
import useLogin from "../hook/useLogin";
import toast from "react-hot-toast";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const sliderRef = useRef();
  const {login}=useLogin()
  const onFinish = async (e) => {
    setLoading(true)
  const data =  await login(email,password)
   if(data){
    navigate("/")
   }else{
    toast.error("There is no such user")
   }
  };

  const onFinishFailed = (errorInfo) => {
   if(email === "" || password === ""){
    message.error("Fill in all fields")
   }
  
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (Loading) {
    return <Spinner />;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Otomatik oynatma
    autoplaySpeed: 3000,
  };
  return (
    <div className="container-login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1>Login Page</h1>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "please enter your email address!",
            },
          ]}
        >
          <Input
            value={email}
            onChange={handleEmailChange}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "please enter your password!",
            },
          ]}
        >
          <Input
            value={password}
            onChange={handlePasswordChange}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="password"
          />
        </Form.Item>
        <Form.Item>
          <Link to={"/reset"} className="login-form-forgot" href="">
          Forgot your password?
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {Loading ? "Logging in" : " Sign In"}
          </Button>
          <h4>
          Don't you have an account? ? <Link to="/signup">Sign Up</Link>
          </h4>
        </Form.Item>
      </Form>
      <div className="slider-login">
        <Slider ref={sliderRef} {...settings}>
          <div className="image">
            <img className="" src={"/src/images/blog/b1.jpg"} />
          </div>
          <div className="image">
            <img className="" src={"/src/images/blog/b2.jpg"} />
          </div>
          <div className="image">
            <img className="" src={"/src/images/blog/b3.jpg"} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Login;
