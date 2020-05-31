import React from "react";
import Carousel from "react-multi-carousel";
import SubjectCard from "../common/subjectCard";

const CsecLanguages = () => {
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
          imgSrc="https://elearningindustry.com/wp-content/uploads/2017/04/elearning-writing-3-courses-to-help-you-improve-your-writing-skills.png"
          title="English A"
          description=""
          href="/study/csec"
        />
        <SubjectCard
          imgSrc="https://pregonesprtt.org/wp-content/uploads/2019/05/Tempest2019.jpg"
          title="English B"
          description=""
          href="/study/csec"
        />
        <SubjectCard
          imgSrc="https://www.brainscape.com/blog/wp-content/uploads/2015/06/French.jpg"
          title="French"
          description=""
          href="/study/csec"
        />
        <SubjectCard
          imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"
          title="Spanish"
          description=""
          href="/study/csec"
        />
        <SubjectCard
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Portuguese_language_%28PT-BR%29.svg/1200px-Flag_of_Portuguese_language_%28PT-BR%29.svg.png"
          title="Portuguese"
          description=""
          href="/study/csec"
        />
      </Carousel>
    </>
  );
};

export default CsecLanguages;
