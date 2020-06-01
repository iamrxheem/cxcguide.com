import {graphql, useStaticQuery, Link} from "gatsby";
import React, {useState} from "react";
import {BrowserView} from "react-device-detect";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const {site} = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-blue-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <a href="/">
          <h1 className="flex items-center text-white no-underline">
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </a>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `flow-root` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/study`,
              title: `Study`
            },
            {
              route: `/quiz`,
              title: `Quiz`
            },
            {
              route: `/classes`,
              title: `Classes`
            },
            {
              route: `/join`,
              title: `Join`
            },
            {
              route: `/blog`,
              title: `Blog`
            },
            {
              route: `/FAQ`,
              title: `FAQ`
            },
            {
              route: `/contact`,
              title: `Contact`
            }
          ].map(link => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          <BrowserView>
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key="shop"
              to="/store"
            >
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </BrowserView>
        </nav>
      </div>
    </header>
  );
}

export default Header;
