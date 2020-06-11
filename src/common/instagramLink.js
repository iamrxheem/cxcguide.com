import React from "react";

const InstagramLink = () => {
  return (
    <>
      <br />
      <br />
      <>
        <p className="mt-0 mb-4 text-gray-600">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/cxcguide/"
          >
            <i
              style={{color: "#8a3ab9"}}
              className="fab fa-instagram fa-lg mr-3"
            ></i>
          </a>
          Follow us on{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/cxcguide/"
          >
            <span className="text-purple-600 underline">Instagram</span>
          </a>
        </p>
      </>
    </>
  );
};

export default InstagramLink;
