import React from "react";
import PageHeading from "@/components/ui/page-breadcrumb";
import SearchResult from "@/features/search/components/SearchResult";

const menuItems = [
  {
    id: "1",
    type: "hot",
    title: "black coffee",
    image: "/image/black-coffee.png",
    price: 10,
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: "2",
    type: "hot",
    title: "cappuccino",
    image: "/image/cappuccino.png",
    price: 15,
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: "3",
    type: "cold",
    title: "banana milk",
    image: "/image/cappuccino.png",
    price: 5,
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: "4",
    type: "cold",
    title: "milk",
    image: "/image/cappuccino.png",
    price: 2,
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
];

const Search = () => {
  return (
    <main className="space-y-20 md:space-y-40">
      <PageHeading title="search" />

      <SearchResult menuItems={menuItems} />
    </main>
  );
};

export default Search;
