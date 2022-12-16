import React from "react";
import Image from 'next/image'
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../helpers/useAnimatedNav.js";

import logoSVG from "../assets/images/logo.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


const Header = tw.header`flex w-full border-b border-solid divide-slate-700 px-8`;

export const NavLinks = tw.div`inline-block`;

export const NavLink = tw.a`
  text-base my-2 
  px-6 py-3
  hocus:text-gray-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-1
  px-5 py-2 rounded text-white
  hocus:bg-red-600
  hocus:text-white
  border-b-0
  bg-red-500
`;

export const LoginLink = tw(NavLink)`
  lg:mx-1
  px-5 py-2 rounded
  hocus:bg-slate-300
  hocus:text-black
  border-b-0
  bg-slate-200
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex font-black border-b-0 text-2xl! ml-0! float-left`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;

export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none transition duration-300 mr-3
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);
export const FloatRightDiv = tw.div`float-right sm:text-center lg:text-right
md:text-right  w-full`;
export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({ roundedHeaderButton = true, logoLink, links, className, collapseBreakpointClass = "lg" }) => {

  const defaultLinks = 
  <FloatRightDiv>
    <NavLinks key={1}>
      <LoginLink href="/#" tw="lg:ml-12!" css={roundedHeaderButton && tw`rounded-full`}>
        Login
      </LoginLink>
      <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} href="/#">Sign Up</PrimaryLink>
    </NavLinks>
  </FloatRightDiv>;

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <Image src={logoSVG} alt="logo" />
      Tikfood
    </LogoLink>
  );

   logoLink = logoLink || defaultLogoLink;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {defaultLinks}
      </DesktopNavLinks>
       <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
           {defaultLinks}
        </MobileNavLinks>
        <NavToggle  onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"} >
           {showNavLinks ? <FontAwesomeIcon icon={faXmark} />: <FontAwesomeIcon icon={faBars} />}
          </NavToggle> 
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
