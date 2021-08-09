import React, { useState } from "react";
import { ArrowRightError, ArrowForwardError, NavbarContainerError, NavLogoError } from "./PageNotFoundElements";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="errorpage">
        <NavbarContainerError onMouseEnter={onHover}
            onMouseLeave={onHover}>
          <NavLogoError to='/dashboard'>{hover ? <ArrowForwardError /> : <ArrowRightError />}Notify.</NavLogoError>
        </NavbarContainerError>
      <div className="errorpagebtncontainer">
        <Link to="/dashboard">
          <div
            className="centererrorbtn"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            <div className="errorpagebtn">
              {hover ? <ArrowForwardError /> : <ArrowRightError />}Back Home
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
