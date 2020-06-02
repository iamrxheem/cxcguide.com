import React from "react";

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
      <SEO keywords={[``, ``, ``, ``]} title="CSEC Quiz" description="" />

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

        <h1 className="text-base text-xl">Take a Quiz</h1>

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
                <a href="/quiz/csec/english-a" className="text-blue-500">
                  English A
                </a>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <a href="/quiz/csec/mathematics" className="text-blue-500">
                  Mathematics
                </a>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <a
                  href="/quiz/csec/information-technology"
                  className="text-blue-500"
                >
                  Information Technology
                </a>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <a href="/quiz/csec/economics" className="text-blue-500">
                  Economics
                </a>
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
                <a href="/quiz/csec/pob" className="text-blue-500">
                  Principles of Business
                </a>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <a href="/quiz/csec/biology" className="text-blue-500">
                  Biology
                </a>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <a href="/quiz/csec/social-studies" className="text-blue-500">
                  Social Studies
                </a>
              </li>
              <li className="pb-5">
                <i
                  style={{color: "#FF08D7"}}
                  className="fas fa-angle-right mr-2"
                ></i>
                <a href="/quiz/csec/geography" className="text-blue-500">
                  Geography
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Page;
