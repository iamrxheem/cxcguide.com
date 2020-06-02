import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import Obfuscate from "react-obfuscate";
// import {Zoom} from "react-reveal";
// import {BrowserView} from "react-device-detect";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";

function Page() {
  return (
    <Layout>
      <SEO keywords={[``, ``, ``, ``]} title="Policies" description="" />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Policies" />
        </Breadcrumb>

        <h1 className="text-base text-xl">Our policies</h1>

        <br />
        <p>
          Our policies are designed to ensure that we provide a safe learning
          environment for students and teachers, and to ensure to we comply with
          laws governing the Caribbean territories.
        </p>

        <br />
        <p>
          Play your part and educate yourself on how we expect you to behave on
          our site and platforms, the laws governing the contents of our website
          and other useful information.
        </p>

        <br />
        <br />
        <ul className="list-disc ml-6">
          <li className="pb-5">
            <Link className="text-blue-400" to="/privacyy">
              Privacy Policy
            </Link>
          </li>
          <li className="pb-5">
            <Link className="text-blue-400" to="/terms">
              Terms of Use
            </Link>
          </li>
          <li className="pb-5">
            <Link className="text-blue-400" to="/tutor-policy">
              Tutor Policy
            </Link>
          </li>
          <li className="pb-5">
            <Link className="text-blue-400" to="/sharing-policy">
              Content Sharing Policy
            </Link>
          </li>
          <li className="pb-5">
            <Link className="text-blue-400" to="/discord-policy">
              Discord Guidelines
            </Link>
          </li>
          <li>
            <Link className="text-blue-400" to="/cookies">
              Cookies
            </Link>
          </li>
        </ul>
      </section>
      <br />
      <br />
    </Layout>
  );
}

export default Page;
