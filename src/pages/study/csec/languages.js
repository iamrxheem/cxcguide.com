import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import CsecStudyCarousel from "../../../components/csecStudyCarousel";
// import {Link} from "gatsby";
import CSECStudyNavigation from "../../../components/csecStudyNavigation";

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
            title="CSEC Languages Study Guides"
            description=""
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Study" href="/study" notLast />
              <BreadcrumbItem title="CSEC" href="/study/csec" notLast />
              <BreadcrumbItem title="Languages" href="/study/csec/languages" />
            </Breadcrumb>
          </section>
          <CsecStudyCarousel />

          <br />
          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <CSECStudyNavigation />
            <br />
            <div>
              <>
                <></>
              </>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
