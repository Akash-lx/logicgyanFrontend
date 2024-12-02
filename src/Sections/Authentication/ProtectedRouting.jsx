import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import api from "../../api/api.js";

const ProtectedRouting = ({ redirectTo }) => {
  const [tokenCheck, setTokenCheck] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("userId"),
      };
      try {
        const response = await api.post("/auth/verifyToken", data);
        console.log(response.status);
        if (response.status === 200) {
          setTokenCheck(true);
        }
      } catch (err) {
        setTokenCheck(false);
      }
    };

    fetchData();
  });

  return tokenCheck ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default ProtectedRouting;
