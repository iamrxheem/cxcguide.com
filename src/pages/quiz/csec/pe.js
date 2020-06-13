import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import MCQ from "../../../common/MCQ";
import MCQItem from "../../../common/MCQItem";

// Common
import Breadcrumb from "../../../common/breadcrumb";
import BreadcrumbItem from "../../../common/breadcrumbItem";

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
              `physical education`,
              `pe`,
              `sports`,
              `csec`,
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
            title="CSEC Physical Education Quiz"
            description="Our online Physical Education test quiz will assist you to improve your knowledge in a fun interactive way, and prepare you for your CXC exams."
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Quiz" href="/quiz" notLast />
              <BreadcrumbItem title="CSEC" href="/quiz/csec" notLast />
              <BreadcrumbItem title="Physical Education " />
            </Breadcrumb>
          </section>

          <section className="flex-1 full max-w-5xl sm:px-4 px-2 mx-auto">
            <MCQ>
              {/* Question */}
              <MCQItem
                hasText
                text=""
                question="Unconsciousness, disorientation and memory loss following a blow to the head are ALL symptoms of"
                optionOne="cramps"
                optionTwo="contusion"
                optionThree="concussion"
                optionFour="compound fracture"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                hasText
                text=""
                question="The Olympic games originated as a religious festival in"
                optionOne="Greece"
                optionTwo="Egypt"
                optionThree="Italy"
                optionFour="China"
                correctOption="a"
              />

              <MCQItem
                hasText
                text=""
                question="Which female Olympian from the English speaking Caribbean has won the HIGHEST number of medals in the Olympic Games?"
                optionOne="Cydonie Mothersill"
                optionTwo="Debbie Ferguson"
                optionThree="Veronica Campbell"
                optionFour="Merlene Ottey"
                correctOption="d"
              />

              <MCQItem
                hasText
                text=""
                question="Which Summer Olympics was affected by student riots?"
                optionOne="1948 – London"
                optionTwo="1964 – Tokyo"
                optionThree="1968 – Mexico City"
                optionFour="1992 – Barcelona"
                correctOption="c"
              />

              <MCQItem
                hasText
                text=""
                question="In which city was the Olympic stadium dubbed the ‘Bird’s Nest’?"
                optionOne="1996 – Atlanta"
                optionTwo="2000 – Sydney"
                optionThree="2004 – Athens"
                optionFour="2008 – Beijing"
                correctOption="d"
              />

              <MCQItem
                hasText
                text=""
                question="Which of the following events are held every two years?"
                optionOne="I and II only"
                optionTwo="I and III only"
                optionThree="II and III only"
                optionFour="III and IV only"
                correctOption="c"
                hasListOption
                listOptionOne="CARIFTA"
                listOptionTwo="CAC Championships"
                listOptionThree="World Athletic Championships"
                listOptionFour="Pan American Games"
              />

              <MCQItem
                hasText
                text=""
                question="The integumentary system consists of"
                optionOne="pancreas, hair and brain"
                optionTwo="hair, nails and skin"
                optionThree="nails, sweat and blood"
                optionFour="hair, blood and brain"
                correctOption="b"
              />

              <MCQItem
                hasText
                text=""
                question="When exposed to sunlight, our skin manufactures"
                optionOne="Vitamin A"
                optionTwo="Vitamin B"
                optionThree="Vitamin C"
                optionFour="Vitamin D"
                correctOption="d"
              />

              <MCQItem
                hasText
                text=""
                question="Which of the following nutrients helps to repair muscle damage?"
                optionOne="Fat"
                optionTwo="Protein"
                optionThree="Mineral"
                optionFour="Carbohydrate"
                correctOption="b"
              />

              <MCQItem
                hasText
                text=""
                question="Which of the following is the correct sequence for the process of digestion?"
                optionOne="Oesophagus, small intestines, stomach"
                optionTwo="Oesophagus, stomach, small intestines"
                optionThree="Oesophagus, anus, small intestines"
                optionFour="Stomach, oesophagus, anus"
                correctOption="b"
              />

              <MCQItem
                hasText
                text=""
                question="Which of the following structures prevents food from entering the lungs?"
                optionOne="Larynx"
                optionTwo="Stomach"
                optionThree="Epiglottis"
                optionFour="Oesophagus"
                correctOption="c"
              />

              <MCQItem
                hasText
                text=""
                question="Sugar is stored as glycogen in the"
                optionOne="gall bladder"
                optionTwo="pancreas"
                optionThree="stomach"
                optionFour="liver"
                correctOption="d"
              />

              <MCQItem
                hasText
                text=""
                question="Which of the following processes is NOT a function of the digestive system?"
                optionOne="Ingestion"
                optionTwo="Absorption"
                optionThree="Inspiration"
                optionFour="Mastication"
                correctOption="c"
              />

              <MCQItem
                hasText
                text=""
                question="When direct light shines into Peter’s eyes, his pupils dilate. This is called"
                optionOne="a reflex action"
                optionTwo="a normal action"
                optionThree="a chain reaction"
                optionFour="an automatic reaction"
                correctOption="a"
              />

              <MCQItem
                hasText
                text=""
                question="The parts of a neurone are"
                optionOne="nucleus, synapse, axon"
                optionTwo="nucleus, synapse, dendrite"
                optionThree="dendrite, axon, synapse"
                optionFour="dendrite, axon, nucleus"
                correctOption="d"
              />

              <MCQItem
                hasText
                text=""
                question="Which of the following is NOT associated with the excretory system?"
                optionOne="Kidney"
                optionTwo="Homeostatasis"
                optionThree="Tidal capacity"
                optionFour="Osmoregulation"
                correctOption="c"
              />

              <MCQItem
                hasText
                text=""
                question="Which of the following is NOT a feature of the spinal cord?"
                optionOne="Transmits messages to and from our brain"
                optionTwo="It is enclosed in vertebral column"
                optionThree="It is flexible"
                optionFour="It consists of bones"
                correctOption="d"
              />

              <MCQItem
                hasText
                text=""
                question="Which of the following identifies a chamber of the heart?"
                optionOne="Front atrium"
                optionTwo="Left ventricle"
                optionThree="Back atrium"
                optionFour="Front ventricle"
                correctOption="b"
              />

              <MCQItem
                hasText
                text=""
                question="In the RICE procedure, what does the letter ‘R’ stand for?"
                optionOne="Resuscitate"
                optionTwo="Remove"
                optionThree="Renew"
                optionFour="Rest"
                correctOption="d"
              />

              <MCQItem
                hasText
                text=""
                question="A sprain may be defined as"
                optionOne="a bone pulled from its normal position"
                optionTwo="ligament damage at a joint"
                optionThree="damage to the tendon"
                optionFour="bones rubbing at the joints"
                correctOption="b"
              />

              <MCQItem
                hasText
                text=""
                question="Strained muscles may be caused by"
                optionOne="over-stretching"
                optionTwo="wearing tight gear"
                optionThree="exercising too soon after eating"
                optionFour="drinking insufficient water during exercise"
                correctOption="a"
              />

              <MCQItem
                hasText
                text=""
                question="Specific fitness is the ability of the body to carry out set tasks effectively and efficiently. Which of the following is NOT an aspect of specific fitness?"
                optionOne="Agility"
                optionTwo="Flexibility"
                optionThree="Coordination"
                optionFour="Speed and reaction"
                correctOption="b"
              />

              <MCQItem
                hasText
                text=""
                question="Which of the following activities BEST displays the fitness component of power?"
                optionOne="Throwing the javelin"
                optionTwo="Tug of war"
                optionThree="Marathon"
                optionFour="Skipping"
                correctOption="a"
              />

              <MCQItem
                hasText
                question="People are usually at their fittest at about"
                optionOne="10 – 19 years"
                optionTwo="20 – 29 years"
                optionThree="30 – 39 years"
                optionFour="40 – 49 years"
                correctOption="b"
              />

              <MCQItem
                hasText
                text=""
                question="Which of the following are considered when assessing fitness?"
                optionOne="I and II only"
                optionTwo="I and III only"
                optionThree="II and III only"
                optionFour="I, II and III"
                correctOption="b"
                hasListOption
                listOptionOne="Age"
                listOptionTwo="Equipment"
                listOptionThree="Environment"
              />

              <MCQItem
                hasText
                text=""
                question="Which of the following procedures must be followed in conducting training sessions?"
                optionOne="Pre-competition, competition, recovery"
                optionTwo="Warm up, main activity, cool down"
                optionThree="Warm up, recovery, main activity"
                optionFour="Pre-competition, main activity, cool down"
                correctOption="b"
              />

              <MCQItem
                hasText
                text=""
                question="In humans, the purpose of cartilage is to"
                optionOne="keep bones cool"
                optionTwo="attach bones to muscles"
                optionThree="stop bones from growing long"
                optionFour="protect the ends of the bones where they meet"
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
