import * as Yup from "yup";

type ValidationSchemaProps<T extends Record<string, Yup.AnySchema>> = T;

const validationSchema = <T extends Record<string, Yup.AnySchema>>(
  validations: ValidationSchemaProps<T>
) => {
  return Yup.object().shape(validations) as Yup.ObjectSchema<{
    [K in keyof T]: Yup.InferType<T[K]>;
  }>;
};

export default validationSchema;
