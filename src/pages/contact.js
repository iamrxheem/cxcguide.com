import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Obfuscate from "react-obfuscate";
import {Zoom} from "react-reveal";
import {BrowserView} from "react-device-detect";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";

function ContactPage() {
  return (
    <Layout>
      <SEO keywords={[``, ``, ``, ``]} title="Contact Us" />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Contact" />
        </Breadcrumb>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div>
            <Zoom>
              <figure>
                <img
                  style={{width: "auto"}}
                  className=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGE_8uwjJ43p1vHlwEhlvg0l2ZwcfigCZJx1xlvit__FlvfXC9&usqp=CAU"
                />
              </figure>
            </Zoom>
            <br />
          </div>
          <div>
            <BrowserView>
              <h1 className="chat-notification-title">Contact Us</h1>
              <br />
            </BrowserView>
            <p>
              We&rsquo;re happy you&rsquo;d like to react out to us. The mose
              effecive way to reach out to us is to send us an email. Our email
              address is:
            </p>
            <br />
            <Obfuscate
              className="text-blue-500"
              email="contact@cxcguide.com"
              headers={{
                cc: "",
                bcc: "",
                subject: "Inquiry",
                body: ""
              }}
            />
            <br />
            <br />

            <p>
              You can also use the mail option by clicking the mail button
              located at the lower right corner of the screen. Alternatively,
              you can reach out to us on any one of our social media platforms.
            </p>

            <br />
            <ul className="ul">
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/cxcstudyguide/"
                >
                  <i
                    style={{color: "#8a3ab9"}}
                    className="fab fa-instagram fa-lg mr-3"
                  ></i>
                  <span className="text-blue-500">Instagram</span>
                </a>
              </li>

              <br />
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.youtube.com/channel/UC0eO_ApReknTjj50B7_LQyw"
                >
                  <i
                    style={{color: "red"}}
                    className="fab fa-youtube fa-lg mr-2"
                  ></i>

                  <span className="text-blue-500">Youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
    </Layout>
  );
}

export default ContactPage;
