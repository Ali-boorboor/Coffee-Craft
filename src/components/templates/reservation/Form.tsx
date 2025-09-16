import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import apiRequest from "@/utils/axios/axiosInstance";
import validationSchema from "@/validations/validationSchema";
import validateInputValues from "@/validations/validateInputValues";
import React, { useReducer } from "react";
import { toast } from "react-toastify";
import {
  nameValidations,
  emailValidations,
  dateValidations,
  timeValidations,
} from "@/validations";

type InitialState = {
  name: string;
  email: string;
  date: string;
  time: string;
};

type Action =
  | { type: "SET_FIELD"; field: keyof InitialState; value: string }
  | { type: "RESET" };

const now = new Date();

const nowDate = String(now.toJSON().slice(0, 10));

const hours = String((now.getHours() + 2) % 24).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");
const nowTime = `${hours}:${minutes}`;

const initialState: InitialState = {
  name: "",
  email: "",
  date: nowDate,
  time: nowTime,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name as keyof InitialState, value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const schema = validationSchema({
      name: nameValidations,
      email: emailValidations,
      date: dateValidations,
      time: timeValidations,
    });

    const isValid = await validateInputValues({
      values: { ...inputValues },
      schema,
    });

    if (!isValid) return;

    const res = await apiRequest.post("/reservation", { ...inputValues });

    if (res.status === 201) {
      toast.success("Reservation Added Successfully");

      dispatch({ type: "RESET" });
    } else if (res.status === 409) {
      toast.error("Reservation Already Exist!");
    }
  };

  return (
    <form
      className="space-y-2 md:space-y-4 basis-full md:basis-1/2"
      onSubmit={handleSubmit}
    >
      <Input
        value={inputValues.name}
        onChange={handleChange}
        placeholder="name..."
        maxLength={30}
        type="text"
        name="name"
      />

      <Input
        value={inputValues.email}
        onChange={handleChange}
        placeholder="email..."
        name="email"
        type="text"
      />

      <Input
        value={inputValues.date}
        onChange={handleChange}
        type="date"
        name="date"
      />

      <Input
        value={inputValues.time}
        onChange={handleChange}
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
