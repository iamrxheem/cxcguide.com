import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import MCQ from "../../../common/MCQ";
import MCQItem from "../../../common/MCQItem";
import {v4 as uuidv4} from "uuid";

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
              `english a`,
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
              `jamaica`
            ]}
            title="CSEC English A Quiz"
            description="Our online English A test quiz will assist you to improve your knowledge in a fun interactive way, and prepare you for your CXC exams."
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Quiz" href="/quiz" notLast />
              <BreadcrumbItem title="CSEC" href="/quiz/csec" notLast />
              <BreadcrumbItem title="English A" />
            </Breadcrumb>
          </section>

          <section className="flex-1 full max-w-5xl sm:px-4 px-2 mx-auto">
            <MCQ>
              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is the meaning of DISCOMBOBULATED?"
                optionOne="shy"
                optionTwo="weird out"
                optionThree="confused and disconcerted."
                optionFour="enlighten"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The opposite meaning of the word meticulous"
                optionOne="Scant"
                optionTwo="Careful"
                optionThree="Detailed"
                optionFour="Cautious"
                correctOption="a"
                note="Hint: can't explains"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The opposite meaning of the word meticulous "
                optionOne="Scant"
                optionTwo="Careful"
                optionThree="Detailed"
                optionFour="Cautious"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Select the correctly spelt word: The concellor gave me ............."
                optionOne="Advse"
                optionTwo="Advice"
                optionThree="Advise"
                optionFour="Advese"
                correctOption="b"
                note="B is spelt correctly"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In which one of the sentences below is the question sign use properly"
                optionOne="I love you?"
                optionTwo="Talk to me?"
                optionThree="Do you love me?"
                optionFour="I hate you?"
                correctOption="c"
                note="'C' is the correct answer because it's asking a question"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Please select the correct punctuation"
                optionOne="A text book can be a 'wall' between teacher and class"
                optionTwo="A text book can be a wall 'between' teacher and class"
                optionThree="A text book can be a wall between teacher and 'class'"
                optionFour="between 'book/ can be a wall between teacher and class"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <br />
                    <p>
                      We found it hard to put up with his{" "}
                      <span style={{textDecoration: "underline"}}>
                        belligerent
                      </span>{" "}
                      attitude.
                    </p>
                  </>
                }
                optionOne="prying"
                optionTwo="destructive"
                optionThree="uncharitable"
                optionFour="quarrelsome"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <br />
                    <p>
                      Mr. Brown did everything to{" "}
                      <span style={{textDecoration: "underline"}}>thwart</span>{" "}
                      the efforts of the relatives.
                    </p>
                  </>
                }
                optionOne="abuse"
                optionTwo="obstruct"
                optionThree="change"
                optionFour="threaten"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <br />
                    <p>
                      The children were scared by the{" "}
                      <span style={{textDecoration: "underline"}}>
                        grotesque
                      </span>{" "}
                      designs on the costumes.
                    </p>
                  </>
                }
                optionOne="hideous"
                optionTwo="elaborate"
                optionThree="elaborate"
                optionFour="intricate"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <br />
                    <p>
                      During the rainstorm yesterday,{" "}
                      <span style={{textDecoration: "underline"}}>
                        incessantly
                      </span>{" "}
                      across the island.
                    </p>
                  </>
                }
                optionOne="noisily"
                optionTwo="furiously"
                optionThree="constantly"
                optionFour="occasionally"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <br />
                    <p>
                      During the final stages of the trial, a new witness was
                      called to{" "}
                      <span style={{textDecoration: "underline"}}>
                        corroborate
                      </span>{" "}
                      the testimony of the accused.
                    </p>
                  </>
                }
                optionOne="clarify"
                optionTwo="confirm"
                optionThree="conclude"
                optionFour="d"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <br />
                    <p>
                      In some advertisements for jobs, relevant experience is
                      asked for.{" "}
                      <span style={{textDecoration: "underline"}}></span>{" "}
                    </p>
                  </>
                }
                optionOne="suitable"
                optionTwo="lengthy"
                optionThree="technical"
                optionFour="satisfactory"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      After we failed to win, we left with our opponents’{" "}
                      <span style={{textDecoration: "underline"}}>
                        taunting
                      </span>{" "}
                      voice following us to school.
                    </p>
                  </>
                }
                optionOne="annoying"
                optionTwo="screaming"
                optionThree="laughing"
                optionFour="mocking"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      In his speech, the psychologist gave{" "}
                      <span style={{textDecoration: "underline"}}>tacit</span>{" "}
                      approval to corporal punishment.
                    </p>
                  </>
                }
                optionOne="direct"
                optionTwo="cautious"
                optionThree="clear"
                optionFour="unspoken"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      In times of{" "}
                      <span style={{textDecoration: "underline"}}>
                        calamity
                      </span>{" "}
                      one must strive to remain calm and rational.
                    </p>
                  </>
                }
                optionOne="fortune"
                optionTwo="disaster"
                optionThree="conflict"
                optionFour="attack"
                correctOption="b"
              />
            </MCQ>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
