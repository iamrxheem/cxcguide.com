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
      <SEO keywords={[``, ``, ``, ``]} title="Start Studying" description="" />

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
          <div className="">
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
            <button
              href=""
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Start Studying
            </button>
          </div>

          <div className="">
            <MobileView>
              <br />
              <br />
            </MobileView>

            <figure>
              <Link to="/study/cape">
                <img
                  className=""
                  src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png"
                />
              </Link>
            </figure>

            <br />
            <p className="text-base text-gray-700 text-base">
              Your CAPE examinations are important and we&rsquo;ve brought
              together materials from teachers and students from across the
              Caribbean.
            </p>

            <br />
            <button
              href=""
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Start Studying
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
