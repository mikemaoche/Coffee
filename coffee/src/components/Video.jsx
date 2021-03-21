import React from 'react'
import coffeeVideo from '../videos/coffee-video.mp4'

const Video = () => {
    return (
        <>
            <video autoPlay loop muted>
                <source src={coffeeVideo} type='video/mp4' />
            </video>
        </>
    )
}

export default Video
