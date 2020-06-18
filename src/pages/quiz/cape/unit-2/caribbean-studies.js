import React from "react";

import Layout from "../../../../components/layout";
import SEO from "../../../../components/seo";
import MCQ from "../../../../common/MCQ";
import MCQItem from "../../../../common/MCQItem";

// Common
import Breadcrumb from "../../../../common/breadcrumb";
import BreadcrumbItem from "../../../../common/breadcrumbItem";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            keywords={[
              `cxc`,
              `caribbean studies`,
              `cape`,
              `quiz`,
              `online quiz`,
              `cxc past papers`,
              `cxc textbooks`,
              `csec textbooks`,
              `cxc study guide`,
              `csec practice quiz`,
              `cxc etest`,
              `csec etest`,
              `elearning`,
              `online learning`,
              `jamaica`,
              `Raheem McDonald`
            ]}
            title="CAPE Caribbean Studies MC Quiz"
            description="Our online Caribbean Studies test quiz will assist you to improve your knowledge in a fun interactive way, and prepare you for your CXC exams."
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Quiz" href="/quiz" notLast />
              <BreadcrumbItem title="CAPE" href="/quiz/cape" notLast />
              <BreadcrumbItem title="Caribbean Studies " />
            </Breadcrumb>
          </section>

          <section className="flex-1 full max-w-5xl sm:px-4 px-2 mx-auto">
            <MCQ>
              {/* Question */}
              <MCQItem
                question="A society may be BEST describes as"
                optionOne="set of customs traditions"
                optionTwo="palce set aside to practise norms and values"
                optionThree="group of peopl efrom the same race living in a country"
                optionFour="people with shared traditions living in the same geographical area"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                question="Which of the following countries is located outside the Caribbean sea?"
                optionOne="Jamaica"
                optionTwo="Grenada"
                optionThree="Barbados"
                optionFour="St Vincent and the Grenadines"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                question="Which of the following cutural methods, used a resistance to slavery, had the greatest effect?"
                optionOne="Songs"
                optionTwo="Poetry"
                optionThree="Synccretic religion"
                optionFour="African healing traditions"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                question="Which of the following terms BEST describes a historical feature of the Caribbean?"
                optionOne="Archipelago"
                optionTwo="Enslavement"
                optionThree="Commonwealth"
                optionFour="Caribbean Basin"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                question="Soil deterioration in the Caribbean can be caused by"
                optionOne="terracimg"
                optionTwo="reforestation"
                optionThree="monocropping"
                optionFour="planting cover crops"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                question="Garveyism which occurred in the twentieth century is an example of cultural"
                optionOne="erasure"
                optionTwo="renewal"
                optionThree="norming"
                optionFour="diversity"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                question="Which of the following was the MOST important determining factor of one's position in colonial plantation society?"
                optionOne="Race"
                optionTwo="Class"
                optionThree="Wealth"
                optionFour="Place of birth"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                question="Which of the following aspects of Caribbean culture is LEAST threatened by cultural erasure?"
                optionOne="Way of dress"
                optionTwo="Driving habit"
                optionThree="Oral traditions"
                optionFour="Food preparation"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                question="Which of the ofllowin syncretic religions had its early beginning in Jamaica?"
                optionOne="Shango"
                optionTwo="Voodoo"
                optionThree="Revivalism"
                optionFour="Rastafarianism"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                question="Which of the following family types was introduced in the Caribbean by the East Indians?"
                optionOne="Nuclear"
                optionTwo="Neolocal"
                optionThree="Extended"
                optionFour="Matrifocal"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                question="'ICT' is a diriving force behind changes in industry. Whatt does ICT mean in this statement?"
                optionOne="Internet Computer Transaction"
                optionTwo="Internet Communication Transaction"
                optionThree="Information and Computer Technology"
                optionFour="Information and Communications Technologies"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                question="Which of the following types of development seeks to protect future generations?"
                optionOne="Global"
                optionTwo="Humane"
                optionThree="Economic"
                optionFour="Sustainable"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                question="Which of the following is considered an element of good governance?"
                optionOne="Cronyism"
                optionTwo="Popularity"
                optionThree="Rule of law"
                optionFour="Exclusiveness"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                question="The Rastafarian movement gained worldwide recognitioon MAINLY through"
                optionOne="tourism"
                optionTwo="reggae music"
                optionThree="the use of marijuana"
                optionFour="the Nyabinghi movement"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                question="In which of the following years was the World Trade Organization formed?"
                optionOne="1795"
                optionTwo="1885"
                optionThree="1945"
                optionFour="1995"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                question="One challenge faced by Caribbean countries in achievng integration is"
                optionOne="insularity"
                optionTwo="high levels of illiteracy"
                optionThree="the impace of natural disasters"
                optionFour="large number of indigenous peoples"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                question="Which of the following indicators of development is generated from information that is derived from an inequality survey?"
                optionOne="The Gini Index"
                optionTwo="The Age Dependancy Ratio"
                optionThree="The International Credit Rating"
                optionFour="The Human Development Index"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                question="Which of the following is a function of the mass media?"
                optionOne="Promoting private sector interest"
                optionTwo="Acting as an agent of the local government"
                optionThree="Informing citizens of local and international affairs"
                optionFour="Acting as a propaganda tool for local and foreign governments"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                question="Which institution, in the integration movement, preceded the Caribbean Community and Common Market?"
                optionOne="Association of Caribbean States"
                optionTwo="Caribbean Free Trade Association"
                optionThree="CARICOM Single Market and Economy"
                optionFour="Organisation of Eastern Caribbean States"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                question="In research, the process of identifying a problem to be investigated involves"
                optionOne="interpreting data"
                optionTwo="formulating a feasible topic"
                optionThree="conducting an archival search"
                optionFour="making inferences from statistical data"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                question="In which of the following groups of sampling does purpositive sampling fail?"
                optionOne="Random"
                optionTwo="Probability"
                optionThree="Convenient"
                optionFour="Non-probability"
                correctOption="d"
              />
            </MCQ>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
