import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {MobileView} from "react-device-detect";
import CAPEQuizNav from "../../components/capeQuizNav";
import Collapsible from "react-collapsible";

// Common
import Breadcrumb from "../../common/breadcrumb";
import BreadcrumbItem from "../../common/breadcrumbItem";
// import {MobileView} from "react-device-detect";

// Layout
// import CSECQuizLayout from "../../layouts/csecQuizLayout";

function Page() {
  return (
    <Layout>
      <SEO
        keywords={[
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
        title="CSEC Quiz"
        description=""
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Quiz" href="/quiz" notLast />
          <BreadcrumbItem title="CAPE" href="/quiz/cape" />
        </Breadcrumb>

        <MobileView>
          <img
            src="https://blog.capterra.com/wp-content/uploads/2019/07/HEAD-HEAD-Your_One-Click_Guide_to_Online_Quiz_Design-_The_Easiest_Way_to_Catch_New_Leads-Hero_no_text_international-1200x630.png"
            style={{width: "100%"}}
          />
          <br />
        </MobileView>

        <h1 className="text-base text-xl">Take a Quiz</h1>

        <CAPEQuizNav />

        <br />
        <p>Select a subject and unit to get started</p>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div>
            <ul className="ml-5">
              {/* Item */}
              <li className="pb-5">
                <i
                  className="fas fa-angle-right mr-2"
                  style={{color: "#FF08D7"}}
                ></i>
                <a
                  href="/quiz/cape/communication-studies"
                  className="text-blue-500"
                >
                  Communication Studies
                </a>
              </li>

              {/* Item */}
              <li className="pb-5">
                <i
                  className="fas fa-angle-right mr-2"
                  style={{color: "#FF08D7"}}
                ></i>
                <a
                  href="/quiz/cape/unit-2/caribbean-studies"
                  className="text-blue-500"
                >
                  Caribbean Studies
                </a>
              </li>

              {/* Item */}
              <li className="pb-5">
                <Collapsible
                  trigger={
                    <>
                      <i
                        className="fas fa-angle-right mr-2"
                        style={{color: "#FF08D7"}}
                      ></i>
                      <a className="text-blue-500">Management of Business</a>
                    </>
                  }
                >
                  <ul className=" ml-5">
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-1/">Unit 1</a>
                    </li>
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-2/">Unit 2</a>
                    </li>
                  </ul>
                </Collapsible>
              </li>

              {/* Item */}
              <li className="pb-5">
                <Collapsible
                  trigger={
                    <>
                      <i
                        className="fas fa-angle-right mr-2"
                        style={{color: "#FF08D7"}}
                      ></i>
                      <a className="text-blue-500">Geography</a>
                    </>
                  }
                >
                  <ul className=" ml-5">
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-1/">Unit 1</a>
                    </li>
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-2/">Unit 2</a>
                    </li>
                  </ul>
                </Collapsible>
              </li>
            </ul>
          </div>
          <div>
            <ul className="ml-5">
              {/* Item */}
              <li className="pb-5">
                <Collapsible
                  trigger={
                    <>
                      <i
                        className="fas fa-angle-right mr-2"
                        style={{color: "#FF08D7"}}
                      ></i>
                      <a className="text-blue-500">Computer Science</a>
                    </>
                  }
                >
                  <ul className=" ml-5">
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-1/">Unit 1</a>
                    </li>
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-2/">Unit 2</a>
                    </li>
                  </ul>
                </Collapsible>
              </li>

              {/* Item */}
              <li className="pb-5">
                <Collapsible
                  trigger={
                    <>
                      <i
                        className="fas fa-angle-right mr-2"
                        style={{color: "#FF08D7"}}
                      ></i>
                      <a className="text-blue-500">Economics</a>
                    </>
                  }
                >
                  <ul className=" ml-5">
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-1/">Unit 1</a>
                    </li>
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-2/">Unit 2</a>
                    </li>
                  </ul>
                </Collapsible>
              </li>

              {/* Item */}
              <li className="pb-5">
                <Collapsible
                  trigger={
                    <>
                      <i
                        className="fas fa-angle-right mr-2"
                        style={{color: "#FF08D7"}}
                      ></i>
                      <a className="text-blue-500">Sociology</a>
                    </>
                  }
                >
                  <ul className=" ml-5">
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-1/">Unit 1</a>
                    </li>
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-2/">Unit 2</a>
                    </li>
                  </ul>
                </Collapsible>
              </li>

              {/* Item */}
              <li className="pb-5">
                <Collapsible
                  trigger={
                    <>
                      <i
                        className="fas fa-angle-right mr-2"
                        style={{color: "#FF08D7"}}
                      ></i>
                      <a className="text-blue-500">Chemistry</a>
                    </>
                  }
                >
                  <ul className=" ml-5">
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-1/">Unit 1</a>
                    </li>
                    <li className="mt-4 ml-5">
                      <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                      <a href="/quiz/cape/unit-2/">Unit 2</a>
                    </li>
                  </ul>
                </Collapsible>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Page;
