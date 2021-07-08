import React from 'react'
import { Header } from 'semantic-ui-react'
import Video from './Video'
import bannerVideo from '../videos/video.mp4'


const HeroSection = (props) => {
    return (
        <div id='banner' style={{background:'rgb(0,0,0)'}}>
            <Header inverted className="bannerGreeting personalFont">Welcome, my name is Mike.</Header>
            <Header inverted className="bannerIam personalFont">The technologies that are used to create this Website</Header>
            <p className="randomWords personalFont">{props.word}</p>
            <Video src={bannerVideo} type={'video/mp4'} className='videoBanner'
                autoPlay={true} loop={true} muted={true} style={{outline:'4px solid rgba(240,130,240,1)'}}
            />
        </div>
    )
}

export default HeroSection
