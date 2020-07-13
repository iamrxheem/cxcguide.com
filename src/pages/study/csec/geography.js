import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import MathematicsLayout from "../../../layouts/mathematicsLayout";
import Breadcrumb from "../../../common/breadcrumb";
import BreadcrumbItem from "../../../common/breadcrumbItem";

// import {MobileView} from "react-device-detect";
import "react-multi-carousel/lib/styles.css";
// import Carousel from "react-multi-carousel";
// import SubjectCard from "../../common/subjectCard";

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
              `study`,
              `study cxc online`,
              `csec`,
              `cape`,
              `cxc study guide`,
              `cxc past papers`,
              `csec past papers`,
              `past papers`,
              `cxc mathematics study guide`,
              `cxc english a study guide`,
              `cxc spanich study guide`,
              `cxc english b study guide`,
              `cxc free study guide`,
              `free english cxc classes`,
              `smile jamaica tvj`,
              `past paper bin`,
              `cxc past paper bin`,
              `jamaica`,
              `trinidad and tobago`,
              `cxc model question`,
              `cxc paper 1`,
              `cxc july exams`,
              `Raheem McDonald`,
              `paperbin`,
              `past paperbin`,
              `pastpaperbin.com`,
              `paperbin.xyz`,
              `geo`,
              `geography`
            ]}
            title="CSEC Geography Online Study Guide"
            description="Start studying Geography and prepare for your CSEC exams with our online notes and quizzes made by teachers from around the Caribbean"
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Study" href="/study" notLast />
              <BreadcrumbItem title="CSEC" href="/study/csec" notLast />
              <BreadcrumbItem title="Geography" />
            </Breadcrumb>
          </section>

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <>
              <MathematicsLayout>
                <></>
              </MathematicsLayout>
            </>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
