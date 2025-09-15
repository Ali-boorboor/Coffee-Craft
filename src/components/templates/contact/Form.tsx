import Button from "@/components/ui/button";
import apiRequest from "@/utils/axios/axiosInstance";
import React, { useReducer } from "react";
import { Input, Textarea } from "@/components/ui/input";
import { toast } from "react-toastify";

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
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name as keyof InitialState, value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await apiRequest.post("/contact", { ...state });

    if (res.status === 201) {
      toast.success("Message Sent Successfully");

      dispatch({ type: "RESET" });
    }
  };

  return (
    <form
      className="space-y-2 md:space-y-4 basis-full md:basis-1/2 transform-gpu will-change-transform"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="your name..."
        onChange={handleChange}
        value={state.name}
        name="name"
        type="text"
      />

      <Input
        placeholder="your email..."
        onChange={handleChange}
        value={state.email}
        name="email"
        type="email"
      />

      <Input
        placeholder="subject..."
        onChange={handleChange}
        value={state.subject}
        name="subject"
        type="text"
      />

      <Textarea
        placeholder="message..."
        onChange={handleChange}
        value={state.message}
        name="message"
      />

      <Button className="w-full" variant="ghost" type="submit">
        send message
      </Button>
    </form>
  );
};

export default Form;
