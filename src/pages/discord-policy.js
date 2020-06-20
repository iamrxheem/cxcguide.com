import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// React device detect

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";

function Page() {
  return (
    <Layout>
      <SEO
        keywords={[`cxc`, `discord`, `cxc`, `the csg team`]}
        title="Discord Policy"
        description="This notes describes our policy and guidelines for joining our Discord server."
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
        <Breadcrumb>
          <BreadcrumbItem title="Discord Policy" />
        </Breadcrumb>

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

        <h5 className="text-2xl text-blue-700">Discord Policy</h5>
        <br />

        <p>
          <a href="https://discord.com/" target="_blank" rel="noreferrer">
            Discord
          </a>{" "}
          is the easiest way to communicate with a large numnber of people and
          is used to join people of different communities, organizations and
          backgrounds. We use Discord to bring together students to study,
          students with the same interest, to share useful resources and
          infomrmation.
        </p>

        <br />
        <p>
          To foster a a safe environment for students and teachers on our
          Discord servers we encourage everyone to read our guidelines to know
          what is acceptable and what is not. Before you read our guidelines,
          please read{" "}
          <a href="https://discord.com/terms" target="_blank" rel="noreferrer">
            Discord&apos;s Terms of Use
          </a>
          .
        </p>

        <br />
        <br />
        <h6 className="text-xl text-blue-700">
          DO <span className="font-bold">NOT</span> share or link to
          copyrighted/ protected content
        </h6>

        <br />
        <p>
          Sharing copyrighted or protected content will result in deletion and a
          permanent ban from our Discord servers. Sharing copyrighted content is
          infringing on a copyright holder’s rights thereby making it illegal
          and can result in being banned from the Discord platform and incur
          legal penalties such as fines or imprisonment.{" "}
        </p>

        <br />
        <p>Copyrighted content include</p>

        <br />
        <ul style={{listStyleType: "disc", marginLeft: "30px"}}>
          <li style={{paddingBottom: "20px"}}>Textbooks</li>
          <li style={{paddingBottom: "20px"}}>Past papers</li>
          <li style={{paddingBottom: "20px"}}>Original videos</li>
        </ul>

        <br />
        <p>
          You may post links to a legitimate website where one can purchase the
          material. Links to YouTube videos are allowed.
        </p>

        <br />
        <br />
        <h6 className="text-xl text-blue-700">
          DO NOT share your personal information{" "}
        </h6>

        <br />
        <p>
          We strictly prohibit sharing your personal and personally identifiable
          information on our Discord .
        </p>

        <br />
        <ul style={{listStyleType: "disc", marginLeft: "30px"}}>
          <li style={{paddingBottom: "20px"}}>
            Do not share your personally identifiable infomation including your
            name, phone number, date of birth, address, high school etc
          </li>
          <li style={{paddingBottom: "20px"}}>
            Do not attempt to start a personal or ramantic relationship with
            anyone
          </li>
        </ul>

        <br />
        <p>
          If someone approaches you, let us know and then{" "}
          <a
            className="text-blue-600 underline"
            target="_blank"
            rel="noreferrer"
            href="https://support.discord.com/hc/en-us/articles/217916488-Blocking-Privacy-Settings-"
          >
            block them
          </a>
          .
        </p>

        <br />
        <br />
        <h6 className="text-xl text-blue-700">Do NOT harass or bully anyone</h6>

        <br />
        <p>
          Targeting, harassing or bulling on our Discord servers is STRICTLY
          prohibited and result in an instant ban from our severs. This may also
          lead to a ban on using the Discord platform. We promote a safe, fun
          and productive learning environment for our students and teachers and
          will remove anyone violating this rule immediately.
        </p>

        <br />
        <br />
        <h6 className="text-xl text-blue-700">
          Do NOT post or share links to pornographic content
        </h6>

        <br />
        <p>
          Posting pornographic content or linking to pornographic material will
          result in a permanent ban from our Discord servers. Do not post or
          share links to pornographic content.{" "}
        </p>
      </section>
    </Layout>
  );
}

export default Page;
