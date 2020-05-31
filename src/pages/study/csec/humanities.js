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
              <BreadcrumbItem
                title="Humanities"
                href="/study/csec/humanities"
              />
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
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
