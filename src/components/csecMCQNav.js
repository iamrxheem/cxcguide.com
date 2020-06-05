import React from "react";
import {MobileView, BrowserView} from "react-device-detect";
import {Link} from "gatsby";

const CSECMCQNav = () => {
  return (
    <>
      <BrowserView>
        <div className="justify-center my-8 select-none flex">
          <Link
            to="/resources/MCQ/csec/business"
            className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-700 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
          >
            Business
          </Link>
          <Link
            to="/resources/MCQ/csec/humanities"
            className="py-2 px-4 shadow-md no-underline rounded-full bg-pink-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
          >
            Humanities
          </Link>
          <Link
            to="/resources/MCQ/csec/sciences"
            className="py-2 px-4 shadow-md no-underline rounded-full bg-red-700 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none mr-2"
          >
            Science and Technology
          </Link>
          <Link
            to="/resources/MCQ/csec/languages"
            className="py-2 px-4 shadow-md no-underline rounded-full bg-orange-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
          >
            Languages
          </Link>
        </div>
      </BrowserView>

      <MobileView>
        <div className="justify-center my-8 select-none flex">
          <Link
            to="/resources/MCQ/csec/business"
            className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-700 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
          >
            Business
          </Link>
          <Link
            to="/resources/MCQ/csec/humanities"
            className="py-2 px-4 shadow-md no-underline rounded-full bg-pink-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
          >
            Humanities
          </Link>
        </div>

        <div
          style={{marginTop: "-15px"}}
          className="justify-center my-8 select-none flex"
        >
          <Link
            to="/resources/MCQ/csec/sciences"
            className="py-2 px-4 shadow-md no-underline rounded-full bg-red-700 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none mr-2"
          >
            Science and Tech
          </Link>
          <Link
            to="/resources/MCQ/csec/languages"
            className="py-2 px-4 shadow-md no-underline rounded-full bg-orange-700 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
          >
            Languages
          </Link>
        </div>
      </MobileView>
    </>
  );
};

export default CSECMCQNav;
