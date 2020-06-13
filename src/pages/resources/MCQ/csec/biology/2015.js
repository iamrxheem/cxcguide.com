import React from "react";

import Layout from "../../../../../components/layout";
import SEO from "../../../../../components/seo";
import {Bounce} from "react-reveal";
import ResourcesDisclaimer from "../../../../../common/resourcesDisclaimer";
import {MobileView, BrowserView} from "react-device-detect";

// Common
import Breadcrumb from "../../../../../common/breadcrumb";
import BreadcrumbItem from "../../../../../common/breadcrumbItem";
import PDFFile from "../../../../../common/PDFFile";
import Carousel from "react-multi-carousel";

const Page = () => {
  // Responsive
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
      <SEO
        keywords={[
          `csec`,
          `Biology`,
          `mc`,
          `multiple choice`,
          `mcq`,
          `cxc answers`,
          `cxc paper 1 answers`,
          `mcq answers`,
          `past papers`,
          `csec past paper answers`,
          `cxc past papers`,
          `paperbin`,
          `past paperbin`,
          `cxcguide`,
          `Raheem McDonald`,
          `cxc Biology past paper solutions`,
          `2019`,
          `june`,
          `july`,
          `cxc`,
          `caribbean examination council`
        ]}
        title="CSEC Biology 2015 Paper 1 Answers"
        description="Download free CSEC Biology 2015 multiple choice answers for both January and June exas, and study online with our online study guide."
      />

      <Layout>
        <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
          <Breadcrumb>
            <BreadcrumbItem title="..." href="/resources" />
            <BreadcrumbItem title="..." href="/resources/mcq" notLast />
            <BreadcrumbItem title="..." href="/resources/mcq/csec" notLast />
            <BreadcrumbItem
              href="/resources/mcq/csec/biology"
              title="Biology"
              notLast
            />

            <BreadcrumbItem title="2015" href="/resources/mcq/csec" />
          </Breadcrumb>
        </section>

        <MobileView>
          <Carousel
            autoPlay
            ssr={true}
            responsive={responsive}
            infinite={true}
            arrows={false}
            partialVisible={true}
            swipeable={true}
            dots={false}
            showDots={false}
            keyBoardControl={true}
          >
            <div className="bg-purple-700 p-6 text-white">
              <h6 className="text-2xl">
                All the past papers answers you need in one place!
              </h6>
            </div>
            <div className="bg-pink-500 p-6 text-white">
              <Bounce>
                <h6 className="text-2xl">
                  Need answers for more science subjects? Get them{" "}
                  <a
                    href="/resources/mcq/csec/sciences"
                    className="underline text-white"
                  >
                    here!
                  </a>
                </h6>
              </Bounce>
            </div>
          </Carousel>
        </MobileView>

        <section className="flex-1 full max-w-6xl px-4 mx-auto py-3">
          <br />
          <h1 className="text-xl text-gray-700">Biology 2015 MC Answers</h1>
          <br />
          <p className="mt-0 mb-4 text-base text-gray-600">
            These are the answers for the Biology 2015 exams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div>
              <>
                <PDFFile title="Download the January answers" href="" />

                <br />
                <br />
                <PDFFile title="Download the June answers" href="" />

                <MobileView>
                  <br />
                  <div id="disqus_thread"></div>
                </MobileView>

                <ResourcesDisclaimer />
              </>
            </div>

            <div>
              <BrowserView>
                <div id="disqus_thread"></div>
              </BrowserView>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Page;
