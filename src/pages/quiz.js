import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from "gatsby";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";
import {MobileView} from "react-device-detect";

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

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Quiz" href="/quiz" />
        </Breadcrumb>
        <MobileView>
          <img src="https://blog.malwarebytes.com/wp-content/uploads/2018/12/shutterstock_1214717467-900x506.jpg" />
          <br />
        </MobileView>
        <h1 className="text-2xl">Take a quiz</h1>
        <br />
        <p className="text-base text-gray-700 text-base">
          Our quizzes are a great way to prepare for your paper 1 exam and a
          great way to track your progress. Practice by yourself or with your
          friends!
        </p>
        <br />
        <p className="text-base text-gray-700 text-base">
          Let&#39;s get started. Select your course or level from the options
          below.
        </p>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {/* First column */}
          <div>
            <div className="mx-auto">
              <MobileView>
                <br />
              </MobileView>

              <Link to="/quiz/csec">
                <img
                  className="object-contain sm:object-cover md:object-fill lg:object-none xl:object-scale-down"
                  src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png"
                />
              </Link>
            </div>

            <br />
            <p className="text-gray-700">
              Our CSEC quizzes are a organized by topic and subtopics. Test your
              knowledge against the some the most recent and repeated questions.
            </p>
            <br />
            <br />

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <a
                  href="/quiz/csec"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  View All
                </a>
              </div>

              <div>
                <a
                  href="/study/csec"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  Start Studying
                </a>
              </div>
            </div>
          </div>

          {/* Second column*/}
          <div>
            <div className="mx-auto">
              <MobileView>
                <br />
                <br />
              </MobileView>

              <Link to="/quiz/cape">
                <img
                  className="object-contain sm:object-cover md:object-fill lg:object-none xl:object-scale-down"
                  src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png"
                />
              </Link>

              <br />
              <p className="text-gray-700">
                Our CAPE quizzes are taken from the most recent past papers and
                specimen papers.
              </p>
              <br />
              <br />

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                <div>
                  <a
                    href="/quiz/cape"
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    View All
                  </a>
                </div>

                <div>
                  <a
                    href="/study/cape"
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    Start Studying
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div
          className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">Past Paper Quiz</p>
          <p className="text-sm">
            Our quizzes are made from the most recent past paper questions.
          </p>
        </div>
        <br />
        <figure>
          <Link to="/quiz/cpea">
            <img
              className="object-contain sm:object-cover md:object-fill lg:object-none xl:object-scale-down"
              src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cpea.png"
            />
          </Link>
        </figure>
        <br />
        <a
          href="/quiz/cpea"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          View All
        </a>
      </section>
    </Layout>
  );
}

export default IndexPage;
