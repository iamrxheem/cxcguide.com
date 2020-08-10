import React from "react";
import StoreLayout from "../../../layouts/storeLayout";
import SEO from "../../../components/seo";
import Breadcrumb from "../../../common/breadcrumb";
import BreadcrumbItem from "../../../common/breadcrumbItem";
import MobileMenu from "../../../components/mobileMenu";
import {MobileView} from "react-device-detect";

function Page() {
  return (
    <StoreLayout>
      <SEO
        keywords={[
          `2020`,
          `back to school`,
          `amazon`,
          `school`,
          `sale`,
          `Raheem McDonald`,
          `paperbin`,
          `past paperbin`,
          `pastpaperbin.com`,
          `paperbin.xyz`
        ]}
        title="2020 Back to School Picks"
        description="These our top picks for materials and books for back to school, 2020."
      />
      <MobileMenu />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Store" href="/store" notLast />
          <BreadcrumbItem title="Back to School Picks" />
        </Breadcrumb>

        <MobileView>
          <img
            src="https://www.caribbeannationalweekly.com/wp-content/uploads/2019/07/back-to-school.jpg"
            alt="alt"
            style={{width: "100%"}}
          />

          <br />
        </MobileView>

        <h1 className="text-xl text-blue-700 font-bold">
          Back to School Picks
        </h1>

        <br />
        <p>These are our top picks for the upcoming school year.</p>
        <br />
        <div
          className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm">
                We use affiliate links. Read our{" "}
                <a
                  target="_blank"
                  href="/affiliate-disclosure"
                  className="underline"
                >
                  affiliate disclosure
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </StoreLayout>
  );
}

export default Page;
