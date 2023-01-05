import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MessageIcon from '@mui/icons-material/Message'
import ShareIcon from '@mui/icons-material/Share' 

const VideoSidebar = ({likes, shares, messages}) => {
    const [liked, setLiked] = useState(false)
    return (
        <div className="videoSidebar">
            <div className="videoSidebar_button">
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={() => { setLiked(!liked) } }/>
                ) : (
                        <FavoriteBorderIcon fontSize="large" onClick={() => { setLiked(!liked) } } />
                )}
                <p>{ liked? likes + 1: likes }</p>
            </div>
            <div className="videoSidebar_button">
                <MessageIcon fontSize="large" />
                <p>{ messages }</p>
            </div>
            <div className="videoSidebar_button">
                <ShareIcon fontSize="large" />
                <p>{ shares }</p>
            </div>
        </div>
    )
}

export default VideoSidebar
