import React from "react";
import PropTypes from "prop-types";
import {CustomView} from "react-device-detect";
import Collapsible from "react-collapsible";

const SubjectPreview = props => {
  return (
    <>
      <li className="pb-5"></li>
      <></>

      <CustomView condition={props.ready == true}>
        <li>
          <a href={props.href} className="text-blue-500 hover:text-blue-400">
            <i
              style={{color: "#FF08D7"}}
              className="fas fa-angle-right mr-3"
            ></i>
            {props.title}
          </a>
        </li>
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
              <img src={props.imgSrc} style={{width: "100%"}} />

              <br />
              <p>{props.description}</p>

              <br />
              <a
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                href={props.href}
              >
                Start now
              </a>
              <br />
              <br />
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
  imgSrc: PropTypes.node.isNotRequired,
  ready: PropTypes.bool.isRequired
};

export default SubjectPreview;
