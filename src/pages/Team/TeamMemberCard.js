import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function TeamMemberCard({
  name,
  position,
  linkedin,
  email,
  instagram,
  image,
  calendly,
}) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
      <div className="flex flex-col">
        {/* Avatar */}
        <a href={calendly} target="_blank" className="mx-auto">
          <img
            className="rounded-2xl drop-shadow-md hover:drop-shadow-xl hover:opacity-90 transition-all duration-200"
            src={image}
          />
        </a>

        {/* Details */}
        <div className="text-center mt-6">
          {/* Name */}
          <h1 className="text-gray-900 text-xl font-bold mb-1 font-montserrat">
            {name}
          </h1>

          {/* Title */}
          <div className="text-gray-700 font-light mb-2">{position}</div>

          {/* Social Icons */}
          <div
            className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
          >
            {/* Linkedin */}
            <a
              href={linkedin}
              target="_blank"
              className="flex rounded-full hover:bg-indigo-100 h-10 w-10"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-indigo-500 mx-auto mt-3"
              ></FontAwesomeIcon>
            </a>

            {/* Instagram */}
            <a
              href={instagram}
              target="_blank"
              className="flex rounded-full hover:bg-orange-100 h-10 w-10"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-orange-500 mx-auto mt-3"
              ></FontAwesomeIcon>
            </a>

            {/* Instagram */}
            <a
              href={"mailto:" + email}
              target="_blank"
              className="flex rounded-full hover:bg-pink-100 h-10 w-10 "
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-theme mx-auto mt-3"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
