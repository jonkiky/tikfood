import React from "react";
import tw from "twin.macro";
import Image from 'next/image';
import chef from '../assets/images/chef.png';

 const Paper = tw.div`bg-neutral-50 w-full`
 const Container = tw.div`flex flex-row max-w-screen-xl h-full bg-cover mx-auto py-40  `;
 const Title = tw.div`text-red-400  my-3 tracking-tight text-5xl font-semibold w-fit p-2`;
 const BottonSection = tw.div`m-auto flex flex-row  mt-4`;
 const Botton = tw.button`hocus:bg-stone-800 m-auto text-xl font-bold  bg-stone-700 rounded-full py-2  px-24 text-center text-white `;
 const RedBotton = tw.button`hocus:bg-red-700 m-auto text-xl font-bold  bg-red-600 rounded-full py-2  px-24 text-center text-white `;
 
 const SubTitle = tw.p `mx-auto text-4xl mb-8  mt-2 text-center md:text-left`;
 const UL = tw.ul`mx-auto mt-2 mb-16 flex flex-col `;
 const LI = tw.li`md:w-full  md:mx-auto mx-2  mt-2 text-xl md:mx-0 border border-current border-solid p-5 hocus:bg-slate-200`;
 const Cicle =  tw.span`mx-2 rounded-full w-8 inline-block bg-stone-800 text-white text-2xl text-center`;
 const ImageSection = tw.div`ml-32 mr-14 hidden lg:flex`;
 const Wording = tw.div``;


function JoinUs() {
  return (
  	<Paper>
  		<Container>
        <ImageSection>
            <Image src={chef} alt='chef' className="rounded-lg" />
        </ImageSection>
        <Wording>
    			<SubTitle>
    				Support our local business by sharing your experiences to the public. 
    			</SubTitle>
  				 <UL>
  				  <LI><Cicle>1</Cicle>Upload Videos</LI>
  				  <LI><Cicle>2</Cicle>Tag The Restaurant</LI>
  				  <LI><Cicle>3</Cicle>See It On The MAP</LI>
  				</UL>
    			 <BottonSection>
            	<Botton>JOIN US</Botton> <RedBotton>Find a Restaurant</RedBotton>
          	</BottonSection>
          </Wording>
  		</Container>
  	</Paper>)
}


export default JoinUs