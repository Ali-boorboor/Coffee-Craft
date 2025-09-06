import React from "react";

type CommentsProps = {
  comments: {
    id: number;
    commenter: string;
    commentBody: string;
    image: string;
  }[];
};

const Comments = ({ comments }: CommentsProps) => {
  return (
    <section
      className="container m-auto space-y-10 md:space-y-20 md:px-0 px-4"
      ref={containerRef}
    >
      <div className="container m-auto">
        <SectionHeader
          linesDataAnimate={LINES_DATA_ANIMATE}
          text="Our Clients Say"
          title="Testimonial"
        />

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
            {comments.map((comment) => (
              <SwiperSlide data-animate={SLIDES_DATA_ANIMATE} key={comment.id}>
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
