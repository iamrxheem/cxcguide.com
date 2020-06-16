import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../common/breadcrumb";
import PastPaperSlider from "../components/pastPaperSlider";

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
        title="CSEC and CAPE Lesson Plans, Study Guides and Past Paper Solutions"
        description="CXC Study Guide is the perfect free online study guide for all CSEC and CAPE subjects with study notes and qizzes, and past paper answers"
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb />

        <div id="paypal-button-container"></div>
      </section>

      <br />
      <PastPaperSlider />
    </Layout>
  );
}

export default IndexPage;
