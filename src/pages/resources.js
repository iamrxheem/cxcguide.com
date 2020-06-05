import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Carousel from "react-multi-carousel";
import LazyLoad from "react-lazyload";
import PastPaperSlider from "../components/pastPaperSlider";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";
import {MobileView} from "react-device-detect";
import {Bounce} from "react-reveal";

function Page() {
  return (
    <Layout>
      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <SEO keywords={[``, ``, ``, ``]} title="" description="" />

        <Breadcrumb>
          <BreadcrumbItem title="Resources" />
        </Breadcrumb>
      </section>

      <MobileView>
        <div className="bg-orange-500 p-6 text-white">
          <br />
          <br />
          <LazyLoad>
            <Bounce>
              <h6 className="text-2xl">
                Check out the 2019 answer{" "}
                <a
                  href="/resources/catalogue/2019"
                  className="underline text-white"
                >
                  catalogue
                </a>
              </h6>
            </Bounce>
          </LazyLoad>
          <br />
          <br />
        </div>
        <br />
      </MobileView>
      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <h1 className="text-xl text-blue-700">Resources</h1>

        <br />
        <p className="text-base text-gray-700">
          Get the answers for the lastest past paper exams, study notes and
          Youtube channels and videos made just for students.
        </p>

        <PastPaperSlider />
      </section>

      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div className="bg-purple-700">
          <div className="p-6">
            <br />
            <h6 className="text-white">MULTIPLE CHOICE ANSWERS</h6>

            <br />
            <p className="text-white">
              Get the answers for the most recent multiple choice past papers.
            </p>

            <br />
            <a
              href="/resources/MCQ"
              className="bg-transparent hover:bg-purple-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            >
              <small className="text-white text-small">GET THEM</small>
              <i className="fas fa-long-arrow-alt-right text-gray-100 pl-2"></i>
            </a>
          </div>
          <br />
        </div>

        {/* Second column*/}
        <div>
          <MobileView>
            <br />
          </MobileView>
          <div className="bg-blue-500 md:ml-3 lg:ml-3 xl:ml-3">
            <div className="p-6">
              <br />
              <h6 className="text-white">PAPER 2 EXPLANATIONS</h6>

              <br />
              <p className="text-white">
                Get our custom solutions plus links to other websites offering
                detailed guides.
              </p>

              <br />
              <a
                href="/"
                className="bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
              >
                <small className="text-white text-small">GET THEM</small>
                <i className="fas fa-long-arrow-alt-right text-gray-100 pl-2"></i>
              </a>
            </div>
            <br />
          </div>
        </div>

        {/* Third column */}
        <div>
          <MobileView>
            <br />
          </MobileView>
          <div className="bg-gray-500 md:ml-3 lg:ml-3 xl:ml-3">
            <div className="p-6">
              <br />
              <h6 className="text-white">SUPPORT OUR LOCAL AUTHORS</h6>

              <br />
              <p className="text-white">
                View our pick of books and guides written by Caribbean authors
                for Caribbean students.
              </p>

              <br />
              <a
                href="/store"
                className="bg-transparent hover:bg-gray-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
              >
                <small className="text-white text-small">SHOP NOW</small>
                <i className="fas fa-long-arrow-alt-right text-gray-100 pl-2"></i>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
