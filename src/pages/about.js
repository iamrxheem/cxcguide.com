import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`about`, `cxc`, `csec`, `cape`, `cxcguide`, `csec faq`]}
        title="About"
        description="Get to know us and the services that we provide."
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="About" href="/about" />
        </Breadcrumb>
      </section>
    </Layout>
  );
}

export default AboutPage;
