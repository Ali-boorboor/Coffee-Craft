import Button from "@/components/ui/button/Button";
import apiRequest from "@/utils/axios/axiosInstance";
import validationSchema from "@/utils/validators/validationSchema";
import validateInputValues from "@/utils/validators/validateInputValues";
import React, { useReducer } from "react";
import { toast } from "react-toastify";
import { Input, Textarea } from "@/components/ui/input";
import {
  nameValidations,
  emailValidations,
  subjectValidations,
  messageValidations,
} from "@/validations";

type InitialState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Action =
  | { type: "SET_FIELD"; field: keyof InitialState; value: string }
  | { type: "RESET" };

const initialState: InitialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function reducer(state: InitialState, action: Action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const Form = () => {
  const [inputValues, dispatch] = useReducer(reducer, initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name as keyof InitialState, value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const schema = validationSchema({
      name: nameValidations,
      email: emailValidations,
      subject: subjectValidations,
      message: messageValidations,
    });

    const isValid = await validateInputValues({
      values: { ...inputValues },
      schema,
    });

    if (!isValid) return;

    const res = await apiRequest.post("/contact", { ...inputValues });

    if (res.status === 201) {
      toast.success("Message Sent Successfully");

      dispatch({ type: "RESET" });
    }
  };

  return (
    <form
      className="space-y-2 md:space-y-4 basis-full md:basis-1/2"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="your name..."
        value={inputValues.name}
        onChange={handleChange}
        maxLength={30}
        name="name"
        type="text"
      />

      <Input
        placeholder="your email..."
        value={inputValues.email}
        onChange={handleChange}
        name="email"
        type="text"
      />

      <Input
        value={inputValues.subject}
        placeholder="subject..."
        onChange={handleChange}
        maxLength={30}
        name="subject"
        type="text"
      />

      <Textarea
        value={inputValues.message}
        placeholder="message..."
        onChange={handleChange}
        maxLength={1000}
        name="message"
      />

      <Button className="w-full" variant="ghost" type="submit">
        send message
      </Button>
    </form>
  );
};

export default Form;
