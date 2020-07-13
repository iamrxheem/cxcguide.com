import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Collapsible from "react-collapsible";
import MobileMenu from "../../components/mobileMenu";

import {MobileView} from "react-device-detect";
import Breadcrumb from "../../common/breadcrumb";
import BreadcrumbItem from "../../common/breadcrumbItem";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `faq`,
          `frequently aksed questions`,
          `instagram`,
          `cxc`,
          `csec`,
          `cape`
        ]}
        title="FAQ - Instagram"
        description="These are the most common questions asked by students on Instagram."
      />
      <MobileMenu />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="About" href="/about" notLast />
          <BreadcrumbItem title="Instagram FAQ" href="/about/faq" />
        </Breadcrumb>
      </section>
      <MobileView>
        <img
          className="object-contain rounded sm:object-cover md:object-fill lg:object-none xl:object-scale-down"
          style={{width: "100%"}}
          src="https://themetrust.com/wp-content/uploads/2016/08/instagram-1024x636.jpg"
          alt="frequently asked question image"
        />
        <br />
      </MobileView>

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <h5 className="chat-notification-title text-base">Instagram FAQ</h5>

        <br />
        <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
          The are some of the questions frequently asked by students on teachers
          on Instagram.
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
                    Where can I get access to more study notes and other
                    resources?
                  </a>
                </>
              }
            >
              <br />
              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                Join our{" "}
                <a
                  href="/mailin-list"
                  className="text-baese underline text-blue-700"
                >
                  mailing list
                </a>{" "}
                to get weekly study notes and resources. We&lsquo;ll also be
                creating our Discord server soon. Until then, students can get
                access to study materials by joining{" "}
                <a
                  rel="noreferrer"
                  href="https://discord.com/invite/YbUxbBb"
                  target="_blank"
                  className="text-baese underline text-blue-700"
                >
                  the Student Hub
                </a>
                .
              </p>
            </Collapsible>
          </li>

          <br />
          <br />
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
                    Why are only the answers posted and not the actual past
                    papers?
                  </a>
                </>
              }
            >
              <br />

              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                We cannot post the past papers as they are protected under
                copyright law. Doing so will open us up to legal risks including
                huge fines and even imprisonment.
              </p>

              <br />
              <p>
                We have, however, petitioned to CXC to allow us to share past
                papers to students to help them prepare for their exam. You can
                sign the petition{" "}
                <a
                  rel="noreferrer"
                  href="http://chng.it/fxrX49TD"
                  target="_blank"
                  className="text-baese underline text-blue-700"
                >
                  here
                </a>
                .
              </p>
            </Collapsible>
          </li>

          <br />
          <br />
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
                    Do you send or email past papers?
                  </a>
                </>
              }
            >
              <br />

              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                No, we do not send or issue past papers.
              </p>

              <br />
              <p>
                We have, however, petitioned to CXC to allow us to share past
                papers to students. You can sign the petition{" "}
                <a
                  rel="noreferrer"
                  href="http://chng.it/fxrX49TD"
                  target="_blank"
                  className="text-baese underline text-blue-700"
                >
                  here
                </a>
                .
              </p>
            </Collapsible>
          </li>

          <br />
          <br />
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
                    I haven&lsquo;t seen the answers for a particular subject.
                    When will it be posted?
                  </a>
                </>
              }
            >
              <br />

              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                We try our best to post answers, so if you don&lsquo;t see your
                subject then we probably don&lsquo;t have the answers yet or
                they&lsquo;re currently being verified. But once we do then
                it&lsquo;ll be posted.
              </p>
            </Collapsible>
          </li>

          <br />
          <br />
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
                    I fear some that answers may not be correct. What should I
                    do?
                  </a>
                </>
              }
            >
              <br />

              <br />
              <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
                We never post answers without them being verified by teachers.
                However, some errors do slip through. Whenever errors are
                detected we always note the corrections in the comments. If you
                believe that they may be discrepancies, please{" "}
                <a
                  className="text-base underline text-blue-700"
                  href="mailto:contact@cxcguide.com"
                >
                  let us know
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
