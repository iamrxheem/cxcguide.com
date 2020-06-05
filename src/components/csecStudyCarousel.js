import React from "react";
import Carousel from "react-multi-carousel";

const CsecStudyCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 1
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 1
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 1
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };

  return (
    <>
      <>
        <Carousel
          infitine={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          swipeable={true}
          draggable={true}
        >
          <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">
            <br />
            <br />
            <br />
            <br />
          </div>
        </Carousel>
      </>
    </>
  );
};

export default CsecStudyCarousel;
