import React from "react";
import CSECStudyLayout from "../../../layouts/csecStudyLayout";
import SEO from "../../../components/seo";
import CsecStudyCarousel from "../../../components/csecStudyCarousel";
// import {Link} from "gatsby";

// Common
import Breadcrumb from "../../../common/breadcrumb";
import BreadcrumbItem from "../../../common/breadcrumbItem";
import CSECStudyNavigation from "../../../components/csecStudyNavigation";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <CSECStudyLayout>
          <SEO
            keywords={[
              `humanities`,
              `study`,
              `csec`,
              `csec`,
              `Raheem McDonald`,
              `csg team`,
              `exams`
            ]}
            title="CSEC Humanities Study Guides"
            description="Start studying for your CSEC Humanities exmas and prepare for your CSEC exams with our online notes and quizzes made by teachers from around the Caribbean"
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Study" href="/study" notLast />
              <BreadcrumbItem title="CSEC" href="/study/csec" />
            </Breadcrumb>
          </section>
          <CsecStudyCarousel />

          <br />
          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <CSECStudyNavigation />

            <br />
            <div>
              <>
                <></>
              </>
            </div>
          </section>
        </CSECStudyLayout>
      </>
    );
  }
}

export default Page;
