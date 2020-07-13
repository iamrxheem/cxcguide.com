import React from "react";
import Carousel from "react-multi-carousel";
import {Link} from "gatsby";

const MobileHomeIndex = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 3
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
      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Carousel
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          arrows={false}
          autoPlay={true}
          infinite
          autoPlaySpeed={6000}
          keyBoardControl={true}
          swipeable={true}
          draggable={true}
        >
          <div>
            <img
              className="rounded"
              style={{width: "100%"}}
              src="https://blog.malwarebytes.com/wp-content/uploads/2018/12/shutterstock_1214717467-900x506.jpg"
              alt="Take a quiz"
            />

            <br />
            <Link
              to="/quiz"
              className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
            >
              See practice quizzes
            </Link>
            <br />
            <br />
          </div>
          <div>
            <Link to="/study/">
              <img
                className="rounded"
                style={{width: "100%"}}
                src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                alt="Image of a subject - emphasizing start studying"
              />
            </Link>
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default MobileHomeIndex;
