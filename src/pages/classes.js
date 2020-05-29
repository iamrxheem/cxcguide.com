import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";

function Page() {
  return (
    <Layout>
      <SEO
        keywords={[``, ``, ``, ``]}
        title="CSEC and CAPE Classes"
        description=""
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Classes" href="/classes" />
        </Breadcrumb>
      </section>
    </Layout>
  );
}

export default Page;
