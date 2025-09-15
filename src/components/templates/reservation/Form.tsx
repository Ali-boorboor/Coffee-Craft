import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import apiRequest from "@/utils/axios/axiosInstance";
import React, { useReducer } from "react";
import { toast } from "react-toastify";

type InitialState = {
  name: string;
  email: string;
  date: string;
  time: string;
};

type Action =
  | { type: "SET_FIELD"; field: keyof InitialState; value: string }
  | { type: "RESET" };

const initialState: InitialState = {
  name: "",
  email: "",
  date: "",
  time: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name as keyof InitialState, value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await apiRequest.post("/reservation", { ...state });

    if (res.status === 201) {
      toast.success("Reservation Added Successfully");

      dispatch({ type: "RESET" });
    } else if (res.status === 409) {
      toast.error("Reservation Already Exist!");
    }
  };

  return (
    <form
      className="space-y-2 md:space-y-4 basis-full md:basis-1/2 transform-gpu will-change-transform"
      onSubmit={handleSubmit}
    >
      <Input
        onChange={handleChange}
        placeholder="name..."
        value={state.name}
        type="text"
        name="name"
      />

      <Input
        onChange={handleChange}
        placeholder="email..."
        value={state.email}
        type="email"
        name="email"
      />

      <Input
        onChange={handleChange}
        value={state.date}
        type="date"
        name="date"
      />

      <Input
        onChange={handleChange}
        value={state.time}
        type="time"
        name="time"
      />

      <Button className="w-full" variant="ghost" type="submit">
        book now
      </Button>
    </form>
  );
};

export default Form;
