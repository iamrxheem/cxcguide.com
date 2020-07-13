import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Obfuscate from "react-obfuscate";
import {Zoom} from "react-reveal";
import {MobileView} from "react-device-detect";
import MobileMenu from "../components/mobileMenu";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";

class Page extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        {" "}
        <>
          <Layout>
            <SEO
              keywords={[
                `donate`,
                `fund`,
                `cxc`,
                `contribute`,
                `paypal`,
                `cc`,
                `credit card`,
                `csec`,
                `cape`,
                `exam`,
                `online learning`,
                `att`,
                `jamaica`,
                `covid`,
                `coronavirus`,
                `pandemic`,
                `covid-19`
              ]}
              title="Donate"
              description="Do you support our initiative? Then consider supporting our upcoming projects and initiatives."
            />

            <MobileMenu />

            <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
              <Breadcrumb>
                <BreadcrumbItem title="Donate" />
              </Breadcrumb>

              <MobileView>
                <Zoom>
                  <img
                    src="https://elzonteartsandlearning.org/wp-content/uploads/2019/01/donate.jpg"
                    style={{width: "100% "}}
                  />
                </Zoom>
              </MobileView>

              <h1 className="text-base text-xl text-blue-700">
                Make a donation
              </h1>

              <br />
              <p>
                We are a small team of teachers who have been providing
                essential materials for students who have been impacted by the
                pandemic in an effort to help them prepare for their exam.
                Materials include study notes, past paper answers, mock
                questions and answers along with regular online classes via Zoom
                for a wide variety of subjects.
              </p>

              <br />
              <p>
                If you have benefitted from our posts on Instagram plus the work
                that we do then please make a donation.
              </p>

              <br />
              <br />

              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
                id="donateform"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="6W3PZBTR4MYPJ"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_JM/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </section>
            <br />
            <br />
          </Layout>
        </>
      </>
    );
  }
}

export default Page;
