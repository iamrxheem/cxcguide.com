import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import CsecStudyCarousel from "../../components/csecStudyCarousel";
import CSECStudyNavigation from "../../components/csecStudyNavigation";

// Common
// import AflTextbookCard from "../../common/aflTextbookCard";
import Breadcrumb from "../../common/breadcrumb";
import BreadcrumbItem from "../../common/breadcrumbItem";
import SubjectPreview from "../../common/subjectPreview";
import {MobileView} from "react-device-detect";
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
              <MobileView>
                <h1 className="text-xl text-purple-700 font-bold">
                  Most Popular
                </h1>
                <br />
                <p>
                  Most popular subjects rated by students - choose an subject to
                  begin.
                </p>

                <br />
                <ul className="ml-5">
                  <SubjectPreview
                    ready={false}
                    title="English A"
                    href="/study/csec/english-a"
                    description="As a compulsolry subjects, "
                    imgSrc="https://elearningindustry.com/wp-content/uploads/2017/04/elearning-writing-3-courses-to-help-you-improve-your-writing-skills.png"
                  />
                  <SubjectPreview
                    ready={false}
                    title="English B"
                    href="/study/csec/english-b"
                    description=""
                    imgSrc="https://smarthistory.org/wp-content/uploads/2020/04/BoltofLighteningSm-scaled.jpg"
                  />
                  <SubjectPreview
                    ready={false}
                    title="Mathematics"
                    href="/study/csec/mathematics"
                    description=""
                    imgSrc="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                  />
                  <SubjectPreview
                    ready={false}
                    title="Social Studies"
                    href="/study/csec/social-studies"
                    description=""
                    imgSrc="https://qph.fs.quoracdn.net/main-qimg-fbb16f9b23357e6ec796e8090ed4e8db"
                  />
                  <SubjectPreview
                    ready={false}
                    title="Biology"
                    href="/study/csec/biology"
                    description=""
                    imgSrc="https://s3.amazonaws.com/tinycards/image/0d00052f6a57f34ee429733e624989c3"
                  />
                  <SubjectPreview
                    ready={false}
                    title="Geography"
                    href="/study/csec/geography"
                    description=""
                    imgSrc="https://study.com/cimages/videopreview/videopreview-full/p3c2j8y73a.jpg"
                  />
                  <SubjectPreview
                    ready={false}
                    title="Chemistry"
                    href="/study/csec/chemistry"
                    description=""
                    imgSrc="https://d1ymz67w5raq8g.cloudfront.net/Pictures/2000x2000fit/9/2/3/503923_shutterstock_435818803_497153.jpg"
                  />
                </ul>
              </MobileView>
            </>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
