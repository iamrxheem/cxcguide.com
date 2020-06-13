import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
// import PastPaperSlider from "../../components/pastPaperSlider";
// import Obfuscate from "react-obfuscate";
// import {Zoom} from "react-reveal";
import {MobileView} from "react-device-detect";
import {Bounce, Zoom} from "react-reveal";

// Common
import Breadcrumb from "../../common/breadcrumb";
import BreadcrumbItem from "../../common/breadcrumbItem";

function Page() {
  return (
    <Layout>
      <SEO
        keywords={[``, ``, ``, ``]}
        title="CSEC and CAPE Paper 1 Answers"
        description="Download the latest paper 1 answers for CSEC and CAPE subjects, and study online with our free study guides."
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem href="/resources" title="Resources" notLast />
          <BreadcrumbItem title="MCQ" />
        </Breadcrumb>
      </section>

      <div className="bg-purple-700 p-6 text-white">
        <h6 className="text-2xl typewriter break-normal">
          #1 hub for answers
          <div id="border"></div>
        </h6>
      </div>

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <br />
        <h1 className="chat-notification-title">Multiple Choice Answers</h1>

        <br />
        <p className="text-base text-grey-700">
          Most recent multiple choice answers for all the subjects you study.
        </p>

        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {/* CSEC MCQ Answers */}
          <div className="text-center">
            <Zoom>
              <a href="/resources/mcq/csec">
                <img
                  style={{margin: "auto", width: "150px"}}
                  className="object-contain sm:object-cover md:object-fill lg:object-none xl:object-scale-down"
                  src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png"
                />
              </a>
            </Zoom>

            <br />
            <p className="text-base text-gray-700">
              Download our collection of multiple choice answers for CSEC
              subjects.
            </p>
            <br />

            <a
              href="/resources/mcq/csec"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View all
            </a>
          </div>

          {/* CAPE MCQ Answers */}
          <div className="text-center">
            <MobileView>
              <br />
              <br />
              <br />
            </MobileView>

            <Bounce>
              <a href="/resources/mcq/cape">
                <img
                  style={{margin: "auto", width: "150px"}}
                  className="object-contain sm:object-cover md:object-fill lg:object-none xl:object-scale-down"
                  src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png"
                />
              </a>
            </Bounce>

            <br />
            <p className="text-base text-gray-700">
              &ldquo;CAPE resources are so hard to find&ldquo; - said no one
              after this.
            </p>
            <br />

            <a
              href="/resources/mcq/cape"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View all
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Page;
