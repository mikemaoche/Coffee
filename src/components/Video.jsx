import React from 'react'

const Video = (props) => {
    return (
        <>
            <video autoPlay={props.autoPlay} loop={props.loop} muted={props.muted} style={props.style} controls={props.controls}>
                <source src={props.src} type={props.type} />
            </video>
        </>
    )
}

export default Video
