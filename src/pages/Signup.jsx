import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import "../Sass/Logincomponents.scss";
import Spinner from "../utils/Spinner";
import Slider from "react-slick";
import useSignUpWithEmailAndPassword from "../hook/useSignUp";
import toast from "react-hot-toast";
import img from "../images/blog/b1.jpg"
import img2 from "../images/blog/b2.jpg"
import img3 from "../images/blog/b3.jpg"
const Signup = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(true);
  const sliderRef = useRef();
  const { signup } = useSignUpWithEmailAndPassword();
  const onFinish = async () => {
    setLoading(true);
    const data = await signup(email, password, name);
    if (data) {
      navigate("/");
      setLoading(false);
    } 
  };

  const onFinishFailed = (errorInfo) => {
    if (email === "" || password === "" || name === "") {
      message.error("Fill in all fields");
      setLoading(false);
    }
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
        <h1>Sign Up Page</h1>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
          ]}
        >
          <Input
            value={name}
            onChange={(e) => setname(e.target.value)}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="password"
          />
        </Form.Item>
        <Form.Item>
          <Link to={"/reset"} className="login-form-forgot" href="">
            Forgot your password ?
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {Loading ? "Signing up" : "Sign Up"}
          </Button>
          <h4>
            Do you have an account ? <Link to="/login">Login</Link>
          </h4>
        </Form.Item>
      </Form>
      <div className="slider-login">
        <Slider ref={sliderRef} {...settings}>
          <div className="image">
            <img className="" src={img} />
          </div>
          <div className="image">
            <img className="" src={img2} />
          </div>
          <div className="image">
            <img className="" src={img3} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Signup;
