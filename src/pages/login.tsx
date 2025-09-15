import { Login } from "@/features/auth/index";
import React, { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Coffee Craft | Login";
  }, []);

  return <Login />;
};

export default LoginPage;
