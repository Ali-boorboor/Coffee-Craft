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

type TestimonialProps = {
  comments: Comment[];
};

const SLIDES_DATA_ANIMATE = "testimonial-slides";

const Testimonial = ({ comments }: TestimonialProps) => {
  const { containerRef } = useSliderAnimation({
    slidesDataAnimate: SLIDES_DATA_ANIMATE,
    start: "top 70%",
  });

  return (
    <section className="px-4 md:px-0" ref={containerRef}>
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
            {comments.slice(0, 5).map((comment) => (
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

export default Testimonial;
