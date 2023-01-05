import React, { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faRegular, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import restaurant from '../../assets/images/restaurant.png';
import VideoFooter from "./video_footer";
import VideoSidebar from "./video_side_bar";
import useElementOnScreen from '../../hooks/useElementOnScreen'
import VideoPlayButton from "./video_play_button";

 
 const CardBox = tw.div`my-8 bg-white rounded-lg md:mx-2  w-full  border-solid border-slate-300 border lg:p-2`;
 const CardHead = tw.div`inline-block w-full py-2 float-right`;
 const CardTitle = tw.div`content-center inline-block align-middle text-current  px-2 font-roboto`;
 const CardMoreIcon = tw.div`inline-block float-right pr-2`;
 const CardHeadImg =tw.div`inline-block float-left px-2 `;
 const CardBody = tw.div`relative mx-2`;
 const CardTextDesc = tw.div`m-2`;

 const RestaurantName = tw.div`text-2xl font-semibold`;
 const RestaurantDesc = tw.div`my-2 `;
 const RestaurantSection = tw.div`text-lg `;




const Video = ({ url, channel, description, song, likes, messages, shares }) => {
 


  const [playing, setPlaying] = useState(true);
  const videoRef = useRef(null);

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
  }
  const isVisibile = useElementOnScreen(options, videoRef)
  

  const onVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
       videoRef.current.play();
        setPlaying(!playing);
      }
  };

  useEffect(() => {
    if (isVisibile) {
      if (!playing) {        
        videoRef.current.play();
        setPlaying(true)
      }
    }
    else {
      if (playing) {        
        videoRef.current.pause();
        setPlaying(false)
      }
    }
  }, [isVisibile])


  return (
    <div className="video">
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
                 <video className="video_player" loop preload="true" ref={videoRef} onClick={onVideoClick} src={url}></video>
                </CardBody>
                <CardTextDesc >
                  <RestaurantSection>
                     <RestaurantName>Hornets Nest Grille</RestaurantName>
                     <RestaurantDesc>the cutest hidden gem in New York #nyc#hiddengem#nyclife#travel#restaurant#fyp</RestaurantDesc>
                  </RestaurantSection>
                </CardTextDesc>
              </CardBox>
     
    </div>
  );
};
export default Video;