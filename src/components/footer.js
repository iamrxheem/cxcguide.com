import React from "react";
import {Link} from "gatsby";

// React device detect
import {MobileView} from "react-device-detect";
import MailingListSubscribe from "./mailingListSubscribe";
import SocialMediaIcons from "./socialMediaIcons";

function Footer() {
  return (
    <>
      <footer>
        <div className="bg-gray-300">
          <div className="container p-8">
            <div className="sm:flex mb-4">
              <div className="sm:w-1/3 h-auto">
                <SocialMediaIcons />

                <MailingListSubscribe />
              </div>

              <MobileView>
                <div className="sm:w-1/3 h-auto">
                  <h5 className="text-base text-black sm:text-xl md:text-2xl lg:text-2xl">
                    Popular CSEC Subjects
                  </h5>
                  <br />

                  <ul className="list-reset leading-normal">
                    <li className="text-black text-base mb-6">
                      <Link
                        style={{color: "#3182CE"}}
                        to="/study/csec/mathematics"
                      >
                        Mathematics
                      </Link>
                    </li>
                    <li className="text-black text-base mb-6">
                      <Link
                        style={{color: "#3182CE"}}
                        to="/study/csec/english-a"
                      >
                        English A
                      </Link>
                    </li>
                    <li className="text-black text-base mb-6">
                      <Link
                        style={{color: "#3182CE"}}
                        to="/study/csec/information-technology"
                      >
                        Information Technology
                      </Link>
                    </li>
                    <li className="text-black text-base mb-6">
                      <Link
                        style={{color: "#3182CE"}}
                        to="/study/csec/chemistry"
                      >
                        Chemistry
                      </Link>
                    </li>
                    <li className="text-black text-base mb-6">
                      <Link style={{color: "#3182CE"}} to="/study/csec/spanish">
                        Spanish
                      </Link>
                    </li>

                    <li className="text-black text-base mb-6">
                      <Link
                        style={{color: "#3182CE"}}
                        to="/study/csec/geography"
                      >
                        Geography
                      </Link>
                    </li>
                    <li className="text-black text-base mb-6">
                      <Link
                        style={{color: "#3182CE"}}
                        to="/study/csec/english-b"
                      >
                        English B
                      </Link>
                    </li>
                    <li className="text-black text-base mb-6">
                      <Link style={{color: "#3182CE"}} to="/study/csec/biology">
                        Biology
                      </Link>
                    </li>
                  </ul>
                </div>
                <br />
              </MobileView>

              <div className="sm:w-1/3 h-auto">
                <h5 className="text-base text-black sm:text-xl md:text-2xl lg:text-2xl">
                  Popular CAPE Subjects
                </h5>
                <br />

                <ul className="list-reset leading-normal">
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      Communication Studies
                    </Link>
                  </li>
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      Spanish
                    </Link>
                  </li>
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      Computer Science
                    </Link>
                  </li>
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      Information Technology
                    </Link>
                  </li>
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      Management of Business
                    </Link>
                  </li>
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      Law
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="sm:w-1/3 h-auto">
                <MobileView>
                  <br />
                </MobileView>

                <h5 className="text-base text-black sm:text-xl md:text-2xl lg:text-2xl">
                  Recent{"  "}
                  <i
                    className="fas fa-blog mr-2"
                    style={{color: "#FF8C42"}}
                    aria-hidden="true"
                  ></i>
                  Posts
                </h5>
                <br />
                <ul className="list-reset leading-normal">
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{color: "#F75C03"}}
                      ></i>
                      Top 15 University Degrees
                    </Link>
                  </li>
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{color: "#F75C03"}}
                      ></i>
                      Top 10 Spanish Vocabulary
                    </Link>
                  </li>
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{color: "#F75C03"}}
                      ></i>
                      French for Beginners
                    </Link>
                  </li>
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{color: "#F75C03"}}
                      ></i>
                      10 Time Managemnt Techniques
                    </Link>
                  </li>
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{color: "#F75C03"}}
                      ></i>
                      Most Profitable Degrees
                    </Link>
                  </li>
                  <li className="text-black text-base mb-6">
                    <Link style={{color: "#3182CE"}} to="/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{color: "#F75C03"}}
                      ></i>
                      Student Life Off Campus
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container p-8" style={{backgroundColor: "#212529"}}>
          <div className="sm:flex mb-4">
            <div className="sm:w-1/3 h-auto">
              <br />
              <h5 className="text-base text-white sm:text-xl md:text-2xl lg:text-2xl">
                Reach Out
              </h5>

              <br />
              <ul className="list-reset leading-normal">
                <li className="text-gray-500 mb-6">
                  <Link to="/contact">Contact and Support</Link>
                </li>
                <li className="text-gray-500 mb-6">
                  <Link to="/kb">Knowledge Base</Link>
                </li>
                <li className="text-gray-500 mb-6">
                  <Link to="/FAQ">Frequently Asked Questions</Link>
                </li>
                <li className="text-gray-500 mb-6">
                  <Link to="/mailing-list">Mailing List</Link>
                </li>
                <li className="text-gray-500 mb-6">
                  <Link to="/press">Press and Notice</Link>
                </li>
                <li className="text-gray-500 mb-6">
                  <Link to="/feedback">Feedback</Link>
                </li>
              </ul>
            </div>
            <div className="sm:w-1/3 h-auto sm:mt-0 mt-8">
              <br />
              <h5 className="text-base text-white sm:text-xl md:text-2xl lg:text-2xl"></h5>
              <br />

              <ul className="list-reset leading-normal">
                <li className="text-gray-500 mb-6">
                  <Link to="/">...</Link>
                </li>
                <li className="text-gray-500 mb-6">
                  <Link to="/">...</Link>
                </li>
                <li className="text-gray-500 mb-6">
                  <Link to="/">...</Link>
                </li>
                <li className="text-gray-400 mb-6">
                  <Link to="/">...</Link>
                </li>
                <li className="text-gray-500 mb-6">
                  <Link to="/">...</Link>
                </li>
                <li className="text-gray-500 mb-6">
                  <Link to="/">...</Link>
                </li>
              </ul>
            </div>
            <div className="sm:w-1/3 h-auto sm:mt-0 mt-8">
              <br />
              <h5 className="text-base text-white sm:text-xl md:text-2xl lg:text-2xl">
                Related Links
              </h5>
              <ul className="list-reset leading-normal">
                <li className="text-gray-500 mb-6">
                  <a target="_blank" rel="noreferrer" href=""></a>
                </li>
                <li className="text-gray-500 mb-6">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.cxc.org"
                  >
                    Caribbean Examinations Council
                  </a>
                </li>
                <li className="text-gray-500 mb-6">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://cxc-store.com/"
                  >
                    CXC Store
                  </a>
                </li>
                <li className="text-gray-500 mb-6">
                  <a target="_blank" rel="noreferrer" href="http://moe.gov.jm/">
                    Ministry of Education, Jamaica
                  </a>
                </li>
                <li className="text-gray-500 mb-6">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.moe.gov.tt/"
                  >
                    Ministry of Education, Trinidad and Tobago
                  </a>
                </li>
                <li className="text-gray-500 mb-6">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.mes.gov.bb/"
                  >
                    Ministry of Education, Barbados
                  </a>
                </li>

                <li className="text-gray-500 mb-6">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.mona.uwi.edu/"
                  >
                    The University of the West Indies at Mona
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-300">
          <nav className="flex  max-w-4xl p-4 mx-auto text-sm md:p-8">
            <p className="text-white">
              <a
                style={{color: "#3182CE"}}
                className="no-underline mr-5"
                href="/terms"
              >
                Terms
              </a>
              <a
                style={{color: "#3182CE"}}
                className="no-underline mr-5"
                href="/privacy"
              >
                Privacy
              </a>
              <a
                style={{color: "#3182CE"}}
                className="no-underline mr-5"
                href="/cookies"
              >
                Cookies
              </a>
              <a
                style={{color: "#3182CE"}}
                className="no-underline mr-5"
                href="/discord-policy"
              >
                Discord
              </a>
              <a
                style={{color: "#3182CE"}}
                className="no-underline mr-5"
                href="/sharing-policy"
              >
                Sharing
              </a>
            </p>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
