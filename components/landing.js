import React from "react";
import tw from "twin.macro";
import Image from 'next/image';
import restaurant from '../assets/images/restaurant.png';
import gmap from '../assets/images/map.png';
import { faCirclePlay, faRegular, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 const Paper = tw.div`bg-[url('/assets/images/bg.jpg')]`
 const Container = tw.div`flex flex-col max-w-screen-xl h-full bg-cover m-auto `;
 const SloganSection = tw.div`flex flex-col  m-auto pt-36 px-8`;
 const CardBoxSection = tw.div`flex md:flex-row flex-col m-auto lg:px-24 my-8`;
 

 const Slogan = tw.div` rounded-lg bg-zinc-50 my-6 tracking-tight text-5xl font-semibold content-center text-center w-fit m-auto p-5`;
 const Slogan2= tw.div` rounded-lg text-yellow-600 bg-zinc-50  my-6 tracking-tight text-6xl font-semibold content-center text-center w-fit m-auto p-5`;
 
 const CardBox = tw.div`bg-white rounded-lg md:mx-2 md:w-1/2 md:my-0 lg:mx-2 lg:w-1/2 lg:my-0 my-2 w-full  border-solid border-slate-300 border lg:p-2`;
 const CardHead = tw.div`inline-block w-full py-2 float-right`;
 const CardTitle = tw.div`content-center inline-block align-middle text-current  px-2 font-roboto`;
 const CardMoreIcon = tw.div`inline-block float-right pr-2`;
 const CardHeadImg =tw.div`inline-block float-left px-2 `;
 const CardBody = tw.div`relative mx-2`;
 const CardTextDesc = tw.div`m-2`;

 const RestaurantName = tw.div`text-2xl font-semibold`;
 const RestaurantDesc = tw.div`my-2 `;
 const RestaurantSection = tw.div`text-lg `;


 const BottonSection = tw.div`m-auto  mt-8 mb-28 `;
 const Botton = tw.button`hocus:bg-red-600 m-auto py-2 px-16 text-4xl font-bold  bg-red-500 rounded-full text-center text-white `;

function LandingPage() {
  return (
    <Paper>
        <Container id="landing" >
          <SloganSection >
              <Slogan>MAPs Famous Restaurant Food Tour Videos </Slogan>
              <Slogan2 >Find you food & Meat you there </Slogan2>
          </SloganSection>
          <BottonSection>
            <Botton>Explore</Botton>
          </BottonSection>
          <CardBoxSection >
              <CardBox>
                <CardHead>
                  <CardHeadImg>
                    <Image src={restaurant} alt='restaurant' className="w-9 h-9 rounded-full mt-1"/>
                  </CardHeadImg>
                  <CardTitle>
                    <p className="text-slate-600">Alex DC Foodie </p>
                    <p className="text-slate-500">A nice restaurant at DMV area</p>
                  </CardTitle>
                  <CardMoreIcon >
                    <FontAwesomeIcon icon={faEllipsis} className="leading-9 px-2 float-right cursor-pointer"/>
                  </CardMoreIcon>
                </CardHead>
                <CardBody>
                  <FontAwesomeIcon icon={faRegular,faCirclePlay}  className="absolute bottom-1/2 left-1/2 text-white text-4xl cursor-pointer drop-shadow-lg"/>
                  <Image src={restaurant} alt='restaurant' className="rounded-lg max-h-128"></Image>
                </CardBody>
                <CardTextDesc >
                  <RestaurantSection>
                     <RestaurantName>Hornets Nest Grille</RestaurantName>
                     <RestaurantDesc>the cutest hidden gem in New York #nyc#hiddengem#nyclife#travel#restaurant#fyp</RestaurantDesc>
                  </RestaurantSection>
                </CardTextDesc>
              </CardBox>
              <CardBox>
                <Image src={gmap} alt='map' className="rounded-lg"></Image>
              </CardBox>
          </CardBoxSection>
        </Container>
        </Paper>
    )
}

export default LandingPage

