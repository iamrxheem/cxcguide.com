import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import CsecStudyCarousel from "../../components/csecStudyCarousel";
// import {Link} from "gatsby";

// Common
import Breadcrumb from "../../common/breadcrumb";
import BreadcrumbItem from "../../common/breadcrumbItem";
// import {MobileView} from "react-device-detect";
import "react-multi-carousel/lib/styles.css";
import {BrowserView, MobileView} from "react-device-detect";
import $ from "jquery";

import CsecHumanities from "../../csec/csecHumanities";
import CsecSciences from "../../csec/csecSciences";
import CsecLanguages from "../../csec/csecLanguages";
import CsecBusiness from "../../csec/csecBusiness";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $("#humanities").hide();
    $("#sciences").hide();
    $("#languages").hide();

    $("#business").show();
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            keywords={[``, ``, ``, ``]}
            title="CSEC Study Guides and Notes"
            description=""
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
            <BrowserView>
              <div className="justify-center my-8 select-none flex">
                <button
                  onClick={() => {
                    $("#humanities").hide();
                    $("#sciences").hide();
                    $("#languages").hide();

                    $("#business").show();
                  }}
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-700 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                >
                  Business
                </button>
                <button
                  onClick={() => {
                    $("#business").hide();
                    $("#sciences").hide();
                    $("#languages").hide();

                    $("#humanities").show();
                  }}
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-pink-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
                >
                  Humanities
                </button>
                <button
                  onClick={() => {
                    $("#business").hide();
                    $("#humanities").hide();
                    $("#languages").hide();

                    // Show
                    $("#sciences").show();
                  }}
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-red-700 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none mr-2"
                >
                  Science and Technology
                </button>
                <button
                  onClick={() => {
                    $("#business").hide();
                    $("#sciences").hide();
                    $("#humanities").hide();

                    // Show
                    $("#languages").show();
                  }}
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-orange-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
                >
                  Languages
                </button>
              </div>
            </BrowserView>

            <MobileView>
              <div className="justify-center my-8 select-none flex">
                <button
                  onClick={() => {
                    $("#humanities").hide();
                    $("#sciences").hide();
                    $("#languages").hide();

                    $("#business").show();
                  }}
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-700 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                >
                  Business
                </button>
                <button
                  onClick={() => {
                    $("#business").hide();
                    $("#sciences").hide();
                    $("#languages").hide();

                    $("#humanities").show();
                  }}
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-pink-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
                >
                  Humanities
                </button>
              </div>

              <div
                style={{marginTop: "-15px"}}
                className="justify-center my-8 select-none flex"
              >
                <button
                  onClick={() => {
                    $("#business").hide();
                    $("#humanities").hide();
                    $("#languages").hide();

                    // Show
                    $("#sciences").show();
                  }}
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-red-700 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none mr-2"
                >
                  Science and Tech
                </button>
                <button
                  onClick={() => {
                    $("#business").hide();
                    $("#sciences").hide();
                    $("#humanities").hide();

                    // Show
                    $("#languages").show();
                  }}
                  className="py-2 px-4 shadow-md no-underline rounded-full bg-orange-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
                >
                  Languages
                </button>
              </div>
            </MobileView>

            <br />
            <div>
              <div id="humanities">
                <CsecHumanities />
              </div>
              <div id="sciences">
                <CsecSciences />
              </div>
              <div id="languages">
                <CsecLanguages />
              </div>
              <div id="business">
                <CsecBusiness />
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
