import React from "react";
import Button from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

const Form = () => {
  return (
    <form className="space-y-2 md:space-y-4 basis-full md:basis-1/2 md:h-90.5 transform-gpu will-change-transform">
      <Input placeholder="your name..." />

      <Input placeholder="your email..." />

      <Input placeholder="subject..." />

      <Textarea placeholder="message..." />

      <Button className="w-full" variant="ghost" type="submit">
        send message
      </Button>
    </form>
  );
};

export default Form;
