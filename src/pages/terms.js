import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`cxc`, `terms of use`, `privacy`, `cxc guide`]}
        title="Terms of Use"
        description="This note describes our terms of use."
      />

      <section className="text-center"></section>
    </Layout>
  );
}

export default IndexPage;
