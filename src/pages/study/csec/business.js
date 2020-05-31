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
              <BreadcrumbItem title="Business" href="/study/csec/business" />
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
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
