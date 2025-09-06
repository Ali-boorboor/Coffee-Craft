import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import React from "react";
import SectionHeader from "@/components/ui/section-header";
import useSliderAnimation from "@/animations/useSliderAnimation";
import CommentCard from "@/components/ui/comment-card/CommentCard";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type TestimonialProps = {
  comments: {
    id: number;
    commenter: string;
    commentBody: string;
    image: string;
  }[];
};

const LINES_DATA_ANIMATE = "testimonial-lines";
const SLIDES_DATA_ANIMATE = "testimonial-slides";

const renderBullet = (_: number, className: string) => {
  return `
    <span class="!w-4 !h-4 !inline-block !rounded-full !bg-primary-foreground !opacity-100 ${className}"></span>
  `;
};

const Testimonial = ({ comments }: TestimonialProps) => {
  const { containerRef } = useSliderAnimation({
    linesDataAnimate: LINES_DATA_ANIMATE,
    slidesDataAnimate: SLIDES_DATA_ANIMATE,
    start: "top 70%",
  });

  return (
    <section className="px-4 md:px-0" ref={containerRef}>
      <div className="container m-auto">
        <SectionHeader
          linesDataAnimate={LINES_DATA_ANIMATE}
          text="Our Clients Say"
          title="Testimonial"
        />

        <div className="mt-10 md:mt-20">
          <Swiper
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
            {comments.map((comment) => (
              <SwiperSlide data-animate={SLIDES_DATA_ANIMATE} key={comment.id}>
                <CommentCard {...comment} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="m-auto block text-center mt-4 space-x-2"
            id="swiper-custom-pagination"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
