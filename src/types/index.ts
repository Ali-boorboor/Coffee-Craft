type Service = {
  _id: string;
  image: string;
  title: string;
  description: string;
  iconName: string;
  iconPack: string;
};

interface Product {
  _id: string;
  type: "hot" | "cold";
  title: string;
  image: string;
  price: number;
  description: string;
  comments: Comment[] | [];
}

type Comment = {
  _id: string;
  commenter: string;
  commentBody: string;
  image: string;
};

export type { Service, Product, Comment };
