type Service = {
  _id: string;
  image: string;
  title: string;
  description: string;
  iconName: string;
  iconPack: string;
};

type Product = {
  _id: string;
  type: "hot" | "cold";
  title: string;
  image: string;
  price: number;
  description: string;
};

export type { Service, Product };
