import PageBreadcrumb from "@/components/ui/page-breadcrumb/components/PageBreadcrumb";
import Comments from "@/components/templates/testimonial/Comments";
import React from "react";

const comments = [
  {
    id: 1,
    commenter: "sara",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-1.jpg",
  },
  {
    id: 2,
    commenter: "ali",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-2.jpg",
  },
  {
    id: 3,
    commenter: "reza",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-3.jpg",
  },
  {
    id: 4,
    commenter: "amir",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-2.jpg",
  },
  {
    id: 5,
    commenter: "amirhossein",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-3.jpg",
  },
];

const Testimonial = () => {
  return (
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="testimonial" href="/testimonial" />

      <Comments comments={comments} />
    </main>
  );
};

export default Testimonial;
