import styled from "styled-components";
import tw from "twin.macro";
import LandingPage from "@components/landing";
import JoinUs from "@components/join_us";
import Footer from "@components/footer";
import GetStart from "@components/get_start";
import Header, { LogoLink, NavLinks, NavLink } from "@components/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function HomePage() {
  return <div className="h-screen">
   <Header/>
   <LandingPage />
   <JoinUs />
   <Footer />
  </div>
}

export default HomePage;