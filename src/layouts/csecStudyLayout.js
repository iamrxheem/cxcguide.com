import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import CSECStudyMiniNav from "../components/csecStudyMiniNav";

class CSECStudyLayout extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <CSECStudyMiniNav />

          <>{this.props.children}</>
        </Layout>
      </>
    );
  }
}

CSECStudyLayout.propTypes = {
  children: PropTypes.node
};

export default CSECStudyLayout;
