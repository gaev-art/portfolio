import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = (props) => (
  <a href={props.href}>
    <FontAwesomeIcon
      icon={props.icon}
      size="lg"
      className="no-underline text-[#4a4a4a] hover:text-white hover:-translate-y-1"
    />
  </a>
);
