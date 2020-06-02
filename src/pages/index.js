import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../common/breadcrumb";
import PastPaperSlider from "../components/pastPaperSlider";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[``, ``, ``, ``]}
        title="CSEC and CAPE Lesson Plans, Study Guides and Past Paper Solutions"
        description=""
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb />
      </section>

      <br />
      <PastPaperSlider />
    </Layout>
  );
}

export default IndexPage;
