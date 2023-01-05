import React from 'react'
import MusicNoteicon from '@mui/icons-material/MusicNote'

const VideoFooter = ({channel, description, song}) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@{channel}</h3>
                <p>{ description }</p>
            </div>
        </div>
    )
}

export default VideoFooter
