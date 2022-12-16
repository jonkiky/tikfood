import React from "react";
import tw from "twin.macro";
import Image from 'next/image';
import tiktok from '../assets/images/tiktok.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok} from '@fortawesome/free-solid-svg-icons'

 const Paper = tw.div``
 const Container = tw.div`flex flex-col max-w-screen-xl h-full bg-cover mx-auto mt-14 `;
 const Title = tw.div`text-red-400 bg-white my-3 tracking-tight text-5xl font-semibold content-center text-center w-fit m-auto p-5`;
 const BottonSection = tw.div`m-auto`;
 const Botton = tw.button`hocus:bg-stone-800 m-auto text-4xl font-bold  bg-stone-500 rounded-full py-3 mt-4 mb-28 px-8 text-center text-white `;


function GetStart() {
  return (
  	<Paper>
  		<Container>
  			<Title> Design for Foodie </Title>
  			Looking for a Restaurants? No problem. 
  		  <BottonSection>
            <Botton>Start Finding Restaurants</Botton>
          </BottonSection>
  		</Container>
  	</Paper>)
}


export default GetStart