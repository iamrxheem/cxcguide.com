import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import CsecStudyCarousel from "../../../components/csecStudyCarousel";
// import {Link} from "gatsby";

// Common
import Breadcrumb from "../../../common/breadcrumb";
import BreadcrumbItem from "../../../common/breadcrumbItem";
// import {MobileView} from "react-device-detect";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import {BrowserView, MobileView} from "react-device-detect";
import SubjectCard from "../../../common/subjectCard";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <Layout>
          <SEO
            keywords={[``, ``, ``, ``]}
            title="CSEC Humanities Study Guides"
            description=""
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Study" href="/study" notLast />
              <BreadcrumbItem title="CSEC" href="/study/csec" notLast />
              <BreadcrumbItem title="Languages" href="/study/csec/languages" />
            </Breadcrumb>
          </section>
          <CsecStudyCarousel />

          <br />
          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <BrowserView>
              <div className="justify-center my-8 select-none flex">
                <a
                  href="/study/csec/business"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-700 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                >
                  Business
                </a>
                <a
                  href="/study/csec/humanities"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-pink-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
                >
                  Humanities
                </a>
                <a
                  href="/study/csec/sciences"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-red-700 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none mr-2"
                >
                  Science and Technology
                </a>
                <a
                  href="/study/csec/languages"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-orange-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
                >
                  Languages
                </a>
              </div>
            </BrowserView>

            <MobileView>
              <div className="justify-center my-8 select-none flex">
                <a
                  href="/study/csec/business"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-700 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                >
                  Business
                </a>
                <a
                  href="/study/csec/humanities"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-pink-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
                >
                  Humanities
                </a>
              </div>

              <div
                style={{marginTop: "-15px"}}
                className="justify-center my-8 select-none flex"
              >
                <a
                  href="/study/csec/sciences"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-red-700 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none mr-2"
                >
                  Science and Tech
                </a>
                <a
                  href="/study/csec/languages"
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-orange-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
                >
                  Languages
                </a>
              </div>
            </MobileView>

            <br />
            <div>
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
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
