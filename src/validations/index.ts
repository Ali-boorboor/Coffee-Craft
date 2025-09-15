import * as Yup from "yup";

const EMAIL_REGEX = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
const NAME_REGEX = /^([a-zA-Z]+[a-zA-Z\s]*){3,30}$/;
const DATE_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
const TIME_REGEX = /^([01]\d|2[0-3]):([0-5]\d)$/;
const MESSAGE_REGEX = /^([\w]+[\w\s]*){3,1000}$/;
const SEARCH_REGEX = /^[a-zA-Z]+[a-zA-Z\s]*$/;
const PASSWORD_REGEX = /^[\w\W]{6,20}$/;
const IMAGE_REGEX = /^\/[\w\-\/]+\.(png|jpg|jpeg)$/;
const TYPE_REGEX = /^cold|hot$/;

const emailValidations = Yup.string()
  .matches(EMAIL_REGEX, "Invalid Email")
  .required();

const nameValidations = Yup.string()
  .matches(NAME_REGEX, "Invalid Name (2 < Length)")
  .required();

const dateValidations = Yup.string()
  .matches(DATE_REGEX, "Invalid Date Format")
  .test(
    "is-future-date",
    "Time / Date Cannot Be In The Past",
    function (value) {
      if (!value) return false;
      const today = new Date();
      const chosenDate = new Date(value);
      return chosenDate >= new Date(today.toDateString());
    }
  );

const timeValidations = Yup.string()
  .matches(TIME_REGEX, "Invalid Time Format")
  .test(
    "is-future-time",
    "Time / Date Cannot Be In The Past",
    function (value) {
      if (!value) return false;

      const { date } = this.parent;
      const chosenDateTime = new Date(`${date}T${value}`);
      return chosenDateTime >= new Date();
    }
  );

const subjectValidations = Yup.string()
  .matches(NAME_REGEX, "Invalid Subject (2 < Length)")
  .required();

const messageValidations = Yup.string()
  .matches(MESSAGE_REGEX, "Invalid Message (2 < Length)")
  .required();

const searchValidations = Yup.string()
  .matches(SEARCH_REGEX, "Invalid Search Text")
  .required();

const passwordValidations = Yup.string()
  .matches(PASSWORD_REGEX, "Invalid Password (6 < Length)")
  .required();

const imageValidations = Yup.string()
  .matches(IMAGE_REGEX, "Invalid Image")
  .required();

const typeValidations = Yup.string()
  .matches(TYPE_REGEX, "Invalid type")
  .required();

export {
  emailValidations,
  nameValidations,
  dateValidations,
  timeValidations,
  subjectValidations,
  messageValidations,
  searchValidations,
  passwordValidations,
  imageValidations,
  typeValidations,
};
