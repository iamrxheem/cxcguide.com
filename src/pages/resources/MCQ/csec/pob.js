import React from "react";

import Layout from "../../../../components/layout";
import SEO from "../../../../components/seo";
import {MobileView} from "react-device-detect";

// Common
import Breadcrumb from "../../../../common/breadcrumb";
import BreadcrumbItem from "../../../../common/breadcrumbItem";

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
              `Raheem McDonald`,
              ``
            ]}
            title="CSEC Principles of Business Multiple Choice Answers"
            description="Download free CSEC POB multiple choice answers, and study online with our online study guide."
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="..." href="/resources" />
              <BreadcrumbItem title="MCQ" href="/resources/mcq" notLast />
              <BreadcrumbItem title="CSEC" href="/resources/mcq/csec" notLast />
              <BreadcrumbItem title="POB" />
            </Breadcrumb>

            <MobileView>
              <img
                className="rounded"
                src="https://d3q6qq2zt8nhwv.cloudfront.net/course/d9957ba6fb5e423eb2fce46b16f52452.jpg"
                style={{width: "100%"}}
              />
            </MobileView>
            <br />

            <h1 className="text-xl text-gray-700">CSEC POB MC Answers</h1>

            <br />
            <p className="text-gray-700">
              Select a year to view both the January and June answers.
            </p>

            <br />
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <ul className="ml-1">
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2019"
                      className="text-blue-500"
                    >
                      2019
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2018"
                      className="text-blue-500"
                    >
                      2018
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2017"
                      className="text-blue-500"
                    >
                      2017
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2016"
                      className="text-blue-500"
                    >
                      2016
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2015"
                      className="text-blue-500"
                    >
                      2015
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2014"
                      className="text-blue-500"
                    >
                      2014
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="ml-1">
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2013"
                      className="text-blue-500"
                    >
                      2013
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2014"
                      className="text-blue-500"
                    >
                      2014
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2013"
                      className="text-blue-500"
                    >
                      2013
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2012"
                      className="text-blue-500"
                    >
                      2012
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2011"
                      className="text-blue-500"
                    >
                      2011
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/pob/2010"
                      className="text-blue-500"
                    >
                      2010
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
