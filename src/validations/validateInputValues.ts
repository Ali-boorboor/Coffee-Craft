import { AnyObject, ObjectSchema } from "yup";
import { toast } from "react-toastify";

type validateInputValuesProps = {
  schema: ObjectSchema<AnyObject>;
  values: Object;
};

const validateInputValues = async ({
  schema,
  values,
}: validateInputValuesProps) => {
  try {
    await schema.validate(values, { strict: true, abortEarly: true });
    return true;
  } catch (error: any) {
    error.errors.forEach((msg: string) => toast.error(msg));
    return false;
  }
};

export default validateInputValues;
