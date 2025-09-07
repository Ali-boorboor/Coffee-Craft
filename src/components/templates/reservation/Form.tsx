import React from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

const Form = () => {
  return (
    <form className="space-y-2 md:space-y-4 basis-full md:basis-1/2 transform-gpu will-change-transform">
      <Input placeholder="name..." type="text" />

      <Input placeholder="email..." type="email" />

      <Input type="date" />

      <Input type="time" />

      <Button className="w-full" variant="ghost" type="submit">
        book now
      </Button>
    </form>
  );
};

export default Form;
