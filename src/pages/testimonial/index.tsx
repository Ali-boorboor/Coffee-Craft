import React from "react";
import CommentModel from "@/models/Comment";
import connectToDB from "@/database/dbConnection";
import jsonDataParser from "@/utils/jsonDataParser";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import Comments from "@/components/templates/testimonial/Comments";
import { Comment } from "@/types";

type TestimonialProps = { comments: Comment[] };

const Testimonial = ({ comments }: TestimonialProps) => {
  return (
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="testimonial" href="/testimonial" />

      <Comments comments={comments} />
    </main>
  );
};

export const getStaticProps = async () => {
  connectToDB();

  const comments = await CommentModel.find({}).lean();
  const parsedComments = jsonDataParser(comments);

  return {
    props: {
      comments: parsedComments,
    },
  };
};

export default Testimonial;
