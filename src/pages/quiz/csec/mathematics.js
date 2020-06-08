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
              `maths`,
              `mathematics`,
              `csec`,
              `csec mathematics`,
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
            title="CSEC Mathematics Quiz"
            description="Our online Mathematics test quiz will assist you to improve your knowledge in a fun interactive way, and prepare you for your CXC exams."
          />

          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Quiz" href="/quiz" notLast />
              <BreadcrumbItem title="CSEC" href="/quiz/csec" notLast />
              <BreadcrumbItem title="Mathematics" />
            </Breadcrumb>
          </section>

          <section className="flex-1 full max-w-5xl sm:px-4 px-2 mx-auto">
            <MCQ>
              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is the sum of 1³ + 3²?"
                optionOne="8"
                optionTwo="10"
                optionThree="11"
                optionFour="16"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Tom bought a pen for $60. He sold it to gain 20% profit on his cost. How much money did he gain?"
                optionOne="$12"
                optionTwo="$40"
                optionThree="$72"
                optionFour="$80"
                correctOption="a"
                hasImg={false}
                hasAudio={false}
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Tom bought a pen for $60. He sold it to gain 20% profit on his cost. How much money did he gain?"
                optionOne="$12"
                optionTwo="$40"
                optionThree="$72"
                optionFour="$80"
                correctOption="a"
                hasImg={false}
                hasAudio={false}
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Tom bought a pen for $60. He sold it to gain 20% profit on his cost. How much money did he gain?"
                optionOne="$12"
                optionTwo="$40"
                optionThree="$72"
                optionFour="$80"
                correctOption="a"
                hasImg={false}
                hasAudio={false}
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Tom bought a pen for $60. He sold it to gain 20% profit on his cost. How much money did he gain?"
                optionOne="$12"
                optionTwo="$40"
                optionThree="$72"
                optionFour="$80"
                correctOption="a"
                hasImg={false}
                hasAudio={false}
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="If x + 2 * 7 = 18, the value of x is"
                optionOne="4"
                optionTwo="9"
                optionThree="13"
                optionFour="32"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="USD$1.00 = $JMD$90.00. What is the value of USD$5.00 in Jamaican dollars?"
                optionOne="$18.00"
                optionTwo="$85.00"
                optionThree="$95.00"
                optionFour="$450.00"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="5% of $40"
                optionOne="$2.00"
                optionTwo="$8.00"
                optionThree="$20.00"
                optionFour="$35.00"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="You are reading a book and are at page number IX. What is the number of the page six pages after?"
                optionOne="V"
                optionTwo="XIV"
                optionThree="XV"
                optionFour="XVI"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="49 * 51 has the same value as"
                optionOne="(49 * 50) + 1"
                optionTwo="(49 * 50) - (49 * 1)"
                optionThree="(49 * 50) + (49 * 1)"
                optionFour="(49 * 50)(49 * 1)"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="If 5n is an even number, which of the following is an odd number?"
                optionOne="5n + 2"
                optionTwo="5n - 2"
                optionThree="5(n +1)"
                optionFour="5(n + n)"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What percentage of 40 is 12?"
                optionOne="5"
                optionTwo="20"
                optionThree="30"
                optionFour="300"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is the largest amount?"
                optionOne="5% of 500"
                optionTwo="10% of 200"
                optionThree="15% of 150"
                optionFour="20% of 50"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A sum of money is shared between between Ken and Rose in the the ratio 2:3. If Rose receives $90.00, find the sum of money that was shared."
                optionOne="$54.00"
                optionTwo="$60.00"
                optionThree="$135.00"
                optionFour="$150.00"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="When expressed to the nearest hundred becomes 458 becomes *"
                optionOne="400"
                optionTwo="450"
                optionThree="460"
                optionFour="500"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is the missing number in the sequence 2, 5, 8, __, 14"
                optionOne="10"
                optionTwo="11"
                optionThree="12"
                optionFour="13"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="If x is an odd number, which of the following is also odd?"
                optionOne="x + 1"
                optionTwo="x + 2"
                optionThree="2x"
                optionFour="x / 2"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="How much time will it take for an amount of 450 to yield 81 as interest at 4.5% per annum of simple interest?"
                optionOne="3.5 years"
                optionTwo="4 years"
                optionThree="5 years"
                optionFour="4.5 years"
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A sum of money at simple interest amounts to 815 in 3 years and to 854 in 4 years. The sum is:"
                optionOne="650"
                optionTwo="690"
                optionThree="698"
                optionFour="700"
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="(-3)2 + (-2)2 is equal to"
                optionOne="-13"
                optionTwo="-10"
                optionThree="13"
                optionFour="25"
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A Ross University employee received a monthly salary and spends the following: 1/12 on entertainment; 1/6 on food; 5/8 on rent. The employee is left with $350 after these expenses. What is the employee salary?"
                optionOne="$650"
                optionTwo="$2700"
                optionThree="$2800"
                optionFour="$700"
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="5 1/2 + 3 2/3 + 1 4/5"
                optionOne="11 4/30"
                optionTwo="10 19/30"
                optionThree="32/45"
                optionFour="10 48/50"
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="If a piece of wood is 5 meters long, then how long will be 20 percent of this wood in cm."
                optionOne="10"
                optionTwo="100"
                optionThree="1"
                optionFour="1000"
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="49 * 17 + 49 * 3"
                optionOne="66 + 52"
                optionTwo="49 * 20"
                optionThree="52 * 66"
                optionFour="98 * 20"
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In a triangle ABC,angle A = x° and angle B = 2x°. What the size of the angle C?"
                optionOne="60°"
                optionTwo="45°"
                optionThree="(180 / 3x)°"
                optionFour="(180 - 3x)°"
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The area of a triangle is 30cm and its base is 10cm. What is the height, in cm, of the triangle"
                optionOne="6"
                optionTwo="12"
                optionThree="13"
                optionFour="17"
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Factorise ABC + MAC"
                optionOne="A (b + m)"
                optionTwo="AC (B + M)"
                optionThree="C (m + B)"
                optionFour="B (B + M)"
                correctOption=""
              />
            </MCQ>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
