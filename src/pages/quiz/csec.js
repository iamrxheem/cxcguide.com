import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
// import {Link} from "gatsby";

// Common
import Breadcrumb from "../../common/breadcrumb";
import BreadcrumbItem from "../../common/breadcrumbItem";
// import {MobileView} from "react-device-detect";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[``, ``, ``, ``]} title="CSEC Quiz" description="" />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Quiz" href="/quiz" notLast />
          <BreadcrumbItem title="CSEC" href="/quiz/csec" />
        </Breadcrumb>
      </section>
    </Layout>
  );
}

export default IndexPage;
