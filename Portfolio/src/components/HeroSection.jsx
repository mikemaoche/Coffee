import React from 'react'
import { Header } from 'semantic-ui-react'
import Video from './Video'
import bannerVideo from '../videos/video.mp4'

const HeroSection = (props) => {
    return (
        <div>
            <Header inverted className="bannerGreeting">Hello, my name is</Header>
            <Header inverted className="bannerName">Mike</Header>
            <Header inverted className="bannerRandomWord">I am</Header>
            <p className="randomWords">{props.randomWords()}</p>
            <Video src={bannerVideo} type={'video/mp4'} 
                autoPlay={true} loop={true} muted={true} style={{outline:'5px solid rgb(225,138,234)'}}
            />
        </div>
    )
}

export default HeroSection
