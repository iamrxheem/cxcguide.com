import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// React device detect
import {MobileView} from "react-device-detect";
import MobileMenu from "../components/mobileMenu";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";

function Page() {
  return (
    <Layout>
      <SEO
        keywords={[
          `cxc`,
          `discord`,
          `join`,
          `cxc`,
          `paperbin`,
          `paperbin past papers`,
          `the csg team`
        ]}
        title="CXC Study Discord Server"
        description="Join our Discord server and connect Caribbean students and teachers, and get the latest exam updates userful resources."
      />
      <MobileMenu />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Join Our Discord Server" />
        </Breadcrumb>

        <MobileView>
          <img
            style={{width: "100%", height: "100%"}}
            className="card-img"
            src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/05/Discord-Featured-796x417.jpg"
          />

          <small className="text-right ">
            Credit:{" "}
            <a href="https://discord.com/" rel="noreferrer" target="_blank">
              Discord
            </a>
            ,{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://thenextweb.com/basics/2020/03/19/keep-in-touch-how-to-set-up-discord-server-for-friends-family/"
            >
              TNW
            </a>
          </small>
          <br />
          <br />
        </MobileView>

        <h5 className="text-2xl text-blue-700">Join our Discord Server</h5>
        <br />

        <p className="text-gray-700 sm:text-gray-700 lg:text-gray-700 text-base">
          We made our Discord server to bring students and teachers together,
          and a place where they can get valuable resources and the latest
          updates on exams.
        </p>

        <br />
        <a
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          href="https://discord.gg/59y3MDg"
        >
          Join now
        </a>

        <br />
        <br />
        <br />
        <div
          className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-blue-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Read our Discord Policy</p>
              <p className="text-sm">
                Make sure you know{" "}
                <a className="underline text-blue-700" href="/discord-policy">
                  our rules
                </a>{" "}
                before joining.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Page;
