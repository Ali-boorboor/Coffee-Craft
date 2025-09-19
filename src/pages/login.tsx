import React from "react";
import Head from "next/head";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import { Login } from "@/features/auth/index";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Coffee Craft | Login</title>
      </Head>

      <main className="space-y-20 md:space-y-40">
        <PageBreadcrumb title="login" />

        <Login />
      </main>
    </>
  );
};

export default LoginPage;
