import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import CsecStudyCarousel from "../../components/csecStudyCarousel";
import CSECStudyNavigation from "../../components/csecStudyNavigation";

// Common
import Breadcrumb from "../../common/breadcrumb";
import BreadcrumbItem from "../../common/breadcrumbItem";
// import {MobileView} from "react-device-detect";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import SubjectCard from "../../common/subjectCard";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Responsive
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 2
      },
      desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 2
      },
      tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
      },
      mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
      }
    };

    return (
      <>
        <Layout>
          <SEO
            keywords={[``, ``, ``, ``]}
            title="CSEC Study Guides and Notes"
            description=""
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

            <>
              <Carousel
                ssr={true}
                responsive={responsive}
                infinite
                arrows={true}
                partialVisible={true}
                swipeable={true}
                dots={true}
                showDots={true}
                keyBoardControl={true}
              >
                <SubjectCard
                  imgSrc="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                  title="Mathematics"
                  description=""
                  href="/study/csec"
                />
                <SubjectCard
                  imgSrc="https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/"
                  title="Chemistry"
                  description=""
                  href="/study/csec"
                />
                <SubjectCard
                  imgSrc="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/140646992/original/63c17e2b2264b2f0cc3e4cd1a1a0f4376448a34f/do-advanced-maths-algebra-calculus.jpg"
                  title="Additional Mathematics"
                  description=""
                  href="/study/csec"
                />

                <SubjectCard
                  imgSrc=""
                  title="Agricultural Science"
                  description=""
                  href="/study/csec"
                />
                <SubjectCard
                  imgSrc="https://leverageedu.com/blog/wp-content/uploads/2019/09/Biology.png"
                  title="Biology"
                  description=""
                  href="/study/csec"
                />
                <SubjectCard
                  imgSrc="https://www.cbronline.com/wp-content/uploads/2017/01/code-770x513.jpg"
                  title="Information Technology"
                  description=""
                  href="/study/csec"
                />
                <SubjectCard
                  imgSrc="https://www.larberthigh.com/_images/17239_s.jpg"
                  title="Human & Social Biology"
                  description=""
                  href="/study/csec"
                />
                <SubjectCard
                  imgSrc="https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/17947/cover-VideoGamePhysics-Luke_Newsletter-d65c81ebd91933ccb650011f88f9ee74.png"
                  title="Physics"
                  description=""
                  href="/study/csec"
                />
                <SubjectCard
                  imgSrc="https://i.pinimg.com/originals/7a/0b/b4/7a0bb454761e4efcff3c0f3b07913349.jpg"
                  title="Technical Drawing"
                  description=""
                  href="/study/csec"
                />
                <SubjectCard
                  imgSrc="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/WL_HoursH.jpg?itok=6G_HN_Td&c=d5c762b61c41d41483f1c3d7e4a23004"
                  title="Integrated Science"
                  description=""
                  href="/study/csec"
                />
                <SubjectCard
                  imgSrc="https://markparkinson.files.wordpress.com/2019/11/physical-education.jpg?w=584"
                  title="Physical Education and Sports"
                  description=""
                  href="/study/csec"
                />
                <SubjectCard
                  title="Industrial Technology"
                  description=""
                  href="/study/csec"
                />
              </Carousel>
            </>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
