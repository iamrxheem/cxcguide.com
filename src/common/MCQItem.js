import PropTypes from "prop-types";
import React from "react";
import {CustomView} from "react-device-detect";
import Audio from "./audio";
import Swal from "sweetalert2";
import $ from "jquery";

class MCQItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswer: ""
    };

    this.changeAnswer = this.changeAnswer.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  changeAnswer(answer) {
    this.setState({
      selectedAnswer: answer
    });
  }

  onSelect(event) {
    if (this.state.selectedAnswer === "") {
      Swal.fire("You haven't selected an answer!");

      return;
    }
    if (this.state.selectedAnswer === this.props.correctOption) {
      Swal.fire({
        icon: "success",
        title: "Correct",
        text: "That's right. Congrats!",
        footer: this.props.note
      }).then(() => {
        $("#next-button").click();
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "That answer isn't correct. Try again!",
        footer: ""
      });
    }

    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="px-6 py-4">
          <CustomView condition={this.props.hasText}>
            <p className="text-black text-base">{this.props.text}</p>
            <br />
          </CustomView>

          <p className="text-gray-700 text-base">{this.props.question}</p>
        </div>

        <div>
          <CustomView condition={this.props.hasImg}>
            <img
              alt="question image"
              style={{width: "100%"}}
              src={this.props.imgSrc}
            />
          </CustomView>

          <CustomView condition={this.props.hasAudio}>
            <Audio src={this.props.audioSrc} />
            <br />
            <br />
          </CustomView>

          <CustomView condition={this.props.hasListOption}>
            <br />
            <ul style={{paddingLeft: "50px", listStyleType: "lower-roman"}}>
              <li>{this.props.listOptionOne}</li>
              <li>{this.props.listOptionTwo}</li>
              <li>{this.props.listOptionThree}</li>
              <li>{this.props.listOptionFour}</li>
            </ul>
            <br />
          </CustomView>
        </div>

        <div className="px-6 py-4">
          <CustomView condition={!this.props.isTrueFalse}>
            <form className="rounded">
              <div className="mb-4">
                {/* Option A */}
                <div className="flex items-center mr-4 mb-4">
                  <input
                    type="radio"
                    name="radio"
                    className="cursor-pointer"
                    onChange={() => {
                      this.changeAnswer("a");
                    }}
                  />
                  <label className="flex items-center cursor-pointer text-base  text-gray-700 ">
                    <span className="inline-block mr-2 rounded-full border text-gray-700 border-grey flex-no-shrink"></span>
                    {this.props.optionOne}
                  </label>
                </div>
              </div>

              {/* Option B */}
              <div className="mb-4">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    type="radio"
                    name="radio"
                    className="cursor-pointer"
                    onChange={() => {
                      this.changeAnswer("b");
                    }}
                  />
                  <label className="  text-gray-700  flex items-center cursor-pointer text-base">
                    <span className="inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                    {this.props.optionTwo}
                  </label>
                </div>
              </div>

              {/* Option C */}
              <div className="mb-4">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    type="radio"
                    name="radio"
                    className="cursor-pointer"
                    onChange={() => {
                      this.changeAnswer("c");
                    }}
                  />
                  <label className=" text-gray-700 flex items-center cursor-pointer text-base">
                    <span className="inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                    {this.props.optionThree}
                  </label>
                </div>
              </div>

              {/* Option D */}
              <div>
                <div className="flex items-center mr-4 mb-4">
                  <input
                    type="radio"
                    name="radio"
                    className="cursor-pointer"
                    onChange={() => {
                      this.changeAnswer("d");
                    }}
                  />
                  <label className=" text-gray-700 flex items-center cursor-pointer text-base">
                    <span className="inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                    {this.props.optionFour}
                  </label>
                </div>
              </div>
            </form>
          </CustomView>

          <CustomView condition={this.props.isTrueFalse}>
            <form>
              <div className="mb-6">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    type="radio"
                    name="radio"
                    className="cursor-pointer"
                    onChange={() => {
                      this.changeAnswer("T");
                    }}
                  />
                  <label className="flex items-center cursor-pointer text-base">
                    <span className="inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                    TRUE
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    type="radio"
                    name="radio"
                    className="cursor-pointer"
                    onChange={() => {
                      this.changeAnswer("F");
                    }}
                  />
                  <label className="flex items-center cursor-pointer text-base">
                    <span className="inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                    FALSE
                  </label>
                </div>
              </div>
            </form>
          </CustomView>

          <br />
          <button
            className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={this.onSelect}
          >
            <b>Check answer</b>
          </button>
        </div>
      </>
    );
  }
}

MCQItem.propTypes = {
  text: PropTypes.string.isNotRequired,
  note: PropTypes.string.isNotRequired,
  correctOption: PropTypes.string.isRequired,
  listOptionOne: PropTypes.string.isRequired,
  listOptionTwo: PropTypes.string.isRequired,
  listOptionThree: PropTypes.string.isRequired,
  listOptionFour: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  audioSrc: PropTypes.string.isNotRequired,
  imgSrc: PropTypes.string.isNotRequired,
  optionOne: PropTypes.string.isNotRequired,
  optionTwo: PropTypes.string.isNotRequired,
  optionThree: PropTypes.string.isNotRequired,
  optionFour: PropTypes.string.isNotRequired,
  hashtag: PropTypes.string.isRequired,
  hasImg: PropTypes.bool.isNotRequired,
  hasAudio: PropTypes.bool.isNotRequired,
  hasListOption: PropTypes.bool.isNotRequired,
  isTrueFalse: PropTypes.bool.isNotRequired,
  hasText: PropTypes.bool.isNotRequired,
  children: PropTypes.node.isRequired
};

export default MCQItem;
