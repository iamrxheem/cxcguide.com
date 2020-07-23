import React from "react";
import MobileMenu from "../components/mobileMenu";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from "gatsby";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";
import {MobileView, isMobile} from "react-device-detect";

function Page() {
  return (
    <Layout>
      <MobileMenu />
      <SEO
        keywords={[
          `study`,
          `study cxc online`,
          `csec`,
          `cape`,
          `cxc study guide`,
          `cxc past papers`,
          `csec past papers`,
          `past papers`,
          `cxc mathematics study guide`,
          `cxc english Link study guide`,
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
        title="Start Studying"
        description="Start studying online today for your CSEC and CAPE exams. Explore online study notes, classes, quizes and exercises."
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Start Studying" to="/study" />
        </Breadcrumb>

        <MobileView>
          <img src="https://www.how-to-study.com/images/study-skills-assessments.jpg" />
          <br />

          <h1 className="text-2xl">Start studying</h1>

          <br />
          <p className="text-base text-gray-700 text-base">
            Let&rsquo;s get started! Select your your course or level from the
            list of options below.
          </p>

          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div style={{margin: isMobile ? "auto" : ""}}>
              <figure>
                <img
                  className=""
                  src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png"
                />
              </figure>

              <br />
              <p className="text-base text-gray-700 text-base">
                Get access to hundreds of study notes, downloadabe handouts and
                much more with our CSEC guides and quizzes.
              </p>

              <br />
              <Link
                style={{
                  width: isMobile ? "100%" : "",
                  display: isMobile ? "block" : ""
                }}
                to="/study/csec"
                className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
              >
                Start Studying
              </Link>
            </div>

            <div className="">
              <MobileView>
                <br />
                <br />
              </MobileView>

              <figure>
                <img
                  className=""
                  src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png"
                />
              </figure>

              <br />
              <p className="text-base text-gray-700 text-base">
                Your CAPE examinations are important and we&rsquo;ve brought
                together materials from teachers and students from across the
                Caribbean.
              </p>

              <br />
              <Link
                style={{
                  width: isMobile ? "100%" : "",
                  display: isMobile ? "block" : ""
                }}
                to="/study/cape"
                className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
              >
                Start Studying
              </Link>
            </div>
          </div>

          <br />
          <br />
          <div>
            <figure>
              <img
                className=""
                src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/ccslc.png"
              />
            </figure>

            <br />
            <a
              style={{
                width: isMobile ? "100%" : "",
                display: isMobile ? "block" : ""
              }}
              href="#"
              disabled
              className="disabled text-center bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4"
            >
              Coming soon
            </a>
          </div>
        </MobileView>
      </section>
    </Layout>
  );
}

export default Page;
