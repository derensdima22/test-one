import { ReactElement, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import { CardReviewsPeople } from '@components/containerReviews';

// import Css
import className from './ContainerReviews.module.css';

// Import Swiper styles
import 'swiper/css';

// impoer Image
import { LongArrow } from '@components/Icons';

// import data
import { peopleReviews } from './data';

export const ContainerReviews = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const swiperRef = useRef<React.MutableRefObject>();
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <>
    <div className={className.containerReviews}>
      <h1>What 400+ reviews say about us</h1>
      <div className={className.groupButton}>
        <button onClick={() => swiperRef.current.slidePrev()}>
          <LongArrow className={className.arrowOne}/>
        </button>
        <button onClick={() => swiperRef.current.slideNext()}>
          <LongArrow/>
        </button>
      </div>
    </div>
    <div className={className.reviewsPeople}>
        <div className={className.reviewsPeopleBg}/>
        <div className={className.mySwiper}>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            onSlideChange={(swiper) => 
              setActiveCard(swiper.activeIndex)
            }
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className={className.mySwiper}
          >
            {peopleReviews.map((people, index) => 
              <SwiperSlide key={people.id}>
                <CardReviewsPeople
                  {...people}
                  index={index}
                  activate={activeCard}
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};
