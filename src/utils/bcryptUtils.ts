import { hash, compare } from "bcrypt";

const hashData = async (data: string) => {
  const hashedData = await hash(data, Number(process.env.BCRYPT_SALT!));

  return hashedData;
};

const compareData = async (data: string, hashedData: string) => {
  const isCompareTrue = await compare(data, hashedData);

  return isCompareTrue;
};

export { hashData, compareData };
