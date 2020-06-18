import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import CsecStudyCarousel from "../../components/csecStudyCarousel";
import CSECStudyNavigation from "../../components/csecStudyNavigation";

// Common
import Breadcrumb from "../../common/breadcrumb";
import BreadcrumbItem from "../../common/breadcrumbItem";
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
              `free`,
              `study online`,
              `online learning`,
              `CXC online learning`,
              `CAPE past papers`,
              `CAPE past paper answers`,
              `free cxc past papers`,
              `Caribbean Examination Council`,
              `cxc past papers online`,
              `paperbin cxc`,
              `csec exam`,
              `csec chemistry syllabus`,
              `free online cxc classes`,
              `free maths cxc classes`,
              `free english cxc classes`,
              `free spanish cxc classes`,
              `free literature cxc classes`,
              `free CAPE cxc classes`,
              `free mob cxc classes`,
              `free poa cxc classes`,
              `free pob cxc classes`,
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
              `paperbin.xyz`
            ]}
            title="CSEC Study Guides and Notes"
            description="Start studying online today for your CSEC exams online today. Explore online study notes, classes, quizes and exercises."
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Study" href="/study" notLast />
              <BreadcrumbItem title="CSEC" href="/study/csec" />
            </Breadcrumb>
          </section>
          <CsecStudyCarousel />

          <br />
          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <CSECStudyNavigation />
            <br />

            <>
              <></>
            </>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
