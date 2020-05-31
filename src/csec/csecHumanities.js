import React from "react";
import Carousel from "react-multi-carousel";
import SubjectCard from "../common/subjectCard";

const CsecHumanities = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 2
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 2
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };

  return (
    <>
      <Carousel
        ssr={true}
        responsive={responsive}
        infinite={false}
        arrows={true}
        partialVisible={true}
        swipeable={true}
        dots={true}
        showDots={true}
        keyBoardControl={true}
      >
        <SubjectCard
          title="Caribbean History"
          description=""
          imgSrc="https://images.liverpoolmuseums.org.uk/styles/focal_point_2_1/public/2020-01/slavery-in-the-caribbean-banner.jpg"
          href="/study/csec"
        />
        <SubjectCard
          title="Social Studies"
          description=""
          imgSrc="https://images.theconversation.com/files/304831/original/file-20191202-67002-106wryj.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C4500%2C3132&q=45&auto=format&w=496&fit=clip"
          href="/study/csec"
        />
        <SubjectCard
          title="Geography"
          description=""
          imgSrc="https://study.com/cimages/videopreview/videopreview-full/p3c2j8y73a.jpg"
          href="/study/csec"
        />
        <SubjectCard
          title="Home Economics"
          description=""
          imgSrc=""
          href="/study/csec"
        />
        <SubjectCard
          title="Music"
          description=""
          imgSrc=""
          href="/study/csec"
        />
        <SubjectCard
          title="Religious Education"
          description=""
          imgSrc=""
          href="/study/csec"
        />
        <SubjectCard
          title="Theatre Arts"
          description=""
          imgSrc=""
          href="/study/csec"
        />
        <SubjectCard
          title="Visual Arts"
          description=""
          imgSrc="https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg"
          href="/study/csec"
        />
      </Carousel>
    </>
  );
};

export default CsecHumanities;
