import React from "react";
import tw from "twin.macro";


 const Paper = tw.div`bg-neutral-100 w-full`
 const Container = tw.div`flex flex-col 
 max-w-screen-xl h-full bg-cover mx-auto text-center h-12 leading-10
  text-stone-800`;


function Footer() {
  return (
  	<Paper>
  		<Container>
  				 Copyright © 2022 Tikfood
  		</Container>
  	</Paper>)
}


export default Footer