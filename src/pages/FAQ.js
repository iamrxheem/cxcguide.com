import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Collapsible from "react-collapsible";
import {Bounce, Fade, Zoom} from "react-reveal";
import {MobileView} from "react-device-detect";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[``, ``, ``, ``]}
        title="Frequently Asked Questions"
        description=""
      />

      <br />
      <section className="flex-1 full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        <Zoom>
          <img
            className="object-contain rounded sm:object-cover md:object-fill lg:object-none xl:object-scale-down"
            style={{width: "70%", height: "70%"}}
            src="https://nativemsg.com/wp-content/uploads/2018/07/nativeMsg-FAQ.jpg"
            alt="frequently asked question image"
          />
        </Zoom>

        <br />
        <h5 className="chat-notification-title  text-base">
          Frequently Asked Questions
        </h5>

        <br />
        <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
          Have a question? You can find the answers to the most common questions
          we get asked by our students. If your question is not then let us
          know.
        </p>

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
                  <a href="" style={{color: "#3182CE"}}>
                    What&#39;s this website about and when will it be ready?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
                CXC Online Study Guide is an online hub for free study notes,
                MCQ quizes, exercises and online classes for all CSEC and CAPE
                subjects.
              </p>

              <br />
              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
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
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" style={{color: "#3182CE"}}>
                    Is this company affiliated with the Caribbean Examination
                    Council?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
                No, we are not affiliated nor are we a representative of CXC. We
                are an independent group of teachers and students.
              </p>
            </Collapsible>
          </li>

          {/* Question */}
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" style={{color: "#3182CE"}}>
                    I joined the mailing list but I&#39;m not receiving emails.
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
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
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a style={{color: "#3182CE"}} href="">
                    Whare are we based?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
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
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" style={{color: "#3182CE"}}>
                    Is the website free to use?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
                Yes, the website is completely free to use!
              </p>
            </Collapsible>
          </li>

          {/* Question */}
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" style={{color: "#3182CE"}}>
                    Am I required to sign up?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
                No, registering on our website is completely optional. However,
                if you sign up you will be able to
              </p>
              <br />
              <ul style={{listStyleType: "disc"}}>
                <li
                  className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base"
                  style={{paddingBottom: "20px"}}
                >
                  Access to hundreds of quizzes and downloadable handouts
                </li>
                <li
                  className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base"
                  style={{paddingBottom: "20px"}}
                >
                  Get access to our online Discord server, Google Classroom and
                  Whatsapp study groups where you can get extra resources and
                  assitance with your SBA or IA.
                </li>
                <li
                  className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base"
                  style={{paddingBottom: "20px"}}
                >
                  Get virtual awards for milestones and accomplishments
                </li>
                <li
                  className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base"
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
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" style={{color: "#3182CE"}}>
                    How do I get access to the materials to download?
                  </a>
                </>
              }
            >
              <br />

              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
                In order to download material you will be required to sign up on
                our website.
              </p>
            </Collapsible>
          </li>

          {/* Question*/}
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" style={{color: "#3182CE"}}>
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

              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
                At this time our online classes are only available to users who
                register or follow us on social media. We do this to better
                protect our users as we monitor and vet who we allow in our
                groups.
              </p>
            </Collapsible>
          </li>

          {/* Question*/}
          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" style={{color: "#3182CE"}}>
                    How do I join the Whatsapp study groups?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
                At this time the Whatsapp groups are only available to users who
                register or follow us on social media. We do this to better
                protect our users as we monitor and vet who we allow in our
                groups.
              </p>
            </Collapsible>
          </li>

          {/* Question*/}

          <br />
          <li>
            <Collapsible
              trigger={
                <>
                  <i
                    style={{color: "#F07966"}}
                    className="fas fa-caret-right mr-3"
                  ></i>
                  <a href="" style={{color: "#3182CE"}}>
                    Is there a YouTube channel with the classes?
                  </a>
                </>
              }
            >
              <br />
              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-700 text-base">
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
