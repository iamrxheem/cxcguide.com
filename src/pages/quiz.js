import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from "gatsby";
import MobileMenu from "../components/mobileMenu";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";
import {MobileView, isMobile} from "react-device-detect";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
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
        title="Quiz"
        description="Prepare for your CXC multiple choice exams with our online quizzes."
      />
      <MobileMenu />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Quiz" href="/quiz" />
        </Breadcrumb>
        <MobileView>
          <img src="https://blog.malwarebytes.com/wp-content/uploads/2018/12/shutterstock_1214717467-900x506.jpg" />
          <br />
        </MobileView>
        <h1 className="text-xl text-blue-700 font-bold">Take a Quiz</h1>
        <br />
        <p className="text-base text-gray-700 text-base">
          Our quizzes are a great way to prepare for your paper 1 exam and a
          great way to track your progress. Practice by yourself or with your
          friends!
        </p>

        <br />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {/* First column */}
          <div>
            <div className="mx-auto">
              <MobileView>
                <br />
              </MobileView>

              <img
                className="object-contain sm:object-cover md:object-fill lg:object-none xl:object-scale-down"
                src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png"
              />
            </div>

            <MobileView>
              <br />
              <p className="text-base text-gray-700 text-base">
                Our CSEC quizzes are a organized by topic and subtopics. Test
                your knowledge against the some the most recent and repeated
                questions.
              </p>
            </MobileView>

            <br />
            <Link
              style={{
                width: isMobile ? "100%" : "",
                display: isMobile ? "block" : ""
              }}
              to="/quiz/csec"
              className="text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4"
            >
              View All
            </Link>
            <br />
            <br />
          </div>

          {/* Second column*/}
          <div>
            <div className="mx-auto">
              <MobileView>
                <br />
                <br />
              </MobileView>

              <img
                className="object-contain sm:object-cover md:object-fill lg:object-none xl:object-scale-down"
                src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png"
              />

              <MobileView>
                <br />
                <p className="text-base text-gray-700 text-base">
                  Our CAPE quizzes are taken from the most recent past papers
                  and specimen papers.
                </p>
              </MobileView>

              <br />
              <Link
                style={{
                  width: isMobile ? "100%" : "",
                  display: isMobile ? "block" : ""
                }}
                to="/quiz/cape"
                className="text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4"
              >
                View All
              </Link>
              <br />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
