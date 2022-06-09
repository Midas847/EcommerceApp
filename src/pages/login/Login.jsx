import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useHistory } from "react-router-dom";
import Logo from "../../Logo.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  if (currentUser) {
    history.replace("/");
    return null;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center',
      }}
    >
      <img src={Logo} alt="" style={{ marginBottom: "20px" }} />
      <div
        style={{
          minHeight: "250px",
          width: "300px",
          background: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{ padding: "10px 40px", marginBottom: 20, outline: "none" }}
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{ padding: "10px 40px", marginBottom: 20, outline: "none" }}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleClick}
          style={{
            padding: 10,
            width: 100,
            border: "none",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
            background: " green",
          }}
        >
          Login
        </button>
        {error && <span style={{ color: "red" }}>Something Went Wrong...</span>}
      </div>
    </div>
  );
};

export default Login;
