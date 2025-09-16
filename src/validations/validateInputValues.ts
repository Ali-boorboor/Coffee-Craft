import { AnyObject, ObjectSchema, ValidationError } from "yup";
import { toast } from "react-toastify";

type ValidateInputValuesProps<T extends AnyObject> = {
  schema: ObjectSchema<T>;
  values: T;
};

const validateInputValues = async <T extends AnyObject>({
  schema,
  values,
}: ValidateInputValuesProps<T>) => {
  try {
    await schema.validate(values, { strict: true, abortEarly: true });
    return true;
  } catch (error) {
    if (error instanceof ValidationError) {
      error.errors.forEach((msg) => toast.error(msg));
    }
    return false;
  }
};

export default validateInputValues;
