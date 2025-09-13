import jwt from "jsonwebtoken";

const generateToken = (payload: object) => {
  const token = jwt.sign(payload, process.env.SECRET_KEY!, {
    expiresIn: "24h",
  });

  return token;
};

const validateToken = (token: string) => {
  const tokenPayload = jwt.verify(token, process.env.SECRET_KEY!);

  return tokenPayload;
};

export { generateToken, validateToken };
