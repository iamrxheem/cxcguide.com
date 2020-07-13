import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`cxc`, `affiliate links`, `privacy`, `cxc guide`]}
        title="Affiliate Disclosure"
        description="This note describes our affiliate links disclosure."
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Affiliate Disclosure" />
        </Breadcrumb>

        <img src="https://affiliateghost.com/wp-content/uploads/1-Featured-Image-14-540x361.png" />

        <h1 className="text-xl text-blue-700 font-bold">
          Affiliate Disclosure
        </h1>

        <br />
        <p>We believe in transparency on the web.</p>

        <br />
        <p>
          Some of the links on our website are affiliate links, meaning, at no
          additional cost to you, we will earn a commission if you click through
          and make a purchase. All proceeds are invested back into the website
          and are used to cover operational costs.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
