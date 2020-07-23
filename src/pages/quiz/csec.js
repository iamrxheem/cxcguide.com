import React from "react";
import {Link} from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {MobileView} from "react-device-detect";
import CSECQuizNav from "../../components/csecQuizNav";

// Common
import Breadcrumb from "../../common/breadcrumb";
import BreadcrumbItem from "../../common/breadcrumbItem";
// import {MobileView} from "react-device-detect";

// Layout
// import CSECQuizLayout from "../../layouts/csecQuizLayout";

function Page() {
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
        title="CSEC Quiz"
        description=""
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Quiz" href="/quiz" notLast />
          <BreadcrumbItem title="CSEC" href="/quiz/csec" />
        </Breadcrumb>

        <MobileView>
          <img
            src="https://d1klenmqvfdv9g.cloudfront.net/wp-content/uploads/2018/11/Create-Quizzes-Easily-with-a-WordPress-Form-Plugin.jpg"
            style={{width: "100%"}}
          />
          <br />
        </MobileView>

        <h1 className="text-xl text-purple-700 font-bold">Take a Quiz</h1>

        <CSECQuizNav />

        <br />
        <p>Select a subject to get started</p>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div>
            <ul className="ml-5">
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <Link to="/quiz/csec/english-a" className="text-blue-500">
                  English A
                </Link>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <Link to="/quiz/csec/mathematics" className="text-blue-500">
                  Mathematics
                </Link>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <Link
                  to="/quiz/csec/information-technology"
                  className="text-blue-500"
                >
                  Information Technology
                </Link>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <Link to="/quiz/csec/economics" className="text-blue-500">
                  Economics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="ml-5">
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <Link to="/quiz/csec/pob" className="text-blue-500">
                  Principles of Business
                </Link>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <Link to="/quiz/csec/biology" className="text-blue-500">
                  Biology
                </Link>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <Link to="/quiz/csec/pe" className="text-blue-500">
                  Physical Education
                </Link>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <Link to="/quiz/csec/social-studies" className="text-blue-500">
                  Social Studies
                </Link>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <Link to="/quiz/csec/geography" className="text-blue-500">
                  Geography
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Page;
