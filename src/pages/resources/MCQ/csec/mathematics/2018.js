import React from "react";

import Layout from "../../../../../components/layout";
import SEO from "../../../../../components/seo";
import ResourcesDisclaimer from "../../../../../common/resourcesDisclaimer";
import {MobileView, BrowserView} from "react-device-detect";

// Common
import Breadcrumb from "../../../../../common/breadcrumb";
import BreadcrumbItem from "../../../../../common/breadcrumbItem";
import PDFFile from "../../../../../common/PDFFile";

const Page = () => {
  return (
    <>
      <SEO
        keywords={[
          `csec`,
          `Mathematics`,
          `mc`,
          `multiple choice`,
          `mcq`,
          `cxc answers`,
          `cxc paper 1 answers`,
          `mcq answers`,
          `past papers`,
          `csec past paper answers`,
          `cxc past papers`,
          `paperbin`,
          `past paperbin`,
          `cxcguide`,
          `Raheem McDonald`,
          `cxc Mathematics past paper solutions`,
          `2018`,
          `june`,
          `july`,
          `cxc`,
          `caribbean examination council`
        ]}
        title="CSEC Mathematics 2019 Paper 1 Answers"
        description="Download free CSEC Mathematics 2018 multiple choice answers for both January and June exas, and study online with our online study guide."
      />

      <Layout>
        <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
          <Breadcrumb>
            <BreadcrumbItem title="..." href="/resources" />
            <BreadcrumbItem title="..." href="/resources/mcq" notLast />
            <BreadcrumbItem title="..." href="/resources/mcq/csec" notLast />
            <BreadcrumbItem
              href="/resources/mcq/csec/mathematics"
              title="Mathematics"
              notLast
            />

            <BreadcrumbItem title="2018" href="/resources/mcq/csec" />
          </Breadcrumb>
        </section>

        <MobileView>
          <img
            src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
            style={{width: "100%"}}
          />
        </MobileView>

        <section className="flex-1 full max-w-6xl px-4 mx-auto py-3">
          <br />
          <h1 className="text-xl text-gray-700">Mathematics 2018 MC Answers</h1>
          <br />
          <p className="mt-0 mb-4 text-base text-gray-600">
            These are the answers for the Mathematics 2018 exams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div>
              <>
                <PDFFile title="Download the January answers" href="" />

                <br />
                <br />
                <PDFFile title="Download the June answers" href="" />

                <MobileView>
                  <br />
                  <div id="disqus_thread"></div>
                </MobileView>

                <ResourcesDisclaimer />
              </>
            </div>

            <div>
              <BrowserView>
                <div id="disqus_thread"></div>
              </BrowserView>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Page;
