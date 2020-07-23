import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import MCQ from "../../../common/MCQ";
import MCQItem from "../../../common/MCQItem";

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
            keywords={[
              `pob`,
              `Principles of Business`,
              `csec`,
              `quiz`,
              `online quiz`,
              `cxc past papers`,
              `cxc textbooks`,
              `csec textbooks`,
              `cxc study guide`,
              `csec practice quiz`,
              `cxc etest`,
              `csec etest`,
              `elearning`,
              `online learning`,
              `jamaica`,
              `Raheem McDonald`
            ]}
            title="CSEC Principles of Business Quiz"
            description="Our online Principles of Business test quiz will assist you to improve your knowledge in a fun interactive way, and prepare you for your CXC exams."
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Quiz" href="/quiz" notLast />
              <BreadcrumbItem title="CSEC" href="/quiz/csec" notLast />
              <BreadcrumbItem title="POB" />
            </Breadcrumb>
          </section>

          <section className="flex-1 full max-w-5xl sm:px-4 px-2 mx-auto">
            <MCQ>
              {/* Question */}
              <MCQItem
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />
            </MCQ>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
