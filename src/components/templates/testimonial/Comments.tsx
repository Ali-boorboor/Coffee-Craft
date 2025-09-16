import React from "react";
import Slider from "@/features/slider";
import SectionHeader from "@/components/ui/section-header";
import CommentCard from "@/components/ui/comment-card/CommentCard";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import {
  renderBullet,
  PaginationBullet,
  useSliderAnimation,
} from "@/features/slider";
import { Comment } from "@/types";

type CommentsProps = {
  comments: Comment[];
};

const SLIDES_DATA_ANIMATE = "#testimonial_slides";

const Comments = ({ comments }: CommentsProps) => {
  const { containerRef } = useSliderAnimation({
    slidesDataAnimate: SLIDES_DATA_ANIMATE,
    start: "top 70%",
  });

  return (
    <section
      className="container m-auto space-y-10 md:space-y-20 md:px-0 px-4"
      ref={containerRef}
    >
      <div className="container m-auto">
        <SectionHeader text="Our Clients Say" title="Testimonial" />

        <div className="mt-10 md:mt-20">
          <Slider
            pagination={{
              el: "#swiper-custom-pagination",
              clickable: true,
              renderBullet,
            }}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            speed={1000}
            grabCursor
            loop
          >
            {comments.slice(0, 10).map((comment) => (
              <SwiperSlide data-animate={SLIDES_DATA_ANIMATE} key={comment._id}>
                <CommentCard {...comment} />
              </SwiperSlide>
            ))}
          </Slider>

          <PaginationBullet />
        </div>
      </div>
    </section>
  );
};

export default Comments;
