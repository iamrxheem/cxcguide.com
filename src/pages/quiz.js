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
      <SEO keywords={[``, ``, ``, ``]} title="Quiz" description="" />

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
          Let&#39;s get started. Select yuor curse or level from the options
          below.
        </p>

        <br />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="mx-auto">
            <figure>
              <Link to="/quiz/csec">
                <img
                  className=""
                  src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png"
                />
              </Link>
            </figure>
          </div>

          <div className="mx-auto">
            <figure>
              <Link to="/quiz/cape">
                <img
                  className=""
                  src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png"
                />
              </Link>
            </figure>
          </div>
        </div>

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
        <br />
      </section>
    </Layout>
  );
}

export default IndexPage;
