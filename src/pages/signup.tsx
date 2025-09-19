import React from "react";
import Head from "next/head";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import { Signup } from "@/features/auth/index";

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>Coffee Craft | Signup</title>
      </Head>

      <main className="space-y-20 md:space-y-40">
        <PageBreadcrumb title="signup" />

        <Signup />
      </main>
    </>
  );
};

export default SignupPage;
