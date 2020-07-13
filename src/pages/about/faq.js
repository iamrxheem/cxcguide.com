import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Collapsible from "react-collapsible";
import {Bounce, Fade, Zoom} from "react-reveal";
import {MobileView} from "react-device-detect";
import Breadcrumb from "../../common/breadcrumb";
import BreadcrumbItem from "../../common/breadcrumbItem";
import MobileMenu from "../../components/mobileMenu";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`faq`, `frequently aksed questions`, `cxc`, `csec`, `cape`]}
        title="Frequently Asked Questions"
        description="Have a question? You can find the answers to the most common questions we get asked by our students. If your question is not then let us know."
      />
      <MobileMenu />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="About" href="/about" notLast />
          <BreadcrumbItem title="FAQ" href="/about/faq" />
        </Breadcrumb>

        <MobileView>
          <Zoom>
            <img
              className="object-contain rounded sm:object-cover md:object-fill lg:object-none xl:object-scale-down"
              style={{width: "100%"}}
              src="data:image/png;base64,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"
              alt="frequently asked question image"
            />
          </Zoom>
        </MobileView>
        <br />
        <h5 className="chat-notification-title text-base">
          Frequently Asked Questions
        </h5>

        <br />
        <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
          Have a question? You can find the answers to the most common questions
          we get asked by our students. If your question is not then let us
          know.
        </p>

        <br />
        <br />
        <ul className="ul">
          {/* Question */}
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" className="text-blue-500">
                    What&#39;s this website about and when will it be ready?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                CXC Online Study Guide is an online hub for free study notes,
                MCQ quizes, exercises and online classes for all CSEC and CAPE
                subjects.
              </p>

              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                Our website is still in the development phase and will be
                launched in <b>September, 2020</b>. If you&#39;d like to receive
                updates in you email then join our{" "}
                <a href="" target="_blank">
                  mailing list
                </a>{" "}
                or <a href="mailto:contact@cxcguide.com">email us</a> your
                queries .
              </p>
            </Collapsible>
          </li>

          {/* Question */}
          <br />
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" className="text-blue-500">
                    Is this company affiliated with the Caribbean Examination
                    Council?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                No, we are not affiliated nor are we a representative of CXC. We
                are an independent group of teachers and students.
              </p>
            </Collapsible>
          </li>

          {/* Question */}
          <br />
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" className="text-blue-500">
                    I joined the mailing list but I&#39;m not receiving emails.
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                If you haven&#39;t been receiving emails from us then check your
                spam or junk mail. Be sure to add us add us to your{" "}
                <a
                  style={{color: "#3182CE"}}
                  rel="noreferrer"
                  target="_blank"
                  href="https://support.google.com/mail/thread/2928386?hl=en"
                >
                  safe senders list
                </a>
                .
              </p>
            </Collapsible>
          </li>

          {/* Question */}
          <br />
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" className="text-blue-500">
                    Whare are we based?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                We are a community of students and teachers from around the
                Caribbean. However, we mainly operate in Kingston, Jamaica.
              </p>

              <br />
              <Fade>
                <img
                  style={{width: "100%"}}
                  src="https://jajamaica.org/wp-content/uploads/2018/08/map-jamaica-counties.png"
                />
              </Fade>
            </Collapsible>
          </li>

          {/* Question */}
          <br />
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" className="text-blue-500">
                    Is the website free to use?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                Yes, the website is completely free to use!
              </p>
            </Collapsible>
          </li>

          {/* Question */}
          <br />
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" className="text-blue-500">
                    Am I required to sign up?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                No, registering on our website is completely optional. However,
                if you sign up you will be able to
              </p>
              <br />
              <ul style={{listStyleType: "disc"}}>
                <li
                  className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base"
                  style={{paddingBottom: "20px"}}
                >
                  Access to hundreds of quizzes and downloadable handouts
                </li>
                <li
                  className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base"
                  style={{paddingBottom: "20px"}}
                >
                  Get access to our online Discord server, Google Classroom and
                  Whatsapp study groups where you can get extra resources and
                  assitance with your SBA or IA.
                </li>
                <li
                  className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base"
                  style={{paddingBottom: "20px"}}
                >
                  Get virtual awards for milestones and accomplishments
                </li>
                <li
                  className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base"
                  style={{paddingBottom: "20px"}}
                >
                  Customize the website to show the subjects that you&#39;re
                  studying
                </li>
              </ul>

              <b>
                Note: Our website is still in the development phase so you will
                not be able to register at this time.
              </b>
            </Collapsible>
          </li>

          {/* Question */}
          <br />
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" className="text-blue-500">
                    How do I get access to the materials to download?
                  </a>
                </>
              }
            >
              <br />

              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                In order to download material you will be required to sign up on
                our website.
              </p>
            </Collapsible>
          </li>

          {/* Question*/}
          <br />
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" className="text-blue-500">
                    How do I join the online classes?
                  </a>
                </>
              }
            >
              <br />

              <MobileView>
                <Bounce>
                  <img
                    src="https://www.ecampusnews.com/files/2020/04/online-class-pandemic.jpg"
                    className="card-img"
                  />
                </Bounce>
                <br />
                <br />
              </MobileView>

              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                At this time our online classes are only available to users who
                register or follow us on social media. We do this to better
                protect our users as we monitor and vet who we allow in our
                groups.
              </p>
            </Collapsible>
          </li>

          {/* Question*/}
          <br />
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" className="text-blue-500">
                    How do I join the Whatsapp study groups?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                At this time the Whatsapp groups are only available to users who
                register or follow us on social media. We do this to better
                protect our users as we monitor and vet who we allow in our
                groups.
              </p>
            </Collapsible>
          </li>

          {/* Question*/}
          <br />
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" className="text-blue-500">
                    Is there a YouTube channel with the classes?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                You can subscribe to our Youtube channe{" "}
                <a
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UC0eO_ApReknTjj50B7_LQyw"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>
            </Collapsible>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default IndexPage;
