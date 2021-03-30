import React from 'react'
import { Header } from 'semantic-ui-react'
import Video from './Video'

const HeroSection = (props) => {
    console.log(props);
    
    return (
        <div>
            <Header inverted className="bannerGreeting">Hello, my name is</Header>
            <Header inverted className="bannerName">Mike</Header>
            <Header inverted className="bannerRandomWord">I am</Header>
            <p className="randomWords">{props.radomWords()}</p>
            <Video />
        </div>
    )
}

export default HeroSection
