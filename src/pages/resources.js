import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import LazyLoad from "react-lazyload";
import PastPaperSlider from "../components/pastPaperSlider";
import MobileMenu from "../components/mobileMenu";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";
import {MobileView, BrowserView} from "react-device-detect";
import {Bounce} from "react-reveal";

function Page() {
  return (
    <Layout>
      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <SEO
          keywords={[
            `cxc`,
            `free csec past papers`,
            `cape past papers`,
            `CAPE`,
            `cxc study guide`,
            `cxc past papers`,
            `csec past papers`,
            `past papers`,
            `cxc mathematics study guide`,
            `cxc english a study guide`,
            `cxc spanich study guide`,
            `cxc english b study guide`,
            `cxc free study guide`,
            `free`,
            `study online`,
            `online learning`,
            `CXC online learning`,
            `CAPE past papers`,
            `CAPE past paper answers`,
            `free cxc past papers`,
            `Caribbean Examination Council`,
            `cxc past papers online`,
            `paperbin cxc`,
            `csec exam`,
            `csec chemistry syllabus`,
            `free online cxc classes`,
            `free maths cxc classes`,
            `free english cxc classes`,
            `free spanish cxc classes`,
            `free literature cxc classes`,
            `free CAPE cxc classes`,
            `free mob cxc classes`,
            `free poa cxc classes`,
            `free pob cxc classes`,
            `free english cxc classes`,
            `smile jamaica tvj`,
            `past paper bin`,
            `cxc past paper bin`,
            `jamaica`,
            `trinidad and tobago`,
            `cxc model question`,
            `cxc paper 1`,
            `cxc july exams`,
            `Raheem McDonald`,
            `paperbin`,
            `past paperbin`,
            `pastpaperbin.com`,
            `paperbin.xyz`
          ]}
          title="CXC Past Paper Answers and Guides"
          description="Get free CXC past papers for CSEC and CAPE with answer guides and explanations."
        />
        <MobileMenu />

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
                Check out the 2020 answer{" "}
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

        <MobileView>
          <PastPaperSlider />
        </MobileView>
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
              href="/resources/mcq"
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
          <div className="bg-gray-600 md:ml-3 lg:ml-3 xl:ml-3">
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
                className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
              >
                <small className="text-white text-small">SHOP NOW</small>
                <i className="fas fa-long-arrow-alt-right text-gray-100 pl-2"></i>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>

      <BrowserView>
        <PastPaperSlider />
      </BrowserView>
    </Layout>
  );
}

export default Page;
