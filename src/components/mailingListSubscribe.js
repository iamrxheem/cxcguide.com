import React from "react";

class MailingListSubscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {email: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <>
          <div
            className="container sm:p-1 md:p-5 lg:p-7"
            style={{padding: "10px 10px"}}
            id="mc_embed_signup"
          >
            <form
              action="https://cxcguide.us18.list-manage.com/subscribe/post?u=11c71b70324980ffe7d8500a6&amp;id=3c1d97be12"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="form"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>

                <p>
                  Join our mailing list to get weekly study notes, flash cards
                  and past paper solutions.
                </p>

                <br />
                <div className="">
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="EMAIL"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="mce-EMAIL"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <br />

                <div
                  style={{position: "absolute", left: "-5000px"}}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_11c71b70324980ffe7d8500a6_3c1d97be12"
                    tabIndex="-1"
                    value=""
                  />
                </div>

                <div className="clear">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    style={{width: "100px"}}
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
          <br />
        </>
      </>
    );
  }
}

export default MailingListSubscribe;
