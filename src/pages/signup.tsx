import { Signup } from "@/features/auth/index";
import React, { useEffect } from "react";

const SignupPage = () => {
  useEffect(() => {
    document.title = "Coffee Craft | Signup";
  }, []);

  return <Signup />;
};

export default SignupPage;
