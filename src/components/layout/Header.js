import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "gatsby";
import LogoIcon from "../../svg/LogoIcon";
import Button from "../Button";

const Header = ({ page = `index` } = {}) => {
  const [state, setState] = useState(`top`);

  useEffect(() => {
    const listener = document.addEventListener(`scroll`, (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (state !== `scrolling`) {
          setState(`scrolling`);
        }
      } else {
        if (state !== `top`) {
          setState(`top`);
        }
      }
    });

    return () => document.removeEventListener(`scroll`, listener);
  });

  return (
    <header
      className={`sticky top-0 shadow navbar ${state}`}
      style={{
        zIndex: 10,
      }}
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between max-w-full px-8 py-2">
        <Link to="/">
          <div className="flex items-center text-2xl">
            <div className="w-12 md:ml-24 lg:ml-32">
              <LogoIcon />
            </div>
          </div>
        </Link>
        {page === `index` && (
          <div className="flex mt-3 sm:mt-0">
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#about">
              ABOUT
            </AnchorLink>
            {/* <AnchorLink href="#schedule"></AnchorLink> */}
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#tracks">
              TRACKS
            </AnchorLink>
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#faq">
              FAQ
            </AnchorLink>
            {/* <AnchorLink href="#prizes"></AnchorLink> */}
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#sponsors">
              SPONSORS
            </AnchorLink>
          </div>
        )}
        <div className="hidden md:block">
          {page === `index` ? (
            <Link to="/register">
              <Button className="text-sm font-bold">REGISTER NOW!</Button>
            </Link>
          ) : (
            <Link to="/">
              <Button className="text-sm font-bold">HOME</Button>
            </Link>
          )}
        </div>
      </div>
      <a
        id="mlh-trust-badge"
        style={{
          display: `block`,
          maxWidth: `100px`,
          minWidth: `50px`,
          position: `fixed`,
          left: `25px`,
          top: 0,
          width: `10%`,
          zIndex: 10000,
        }}
        href="https://mlh.io/seasons/na-2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg"
          alt="Major League Hacking 2021 Hackathon Season"
        />
      </a>
    </header>
  );
};

export default Header;
