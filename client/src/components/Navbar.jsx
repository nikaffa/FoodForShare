import React from "react";
import styled from "styled-components";
import { BrandLogo } from "./BrandLogo";
import { Button } from "./Button";
import { Marginer } from "./Marginer";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const NavbarContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  border: 1px solid #707070;
  background-color: #fff;
`
;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled(Link)`
  font-size: 12px;
  color: #7B61FF;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
  &:hover {
    filter: contrast(0.6);
  }
`;

const Seperator = styled.div `
  min-height: 35%;
  width: 1px;
  background-color: #7B61FF;`;

export default function Navbar(props) {

  const isMobile = useMediaQuery({ maxWidth: deviceSize });

  return (
    <NavbarContainer>
      <BrandLogo />
      <AccessibilityContainer>
      {!isMobile && <AnchorLink to="/donations">Donations</AnchorLink>}
      {!isMobile && <Marginer direction="horizontal" margin={25} />}
      {!isMobile && <AnchorLink to="/reservations">Reservations</AnchorLink>}
      {!isMobile && <Marginer direction="horizontal" margin={200} />}
      {!isMobile && <Seperator />}
      {!isMobile && <Marginer direction="horizontal" margin={8} />}
      {!isMobile && <AnchorLink to="/login">Login</AnchorLink>}
      </AccessibilityContainer>
    </NavbarContainer>
  );
}