import PageBreadcrumb from "@/components/ui/page-breadcrumb/components/PageBreadcrumb";
import Comments from "@/components/templates/testimonial/Comments";
import jsonDataParser from "@/utils/jsonDataParser";
import connectToDB from "@/database/dbConnection";
import CommentModel from "@/models/Comment";
import React from "react";
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
