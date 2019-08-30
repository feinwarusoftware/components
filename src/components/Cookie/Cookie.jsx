import React from "react";
import PropTypes from "prop-types";
import cookies from "universal-cookie";

function Cookie({buttonText, link, linkMessage, message}) {
  this.cookie = React.createRef();

  let status = cookies.get("cookie-status");
  if (status == null) {
    this.cookie.current.style.display = "block";
  } else if (status === "accepted") {
    this.cookie.current.style.display = "none";
  }
  const acceptCookie = () => {
    this.cookie.current.style.display = "none";
    cookies.set("cookie-status", "accepted", { maxAge: 31622400 }); // 1 year
  };
  return (
    <div className="cookie-message" ref={this.cookie}>
      <div className="container">
        <button
          onClick={acceptCookie}
          className="px-4 btn btn-sm btn-sppd float-right"
        >
          {buttonText}
        </button>
        <p className="mb-0">
          {message}
        </p>
        <a href={link} rel="nofollow">{linkMessage}</a>
      </div>
    </div>
  );
}

Cookie.propTypes = {
  message: PropTypes.string,
  linkMessage: PropTypes.string,
  link: PropTypes.string,
  buttonText: PropTypes.string
};

export default Cookie;