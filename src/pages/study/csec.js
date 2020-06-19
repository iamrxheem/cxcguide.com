import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import CsecStudyCarousel from "../../components/csecStudyCarousel";
import CSECStudyNavigation from "../../components/csecStudyNavigation";

AflTextbookCard;

// Common
import AflTextbookCard from "../../common/aflTextbookCard";
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

                <ul className="ml-5">
                  <SubjectPreview
                    ready={false}
                    title="English A"
                    href="/study/csec/english-a"
                    description=""
                  />
                  <SubjectPreview
                    ready={false}
                    title="English B"
                    href="/study/csec/english-b"
                    description=""
                  />
                  <SubjectPreview
                    ready={false}
                    title="Mathematics"
                    href="/study/csec/mathematics"
                    description=""
                  />
                  <SubjectPreview
                    ready={false}
                    title="Social Studies"
                    href="/study/csec/social-studies"
                    description=""
                  />
                  <SubjectPreview
                    ready={false}
                    title="Biology"
                    href="/study/csec/biology"
                    description=""
                  />
                  <SubjectPreview
                    ready={false}
                    title="Geography"
                    href="/study/csec/geography"
                    description=""
                  />
                  <SubjectPreview
                    ready={false}
                    title="Chemistry"
                    href="/study/csec/chemistry"
                    description=""
                  />
                </ul>

                <br />
                <br />
                <h1 className="text-xl text-purple-700 font-bold">
                  Our Recommended Textbooks
                </h1>

                <br />
                <div className="bulma-tabs">
                  <ul>
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/510-emPJHML.jpg"
                      title="CSEC Principles of Accounts Multiple Choice Practice"
                      href="https://amzn.to/2N7m76D"
                      price=""
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/41b82W5ShoL.jpg"
                      title="Collins CSEC Biology – CSEC Biology Multiple Choice Practice"
                      href="https://amzn.to/37F96KV"
                      price="$12.21"
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51-jkxsDlZL.jpg"
                      title="Concise Revision Course  English A - a Concise Revision Course for CSEC®"
                      href="https://www.amazon.com/gp/product/0008208131/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0008208131&linkId=78e72fa6156c50d6e212d89acb9d2bd8"
                      price=""
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51iepff-f7L.jpg"
                      title="CSEC Principles of Business Multiple Choice Practice"
                      href="https://amzn.to/2BiHBeh"
                      price="$16.51"
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51IoEiJ85RL.jpg"
                      title="Multiple Choice Practice Tests in Mathematics for CXC {{ MULTIPLE CHOICE PRACTICE TESTS IN MATHEMATICS FOR CXC }} By Ali, Fayad W. ( AUTHOR) Aug-04-2000"
                      href="https://amzn.to/2NaJg8l"
                      price="$31.12"
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/41Y6jEhqdLL.jpg"
                      title="Collins CSEC Chemistry – CSEC Chemistry Multiple Choice Practice"
                      href="https://amzn.to/3hBKVBL"
                      price="$10.99"
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51wKrA8405L.jpg"
                      title="CSEC Human and Social Biology Multiple Choice Practice"
                      href="https://amzn.to/3eea5nM"
                      price="$15.19"
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/41h3Dt2hqJL.jpg"
                      title="Multiple Choice Questions for CXC Biology"
                      href="https://amzn.to/30RVGde"
                      price=""
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/41b+ZF1LhsL.jpg"
                      title="Collins CSEC Physics - CSEC Physics Multiple Choice Practice"
                      href="https://amzn.to/30U0FtS"
                      price="$10.95"
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/418xFiaiwSL.jpg"
                      title="CSEC FOCUS POA- Multiple Choice Questions & Answers"
                      href="https://amzn.to/3d8TAIB"
                      price="$8.00"
                    />

                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51E9R9oq42L.jpg"
                      title="Concise Revision Course  Biology - a Concise Revision Course for CSEC®"
                      href="https://www.amazon.com/gp/product/0008157871/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0008157871&linkId=99f29ce50e799ef29e0d5f911a4b38d1"
                      price=""
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51PD57+-ISL.jpg"
                      title="Principles of Business for CSEC: Second edition"
                      href="https://www.amazon.com/gp/product/0198437358/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0198437358&linkId=d583474463429eb4d6f94c0da154816a"
                      price=""
                    />

                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/413eQ5gs+XL.jpg"
                      title="Concise Revision Course  Physics - a Concise Revision Course for CSEC®"
                      href="https://www.amazon.com/gp/product/0008157898/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0008157898&linkId=f6802671a30dca987da60adb8ecb679d"
                      price=""
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51VKjccrnvL.jpg"
                      title="Collins Biology Workbook for CSEC"
                      href="https://www.amazon.com/gp/product/0008116016/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0008116016&linkId=85d18c6424b56a402a32cad4a4b2a850"
                      price=""
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51mBTbnce6L.jpg"
                      title="Geography for CSEC"
                      href="https://www.amazon.com/gp/product/140852726X/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=140852726X&linkId=29ed2254b960259bd10839a25030a027"
                      price=""
                    />

                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/41VeUzd-4mL.jpg"
                      title="Practice Papers for CXC (CSEC) Spanish (Spanish Edition)"
                      href="https://amzn.to/30TCsnv"
                      price=""
                    />

                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/31PFwRjElQL.jpg"
                      title="Pre-CXC Spanish Practice Papers Grades 7-9"
                      href="https://amzn.to/3fGn2af"
                      price=""
                    />

                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/41QWK4X1MRL._SL500_.jpg"
                      title="Practice Papers for CXC Spanish"
                      href="https://amzn.to/3fvQoYW"
                      price=""
                    />

                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51k1HsGBZOL.jpg"
                      title="Electronic Document Preparation and Management for CSEC Study Guide: Covers latest CSEC Electronic Document Preparation and Management syllabus."
                      href="https://www.amazon.com/gp/product/1408516438/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1408516438&linkId=bdbe0033be4d945bb19da4c7e692e658"
                      price=""
                    />

                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51i1zitnvHL.jpg"
                      title="The Caribbean Environment for CSEC Geography"
                      href="https://www.amazon.com/gp/product/0198374569/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0198374569&linkId=5eb4233adf5c866e48596c029f6e277a"
                      price=""
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51tBYF2FnbL.jpg"
                      title="Caribbean Food and Nutrition for CSEC"
                      href="https://www.amazon.com/gp/product/0198374712/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0198374712&linkId=55eb40ca7b44abd7b3a9bb9b6f6b9421"
                      price=""
                    />
                    <AflTextbookCard
                      isSwipableView
                      imgScr="https://m.media-amazon.com/images/I/51u9syrcmGL.jpg"
                      title="Concise Revision Course – Integrated Science - a Concise Revision Course for CSEC®"
                      href="https://www.amazon.com/gp/product/0008300100/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0008300100&linkId=8936542a5d05b96df40649e9fe7883ef"
                      price=""
                    />
                  </ul>
                </div>
              </MobileView>
            </>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
