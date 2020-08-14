import React from "react";

import Layout from "../../../../components/layout";
import SEO from "../../../../components/seo";
// import {MobileView} from "react-device-detect";
import {Bounce} from "react-reveal";

// Common
import Breadcrumb from "../../../../common/breadcrumb";
import BreadcrumbItem from "../../../../common/breadcrumbItem";
import CSECMCQNav from "../../../../components/csecMCQNav";

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
            title="CSEC Multiple Choice Answers"
            description=""
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Resources" href="/resources" notLast />
              <BreadcrumbItem title="MCQ" href="/resources/mcq" notLast />
              <BreadcrumbItem title="CSEC" href="/resources/mcq/csec" />
            </Breadcrumb>
          </section>

          <>
            <div className="bg-orange-500 p-6 text-white">
              <br />
              <br />

              <h6 className="text-2xl">
                Check out the 2019 answer{" "}
                <a
                  href="/resources/catalogue/2019"
                  className="underline text-white"
                >
                  catalogue
                </a>
              </h6>

              <br />
              <br />
            </div>
            <br />
          </>

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <h1 className="text-xl text-gray-700">CSEC MC Answers</h1>
            <>
              <CSECMCQNav />
            </>

            <Bounce>
              <h1 className="text-xl text-gray-700">Business</h1>
            </Bounce>
            <br />

            <p className="text-gray-700">
              Select your course to download available past paper answers.
            </p>

            <br />
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <ul className="ml-5">
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/office-administration"
                      className="text-blue-500"
                    >
                      Office Administration
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a href="/resources/mcq/csec/poa" className="text-blue-500">
                      Principles of Accounts
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a href="/resources/mcq/csec/pob" className="text-blue-500">
                      Principles of Business
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="ml-5">
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/economics"
                      className="text-blue-500"
                    >
                      Economics
                    </a>
                  </li>

                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      href="/resources/mcq/csec/edpm"
                      className="text-blue-500"
                    >
                      Electronic Document Preparation and Management
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
