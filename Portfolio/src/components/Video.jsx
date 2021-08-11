import React from 'react'

const Video = (props) => {
    return (
        <>
            <video id={props.id} className={props.className} autoPlay={props.autoPlay} loop={props.loop} muted={props.muted} style={props.style} controls={props.controls}>
                <source src={props.src} type={props.type} />
                Your browser does not support the video tag.
            </video>
        </>
    )
}

export default Video
