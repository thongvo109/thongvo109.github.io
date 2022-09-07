import React from "react";

import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "../../config";
import {
  Avatar,
  HeaderContainer,
  HeaderIcons,
  HeaderSubtitle,
  HeaderTitle,
  HeaderWrapper,
} from "./";

export const Header = () => {
  const items = [
    { icon: faFacebook, link: "https://facebook.com/vmt109" },
    { icon: faGithub, link: "https://github.com/thongvo109" },
    { icon: faLink, link: "http://thongvo109.com" },
  ];

  const openLink = (url) => window.open(url);
  const urlImage =
    "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/72482899_393572781589675_1219582987633426432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YsTBlMOoTzkAX8_aLP6&_nc_ht=scontent-hkg4-1.xx&oh=00_AT_1hXqoOX8EulpW5Bay8A7pxqUNBkTt_ZJWtmRoC-AapA&oe=633C7415";
  return (
    <HeaderContainer>
      {/* <GithubLogin isAbsolute={true} /> */}
      <HeaderWrapper>
        <Avatar>
          <img src={urlImage} alt="avatart" />
        </Avatar>
        <HeaderTitle>thongvo109</HeaderTitle>
        <HeaderSubtitle>{config.subtitle}</HeaderSubtitle>
        {/* <HeaderSubtitle> */}

        <HeaderIcons>
          {items.map((value, index) => (
            <FontAwesomeIcon
              size="2x"
              key={index}
              icon={value.icon}
              onClick={() => openLink(value.link)}
            />
          ))}
        </HeaderIcons>
        {/* </HeaderSubtitle> */}
      </HeaderWrapper>
    </HeaderContainer>
  );
};
