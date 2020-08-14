import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

// Common
import Breadcrumb from "../../../common/breadcrumb";
import BreadcrumbItem from "../../../common/breadcrumbItem";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            keywords={[``, ``, ``, ``]}
            title="CSEC Study Guides and Notes"
            description=""
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Resources" href="/resources" notLast />
              <BreadcrumbItem title="MCQ" href="/resources/mcq" notLast />
              <BreadcrumbItem title="CAPE" href="/resources/mcq/cape" />
            </Breadcrumb>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
