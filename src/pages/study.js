import React from "react";

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
        title="Start Studying"
        description="Start studying online today for your CSEC and CAPE exams. Explore online study notes, classes, quizes and exercises."
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Study" href="/study" />
        </Breadcrumb>

        <MobileView>
          <img src="https://www.how-to-study.com/images/study-skills-assessments.jpg" />
          <br />
        </MobileView>
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
              <Link to="/study/csec">
                <img
                  className=""
                  src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png"
                />
              </Link>
            </figure>

            <br />
            <p className="text-base text-gray-700 text-base">
              Get access to hundreds of study notes, downloadabe handouts and
              much more with our CSEC guides and quizzes.
            </p>

            <br />
            <a
              style={{
                width: isMobile ? "100%" : "",
                display: isMobile ? "block" : ""
              }}
              href="/study/csec"
              className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            >
              Start Studying
            </a>
          </div>

          <div className="">
            <MobileView>
              <br />
              <br />
            </MobileView>

            <figure>
              <a href="/study/cape">
                <img
                  className=""
                  src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png"
                />
              </a>
            </figure>

            <br />
            <p className="text-base text-gray-700 text-base">
              Your CAPE examinations are important and we&rsquo;ve brought
              together materials from teachers and students from across the
              Caribbean.
            </p>

            <br />
            <a
              style={{
                width: isMobile ? "100%" : "",
                display: isMobile ? "block" : ""
              }}
              href="/study/cape"
              className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            >
              Start Studying
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Page;
