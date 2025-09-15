import * as Yup from "yup";

type validationSchemaProps = Record<string, Yup.AnySchema>;

const validationSchema = (validations: validationSchemaProps) => {
  const schema = Yup.object().shape(validations);

  return schema;
};

export default validationSchema;
