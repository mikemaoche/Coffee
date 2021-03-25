import React from 'react'
import bannerVideo from '../videos/video.mp4'

const Video = () => {
    return (
        <>
            <video autoPlay loop muted style={{outline:'4px solid rgba(240,130,240,1)'}}>
                <source src={bannerVideo} type='video/mp4' />
            </video>
        </>
    )
}

export default Video
