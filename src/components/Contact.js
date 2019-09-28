import React from "react";
import "../assets/css/contact.css";

export const Contact = () => (
  <div className="contact">
    <ul>
      <li className="list-item-content">
        &nbsp;
        <i className="fa fa-phone" aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;
        <a href="#">(401) 497-6933</a>
      </li>

      <li className="list-item-content">
        <i className="fa fa-envelope-open-o" aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;
        <a href="mailto:edward.dupre@edwd42.com">edward.dupre@edwd42.com</a>
      </li>

      <li className="list-item-content">
        <i className="fa fa-twitter" aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;
        <a
          href="https://twitter.com/edwd42"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter: @edwd42
        </a>
      </li>

      <li className="list-item-content">
        <i className="fa fa-github" aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;
        <a
          href="https://github.com/edwd42"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/edwd42
        </a>
      </li>

      <li className="list-item-content">
        <i className="fa fa-linkedin" aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;
        <a
          href="www.linkedin.com/edwd42"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.linkedin.com/edwd42
        </a>
      </li>

      <li className="list-item-content">
        <i className="fa fa-globe" aria-hidden="true" />
        &nbsp;&nbsp;&nbsp;
        <a href="https://edwd42.com" target="_blank" rel="noopener noreferrer">
          Web: https://edwd42.com
        </a>
      </li>
    </ul>
  </div>
);
