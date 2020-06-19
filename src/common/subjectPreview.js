import React from "react";
import PropTypes from "prop-types";
import {CustomView} from "react-device-detect";
import Collapsible from "react-collapsible";

const SubjectPreview = props => {
  return (
    <>
      <li className="pb-5"></li>
      <></>

      <CustomView condition={props.ready}>
        <a href={props.href} className="text-blue-500 hover:text-blue-400">
          <i style={{color: "#FF08D7"}} className="fas fa-angle-right mr-3"></i>
          {props.title}
        </a>
      </CustomView>

      <CustomView condition={props.ready === false}>
        <li>
          <Collapsible
            trigger={
              <>
                <a className="text-blue-500 hover:text-blue-400">
                  <i
                    style={{color: "#FF08D7"}}
                    className="fas fa-angle-right mr-3"
                  ></i>
                  {props.title}
                </a>
              </>
            }
          >
            <>
              <br />
              <></>
            </>
          </Collapsible>
        </li>
      </CustomView>
    </>
  );
};

SubjectPreview.propTypes = {
  title: PropTypes.node.isRequired,
  href: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  ready: PropTypes.bool.isRequired
};

export default SubjectPreview;
