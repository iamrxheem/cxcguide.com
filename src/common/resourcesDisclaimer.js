import React from "react";

const ResourcesDisclaimer = () => {
  return (
    <div className="pt-6">
      <br />
      <h6 className="text-lg font-bold text-gray-700">DISCLAIMER</h6>

      <br />
      <p className="mt-0 mb-4 text-gray-600">
        The past paper solutions should serve as a guide and should not be used
        in substitution of studying or doing your own work.
      </p>

      <br />
      <p className="mt-0 mb-4 text-gray-600">
        The information has been thoroughly revised. However, if you believe
        there may be discrepancies please{" "}
        <a
          className="text-blue-500 underline"
          href="mailto:contact@cxcguide.com"
        >
          let us know
        </a>{" "}
        .
      </p>
    </div>
  );
};

export default ResourcesDisclaimer;
