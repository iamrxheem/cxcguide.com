import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Obfuscate from "react-obfuscate";
// import {Zoom} from "react-reveal";
// import {BrowserView} from "react-device-detect";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";

function Page() {
  return (
    <Layout>
      <SEO
        keywords={[`feedback`, `cxc`, `cxcguide`, `Raheem McDonald`]}
        title="Feedback"
        description="Leave your feedback here."
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Feedback" />
        </Breadcrumb>
      </section>
      <br />
      <div id="disqus_thread"></div>
      <br />
    </Layout>
  );
}

export default Page;
