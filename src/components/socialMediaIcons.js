import React from "react";

const SocialMediaIcons = () => {
  return (
    <>
      <ul className="flex items-start items-center items-end">
        <li className="flex-1">
          <a
            href="https://www.instagram.com/cxcguide/"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded text-white"
          >
            <i
              style={{color: "#8a3ab9"}}
              className="fab fa-instagram fa-lg"
            ></i>
          </a>
        </li>
        <li className="flex-1">
          <a
            href="https://www.youtube.com/channel/UC0eO_ApReknTjj50B7_LQyw"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded text-white"
          >
            <i style={{color: "red"}} className="fab fa-youtube fa-lg"></i>
          </a>
        </li>
        <li className="flex-1">
          <a
            href="https://www.facebook.com/thecgsteam/"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded text-white"
          >
            <i style={{color: "#00acee"}} className="fab fa-twitter fa-lg"></i>
          </a>
        </li>
        <li className="flex-1">
          <a
            href="https://twitter.com/thecsgteam"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded text-white"
          >
            <i
              style={{color: "#0084FF"}}
              className="fab fa-facebook-messenger fa-lg"
            ></i>
          </a>
        </li>

        <li className="flex-1">
          <a
            href="mailto:contact@cxcguide.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded text-white"
          >
            <i style={{color: "grey"}} className="fas fa-envelope fa-lg"></i>
          </a>
        </li>
      </ul>

      <br />
    </>
  );
};

export default SocialMediaIcons;
