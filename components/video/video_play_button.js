import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VideoPlayButton = ({onVideoClick}) => {
    return (
        <div className="video_play_button">
            <PlayArrowIcon onClick={onVideoClick} className="video_play_icon" />
        </div>
    )
}

export default VideoPlayButton
