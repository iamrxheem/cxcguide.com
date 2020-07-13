import React from "react";

import StoreLayout from "../../../layouts/storeLayout";
import PastPaperSlider from "../../../components/pastPaperSlider";

import SEO from "../../../components/seo";
import Carousel from "react-multi-carousel";
import {MobileView} from "react-device-detect";

// Common
import Breadcrumb from "../../../common/breadcrumb";
import BreadcrumbItem from "../../../common/breadcrumbItem";
import AflTextbookCard from "../../../common/aflTextbookCard";

function Page() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 2
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 2
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };

  return (
    <StoreLayout>
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
          `cxc model question`,
          `cxc paper 1`,
          `cxc july exams`,
          `Raheem McDonald`,
          `paperbin`,
          `past paperbin`,
          `pastpaperbin.com`,
          `paperbin.xyz`
        ]}
        title="Top Picks CXC Guides and Textbooks"
        description="Our recommended picks for CSEC and CAPE textbooks and resources to prepare you for your CXC exams."
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Store" href="/store" notLast />
          <BreadcrumbItem title="Top Picks" />
        </Breadcrumb>

        <MobileView>
          <img
            src="https://t4.ftcdn.net/jpg/02/82/21/17/240_F_282211773_eylgpNd984xEvGqCQpaAiEs4p8gcryoM.jpg"
            alt="alt"
            style={{width: "100%"}}
          />

          <br />
        </MobileView>

        <h1 className="text-xl text-purple-700 font-bold">Our Top Picks</h1>
        <br />

        <p>
          These are our top picks for multiple choice textbooks to prepare you
          for your 2020 exams.
        </p>
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

        <br />
        <div className="text-blue-700 font-bold animate__animated animate__pulse ml-3">
          Swipe
          <i className="fas fa-long-arrow-alt-right ml-2 mr-2"></i>
          to see more
        </div>

        <br />
        <div
          className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm">
                We use affiliate links. Read our{" "}
                <a
                  target="_blank"
                  href="/affiliate-disclosure"
                  className="underline"
                >
                  affiliate disclosure
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <br />

        <MobileView>
          <br />
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://img.selzstatic.com/items/237997/0cgk154gdqw/original.png?w=1600&fit=min"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Question Bank</div>
              <p className="text-gray-700 text-base">
                The updated collection of questions designed by Kerwin Springer
                for students to easily prepare and succeed at 2020 July CSEC
                Maths exams
              </p>

              <br />
              <div className="mx-auto items-center" style={{margin: "0 auto"}}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://kerwinspringer.com/"
                  className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-3 px-5 rounded"
                >
                  Get it now
                </a>
              </div>
              <br />
            </div>
          </div>

          <br />
        </MobileView>

        <br />
        <h1 className="text-xl text-purple-700 font-bold">
          CAPE Multiple Choice
        </h1>
        <br />

        <p>
          Taken straight from past paper and mock questions, answered and
          explained by the experts.
        </p>
        <br />

        <div className="bulma-tabs">
          <ul>
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51XI98QJE+L.jpg"
              title="Collins CAPE Chemistry  CAPE Chemistry Multiple Choice Practice"
              href="https://amzn.to/3demwir"
              price=""
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51gfPkjdRSL.jpg"
              title="Physics for CAPE Unit 1 CXC A Caribbean Examinations Council Study Guide by Caribbean Examinations Council, David, Terry, Crichlow, Joyc (2014) Paperback"
              href="https://www.amazon.com/gp/product/B011SKF2UI/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B011SKF2UI&linkId=bf143babfd6ca28f3a4fa3d379b0785e"
              price=""
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51tEAdMU3wL.jpg"
              title="Collins CAPE Revision Guide  Caribbean Studies"
              href="https://amzn.to/2YMLD6D"
              price=""
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51iM+x7RsYL.jpg"
              title="CAPE Accounting Unit 1: 450 Multiple Choice Questions Arranged By Topic"
              href="https://www.amazon.com/gp/product/B07WXT18ZF/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07WXT18ZF&linkId=ccfe86f3ba01c8aec0e9881b046f7305"
              price=""
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51fhVqaXotL.jpg"
              title="CAPE Accounting Unit 2: 450 Multiple Choice Questions by Topic"
              href="https://www.amazon.com/gp/product/B07YR935J3/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07YR935J3&linkId=83dc5efa0dc3392635bb9183d558ea21"
              price=""
            />

            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51vjNWPubPL.jpg"
              title="Economics for CAPE"
              href="https://www.amazon.com/gp/product/0008115893/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0008115893&linkId=19ccc42da91d46f49fa91c8adfb69ff0"
              price=""
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/41Wic7qYUtL.jpg"
              title="Collins Cape Revision Guide - Accounting"
              href="https://www.amazon.com/gp/product/0008116059/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0008116059&linkId=4c3a6ca5bb6c5c8091bd89d550e460a8"
              price=""
            />

            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51-SvCjcWML.jpg"
              title="Pure Maths CAPE Unit 1 A Caribbean Examinations Council Study Guide"
              href="https://www.amazon.com/gp/product/1408520397/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1408520397&linkId=567bcf00e013d6fa71b098d2478d0c77"
              price=""
            />

            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51WZV-1xD2L.jpg"
              title="Physics for CAPE Unit 2 A Caribbean Examinations Council Study Guide"
              href="https://www.amazon.com/gp/product/1408517647/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1408517647&linkId=26cf63ad7043d4ea7f36512f97102f83"
              price=""
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51OXLTHmKTL.jpg"
              title="Biology Unit 2 for CAPE® Examinations"
              href="https://www.amazon.com/gp/product/0521176913/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521176913&linkId=e2bf41ae863e5f8ec90e1b056de67d22"
              price=""
            />

            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51jxJHlJEjL.jpg"
              title="Communication Studies CAPE A Caribbean Examinations Council Study Guide"
              href="https://www.amazon.com/gp/product/1408509008/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1408509008&linkId=1367d5122631f3cf5abd7fd0929de71b"
              price=""
            />

            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51miqznbnfL.jpg"
              title="[Geography CAPE Unit 2 A CXC Study Guide (Caribbean Examinations Council Study Guide)] [Author: Caribbean Examinations Council] [July, 2012]"
              href="https://amzn.to/2UWgT1I"
              price=""
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51jqJtiS0sL.jpg"
              title="INFORMATION TECHNOLOGY for CAPE® Examinations"
              href="https://www.amazon.com/gp/product/1987486544/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1987486544&linkId=3065ae0f0b8bb53138452377f945a238"
              price=""
            />
            <AflTextbookCard
              isSwipableView
              imgScr="https://m.media-amazon.com/images/I/51GAzM7b01L.jpg"
              title="Management of Business CAPE Unit 1 CXC Study Guide: A Caribbean Examinations Council"
              href="https://www.amazon.com/gp/product/1408520958/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1408520958&linkId=3899aea524ef463c8a187f7f29cfb556"
              price=""
            />
          </ul>
        </div>

        <br />
        <Carousel
          responsive={responsive}
          ssr // means to render carousel on server-side.
          arrows
          autoPlay={true}
          infinite
          autoPlaySpeed={7000}
          keyBoardControl={true}
          swipeable={true}
          draggable={true}
        >
          <AflTextbookCard
            title="English A for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51-xbp2eiyL.jpg"
            description=""
            href="https://www.amazon.com/gp/product/0198413912/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0198413912&linkId=c207c006f3508c997818cd668f353c6f"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="english-a"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Mathematics for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51KrIODqdZL.jpg"
            description=""
            href="https://www.amazon.com/gp/product/0198414528/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0198414528&linkId=a8dffcbc5bf2b5eb5aa0bab5e8675ecc"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="maths"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Human and Social Biology "
            imgScr="https://m.media-amazon.com/images/I/51k7EpTE9bL.jpg"
            description=""
            href="https://www.amazon.com/gp/product/1408520834/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1408520834&linkId=b5c53495f79e3abddee7dcb2f3dc54a0"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="hsb"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Social Studies for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51Us1ktOyuL.jpg"
            description=""
            href=""
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="social studies"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Chemistry for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51GMDuC31lL.jpg"
            description=""
            href=""
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="chemistry"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Economics for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51-sL5TXAXL.jpg"
            description=""
            href="https://www.amazon.com/gp/product/1408516438/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1408516438&linkId=9e53ee054829c0aa093b8a350c2634c0"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="economics"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Biology for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51IIccsNVGL.jpg"
            description=""
            href="https://amzn.to/30UIjc7"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="biology"
            isSwipableView={false}
          />
          <AflTextbookCard
            title="Geography for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51pKbAF6TrL.jpg"
            description=""
            href="https://amzn.to/3104eP8"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="geography"
            isSwipableView={false}
          />
          <AflTextbookCard
            title="Caribbean History for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51jPaZXZdkL.jpg"
            description=""
            href="https://www.amazon.com/gp/product/1408526476/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1408526476&linkId=4b4b41ec4dd92d7f7dcdc8efac724c92"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="history"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Principle of Business"
            imgScr="https://m.media-amazon.com/images/I/5171PHTVWUL.jpg"
            description=""
            href="https://www.amazon.com/gp/product/0198437390/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0198437390&linkId=8a61183a20be0910e09623cacc49123d"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="pob"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Physical Education for CSEC"
            imgScr="https://m.media-amazon.com/images/I/5183-2Vxo9L.jpg"
            description=""
            href="https://www.amazon.com/gp/product/0198367120/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0198367120&linkId=80f88cfaa181a5ad6cd958167536b8f5"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="pe"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Integrated Science for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51IGuG2SlkL.jpg"
            description=""
            href="https://www.amazon.com/gp/product/0198413823/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0198413823&linkId=a4319b97644ce47e7485da31a03a11fc"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="intescience"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Technical Drawing for CSEC"
            imgScr="https://m.media-amazon.com/images/I/41bKbBUKDqL.jpg"
            description=""
            href=""
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="td"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="French for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51m4uSQSmKL.jpg"
            description=""
            href="https://www.amazon.com/gp/product/1408520362/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1408520362&linkId=62e9b0e6a20da77ae2e7595f2f169082"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="french"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Office Administration for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51YqMQBKjOL.jpg"
            description=""
            href="https://www.amazon.com/gp/product/1408516659/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1408516659&linkId=fef32414333d244509f86fb8f2103192"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="oa"
            isSwipableView={false}
          />

          <AflTextbookCard
            title="Information Technology for CSEC"
            imgScr="https://m.media-amazon.com/images/I/51YM7ZL0waL.jpg"
            description=""
            href="https://www.amazon.com/gp/product/0198437218/ref=as_li_tl?ie=UTF8&tag=cxcguide-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0198437218&linkId=10cbebfd62fc3c9b398d5ab3c52dd681"
            price=""
            hastagOne="csec"
            hastagTwo="study"
            hastagThree="it"
            isSwipableView={false}
          />
        </Carousel>
      </section>

      <PastPaperSlider />

      <br />
      <div className="text-indigo-700 font-bold animate__animated animate__pulse ml-3">
        Swipe
        <i className="fas fa-long-arrow-alt-right ml-2 mr-2"></i>
        to see more
      </div>
    </StoreLayout>
  );
}

export default Page;
