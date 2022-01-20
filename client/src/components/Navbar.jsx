import React from "react";
import styled from "styled-components";
import { BrandLogo, LogoTitle } from "./BrandLogo";
import { Button } from "./Button";
import { Marginer } from "./Marginer";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";


const NavbarContainer = styled.div`
  width: 95.7%;
  height: 35px;
  max-width: ${deviceSize.laptop}px;
  max-height: ${deviceSize.laptop}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  border: 1px solid #707070;
  background-color: #fff;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
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
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  transition: all 200ms ease-in-out;
  &:hover {
    color: #white;
  }
`;

const Seperator = styled.div `
  min-height: 35%;
  width: 1px;
  background-color: #7B61FF;`;

export default function Navbar(props) {

  const isMobile = useMediaQuery({ maxWidth: deviceSize });
  const { textSize, color,} = props;

  return (
    <NavbarContainer>
      <BrandLogo>
        <AnchorLink to="/">
        </AnchorLink>
      </BrandLogo>
      <AccessibilityContainer>
      {!isMobile && <AnchorLink to="/donations">Donations</AnchorLink>}
      {!isMobile && <Marginer direction="horizontal" margin={25} />}
      {!isMobile && <AnchorLink to="/reservations">Reservations</AnchorLink>}
      {!isMobile && <Marginer direction="horizontal" margin={20} />}
      {!isMobile && <Seperator />}
      {!isMobile && <Marginer direction="horizontal" margin={8} />}
      {!isMobile && <AnchorLink to="/login">Login</AnchorLink>}
      </AccessibilityContainer>
    </NavbarContainer>
  );
}