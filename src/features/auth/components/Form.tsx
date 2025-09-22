import Link from "next/link";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button/Button";
import React, { useState } from "react";
import { onSubmitHandlerProps } from "@/features/auth/types";

type FormProps = {
  submitButtonTitle: string;
  redirectButtonTitle: string;
  redirectButtonHref: string;
  onSubmitHandler: ({
    event,
    username,
    password,
  }: onSubmitHandlerProps) => void;
  dataAnimate?: string;
};

const Form = ({
  submitButtonTitle,
  redirectButtonTitle,
  redirectButtonHref,
  onSubmitHandler,
  dataAnimate,
}: FormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="space-y-2 md:space-y-4 max-w-xl m-auto"
      onSubmit={(event) => onSubmitHandler({ event, username, password })}
      data-animate={dataAnimate}
    >
      <Input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username..."
        value={username}
        type="text"
      />

      <Input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password..."
        value={password}
        type="password"
      />

      <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
        <Button className="basis-1/2 grow" variant="ghost" type="submit">
          {submitButtonTitle}
        </Button>

        <Link href={redirectButtonHref} className="basis-1/2 grow">
          <Button className="w-full" variant="default" type="submit">
            {redirectButtonTitle} page
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default Form;
