import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

// import {Link} from "gatsby";
import CSECQuizNav from "../../../components/csecQuizNav";

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
              `csec quiz`,
              `cxc exam`,
              `cxc multiple choice`,
              `free csec`,
              `cxc study guide`,
              `cxc jamaica lessons`,
              `study`,
              `english a`,
              `english b`,
              `social studies`,
              `cxc mc answers`,
              `cxc mathematics`,
              `csec maths`,
              `csec lessons online`,
              `cxc textbooks`,
              `caribbean exams`,
              `jamaica`,
              `free cxc study notes`,
              `Raheem McDonald`
            ]}
            title="CSEC Languages Quiz"
            description="Prepare for your CSEC languages exams with our online multiple choice quizzes."
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Quiz" href="/quiz" notLast />
              <BreadcrumbItem title="CSEC" href="/quiz/csec" notLast />
              <BreadcrumbItem title="Languages" href="/quiz/csec/languages" />
            </Breadcrumb>

            <MobileView>
              <img
                src="https://d1klenmqvfdv9g.cloudfront.net/wp-content/uploads/2018/11/Create-Quizzes-Easily-with-a-WordPress-Form-Plugin.jpg"
                style={{width: "100%"}}
              />
              <br />
            </MobileView>

            <h1 className="text-base text-xl">Take a Quiz</h1>

            <CSECQuizNav />

            <h6 className="text-xl">Langauges and Literature</h6>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <ul className="ml-5">
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a href="/quiz/csec/english-a" className="text-blue-500">
                      English A
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a href="/quiz/csec/english-b" className="text-blue-500">
                      English B
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a href="/quiz/csec/french" className="text-blue-500">
                      French
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
                    <a href="/quiz/csec/portuguese" className="text-blue-500">
                      Portuguese
                    </a>
                  </li>
                  <li className="pb-5">
                    <i
                      style={{color: "#FF08D7"}}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a href="/quiz/csec/spanish" className="text-blue-500">
                      Spanish
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
