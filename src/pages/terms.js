import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[``, ``, ``, ``]}
        title="Terms of Use"
        description="This note describes our terms of use."
      />

      <section className="text-center"></section>
    </Layout>
  );
}

export default IndexPage;
