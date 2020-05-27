import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />

      <section className="flex-1 full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        <p>Yes</p>

        <br />
        <br />
      </section>
    </Layout>
  );
}

export default ContactPage;
