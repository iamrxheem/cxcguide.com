import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";

// Common
import Breadcrumb from "../common/breadcrumb";
import BreadcrumbItem from "../common/breadcrumbItem";

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {email: "", name: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <SEO
          keywords={[``, ``, ``, ``]}
          title="Mailing List"
          description="Join our mailing list to get weekly study notes, flash cards and past paper solution."
        />
        <Layout>
          <section className="flex-1 full max-w-4xl px-4 mx-auto md:py-5">
            <Breadcrumb>
              <BreadcrumbItem title="Mailing List" />
            </Breadcrumb>

            <h1 className="text-base text-xl">Mailing list</h1>

            <br />
            <p className="text-base text-gray-700 text-base">
              Join our mailing list to get weekly study notes, flash cards and
              past paper solution.
            </p>

            <br />
            <form
              className="form validate"
              id="mc_embed_signup"
              action="https://cxcguide.us18.list-manage.com/subscribe/post?u=11c71b70324980ffe7d8500a6&amp;id=3c1d97be12"
              method="post"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate
            >
              <input
                type="text"
                value={this.state.name}
                name="FNAME"
                style={{width: "75%"}}
                onChange={this.handleNameChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mce-EMAIL"
                placeholder="Enter your first name"
                required
              />
              <br />
              <br />
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="EMAIL"
                style={{width: "75%"}}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mce-EMAIL"
                placeholder="Enter your email"
                required
              />
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

              <br />
              <br />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
              >
                Join now
              </button>
            </form>
            <br />
            <p>
              Read our{" "}
              <a className="text-blue-500 hover:underline" href="/privacy">
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </Layout>
      </>
    );
  }
}

export default Page;
