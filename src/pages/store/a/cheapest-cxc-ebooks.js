import React from "react";

import Layout from "../../../components/layout";
import PastPaperSlider from "../../../components/pastPaperSlider";

import SEO from "../../../components/seo";

import {MobileView} from "react-device-detect";

// Common
import Breadcrumb from "../../../common/breadcrumb";
import BreadcrumbItem from "../../../common/breadcrumbItem";
import AflTextbookCard from "../../../common/aflTextbookCard";

function Page() {
  return (
    <Layout>
      <SEO
        keywords={[
          `store`,
          `buy`,
          `buy cxc past papers`,
          `csec`,
          `cape`,
          `text books`,
          `purchase past papers`,
          `textbooks`,
          `tspring`,
          `merch`,
          `csec`,
          `pob`,
          `Principles of Business`,
          `mc`,
          `mcq`,
          `cxc answers`,
          `cxc paper 1 answers`,
          `mcq answers`,
          `past papers`,
          `csec past paper answers`,
          `cxc past papers`,
          `paperbin`,
          `past paperbin`,
          `cxcguide`,
          `cxc study guide`,
          `cxc past papers`,
          `csec past papers`,
          `past papers`,
          `store`,
          `cxc mathematics study guide`,
          `cxc english a study guide`,
          `cxc spanich study guide`,
          `cxc english b study guide`,
          `cxc free study guide`,
          `cape`,
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
          `10`,
          `$10`,
          `cheap books`,
          `books`,
          `reading`,
          `online learning`,
          `cxc paper 1`,
          `cxc july exams`,
          `Raheem McDonald`,
          `paperbin`,
          `past paperbin`,
          `pastpaperbin.com`,
          `paperbin.xyz`
        ]}
        title="Cheapest CXC eBooks"
        description="These are our top picks for the cheapest CXC ebooks for students."
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Store" href="/store" notLast />
          <BreadcrumbItem title="Cheapest CXC eBooks" />
        </Breadcrumb>

        <MobileView>
          <img
            src="https://caricom.org/wp-content/uploads/cxc-rebranding.png"
            alt="alt"
            style={{width: "100%"}}
          />

          <br />
        </MobileView>

        <h1 className="text-xl text-purple-700 font-bold">
          Cheapest CXC eBooks
        </h1>
        <br />

        <p>
          These are our picks for the most affordable ebooks for CSEC and CAPE
          students that are $10 or less.
        </p>
        <br />

        <div className="bulma-tabs">
          <ul>
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/41Y6jEhqdLL.jpg"
              title="Collins CSEC Chemistry – CSEC Chemistry Multiple Choice Practice"
              href="https://amzn.to/386v8q8"
              price="$10.99"
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51VKjccrnvL.jpg"
              title="Collins Biology Workbook for CSEC"
              href="https://amzn.to/38jfOH7"
              price=""
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/61T7duFg9BL.jpg"
              title="A World of Prose: Third Edition"
              href="https://amzn.to/3dEC2UV"
              price="$7.99"
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/41I5eKERdGL.jpg"
              title="Collins CSEC Integrated Science – CSEC Integrated Science Multiple Choice Practice"
              href="https://amzn.to/2ZhfbcL"
              price="$11.68"
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/514-wcXa0OL.jpg"
              title="Pascal Programming: 230+ Questions and Answers: GCSE, GCE and CSec Students"
              href="https://amzn.to/3i8DT7R"
              price="$5.97"
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51IoEiJ85RL.jpg"
              title="Multiple Choice Practice Tests in Mathematics for CXC (Nelson CSEC Practice Tests)"
              href="https://amzn.to/2Nzyetg"
              price="$12.00"
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/41K9TsXUF0L.jpg"
              title="English SBA: A Student's Guide"
              href="https://amzn.to/3dECpih"
              price="$3.50"
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51-sL5TXAXL.jpg"
              title="Economics for CSEC CXC A Caribbean Examinations Council Study Guide (Caribbean Examinations Council Study Guides)"
              href="https://amzn.to/2CHO5nu"
              price="$10.12"
            />
          </ul>
        </div>

        <div className="bulma-tabs">
          <ul>
            <AflTextbookCard
              isSwipableView
              imgScr=""
              title=""
              href=""
              price=""
            />
          </ul>
        </div>
      </section>

      <PastPaperSlider />

      <br />
      <div className="text-indigo-700 font-bold animate__animated animate__pulse ml-3">
        Swipe
        <i className="fas fa-long-arrow-alt-right ml-2 mr-2"></i>
        to see more
      </div>
    </Layout>
  );
}

export default Page;
