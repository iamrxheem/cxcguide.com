import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";

const StoreLayout = props => {
  return (
    <Layout>
      <div className="bulma-tabs">
        <ul>
          <li>
            <img style={{width: "100px"}} src="" alt="image" />
          </li>
        </ul>
      </div>

      <>{props.children}</>
    </Layout>
  );
};

StoreLayout.propTypes = {
  children: PropTypes.node
};

export default StoreLayout;
