import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
function Header({ username }) {
  return (
    <div className="header">
      <h5 className="title">{username}</h5>
      <button className="more-btn">
        <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default Header;
