import React from "react";
import Carousel from "react-multi-carousel";
import SubjectCard from "../common/subjectCard";

const CsecBusiness = () => {
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
          title="Principles of Accounts"
          description=""
          imgSrc="https://www.thebalance.com/thmb/EoMD_9GenTcyaqB23M9HefwgEwI=/1500x1000/filters:fill(auto,1)/best-online-checking-accounts-4158695-FINAL-6788eea628ae4902a43ec3472ca7b7d0.png"
          href="/study/csec"
        />
        <SubjectCard
          title="Principles of Business"
          description=""
          imgSrc="https://d3q6qq2zt8nhwv.cloudfront.net/course/d9957ba6fb5e423eb2fce46b16f52452.jpg"
          href="/study/csec"
        />
        <SubjectCard
          title="Economics"
          description=""
          imgSrc="https://www.elpais.com.co/files/article_main/uploads/2017/02/21/58abcc9c1819c.jpeg"
          href="/study/csec"
        />
        <SubjectCard
          title="Office Administration"
          description=""
          imgSrc="https://wingateave.com.au/wp-content/uploads/2019/06/vector-inside-office-illustration.jpg"
          href="/study/csec"
        />
        <SubjectCard
          title="Electronic Document Preparation and Management"
          description=""
          imgSrc="https://static.vecteezy.com/system/resources/previews/000/120/069/non_2x/office-equipment-vector-set.jpg"
          href="/study/csec"
        />
      </Carousel>
    </>
  );
};

export default CsecBusiness;
