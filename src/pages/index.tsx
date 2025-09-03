import Intro from "@/components/templates/index/Intro";
import About from "@/components/templates/index/About";
import Services from "@/components/templates/index/Services";
import React from "react";

const Index = () => {
  return (
    <main className="space-y-40 md:space-y-80">
      <Intro />

      <About />

      <Services />

      <div className="h-svh"></div>
    </main>
  );
};

export default Index;
