import styled from "styled-components";

import { config } from "../../config";
const { titleColor, titleColorDark } = config.header;

export const HeaderTitle = styled.h1`
  font-weight: 300;
  line-height: 1.15;
  margin: 1.25rem 0;
  font-size: 2em;
  text-align: center;
  font-family: "Courier New";
  color: ${(props) =>
    props.theme.mode === "light" ? titleColor : titleColorDark};

  @media only screen and (max-width: 768px) {
    font-size: 3em;
  }
`;
