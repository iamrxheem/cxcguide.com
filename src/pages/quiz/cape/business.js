import React from "react";

import {Link} from "gatsby";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Collapsible from "react-collapsible";

// import {Link} from "gatsby";
import CAPEQuizNav from "../../../components/capeQuizNav";

// Common
import Breadcrumb from "../../../common/breadcrumb";
import BreadcrumbItem from "../../../common/breadcrumbItem";
import {MobileView} from "react-device-detect";
import "react-multi-carousel/lib/styles.css";

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
              `quizzes`,
              `quiz`,
              `online quiz`,
              `cxc`,
              `cape quiz`,
              `cxc exam`,
              `cxc multiple choice`,
              `free csec`,
              `cxc study guide`,
              `cxc jamaica lessons`,
              `study`,
              `Business`,
              `english b`,
              `social studies`,
              `cxc mc answers`,
              `cxc mathematics`,
              `csec maths`,
              `csec lessons online`,
              `cxc textbooks`,
              `caribbean exams`,
              `Humanities`,
              `free cxc study notes`,
              `Raheem McDonald`
            ]}
            title="CAPE Business Quiz"
            description="Prepare for your CAPE Business exams with our online multiple choice quizzes."
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

            <h6 className="text-xl">Business</h6>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
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
                          <Link className="text-blue-500">Accounting</Link>
                        </>
                      }
                    >
                      <ul className=" ml-5">
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-1/">Unit 1</Link>
                        </li>
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-2/">Unit 2</Link>
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
                          <Link className="text-blue-500">Economics</Link>
                        </>
                      }
                    >
                      <ul className=" ml-5">
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-1/">Unit 1</Link>
                        </li>
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-2/">Unit 2</Link>
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
                          <Link className="text-blue-500">
                            Entrepreneurship
                          </Link>
                        </>
                      }
                    >
                      <ul className=" ml-5">
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-1/">Unit 1</Link>
                        </li>
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-2/">Unit 2</Link>
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
                          <Link className="text-blue-500">
                            Financial Services Studies
                          </Link>
                        </>
                      }
                    >
                      <ul className=" ml-5">
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-1/">Unit 1</Link>
                        </li>
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-2/">Unit 2</Link>
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
                          <Link className="text-blue-500">
                            Logistics and Supply Chain
                          </Link>
                        </>
                      }
                    >
                      <ul className=" ml-5">
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-1/">Unit 1</Link>
                        </li>
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-2/">Unit 2</Link>
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
                          <Link className="text-blue-500">
                            Management of Business
                          </Link>
                        </>
                      }
                    >
                      <ul className=" ml-5">
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-1/">Unit 1</Link>
                        </li>
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-2/">Unit 2</Link>
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
                          <Link className="text-blue-500">Tourism</Link>
                        </>
                      }
                    >
                      <ul className=" ml-5">
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-1/">Unit 1</Link>
                        </li>
                        <li className="mt-4 ml-5">
                          <i className="fas fa-caret-right mr-2 text-teal-600"></i>
                          <Link to="/quiz/cape/unit-2/">Unit 2</Link>
                        </li>
                      </ul>
                    </Collapsible>
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
