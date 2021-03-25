import React from 'react'
import { Header, Button } from 'semantic-ui-react'
import Video from './Video'

const HeroSection = (props) => {
    return (
        <div>
            <Header inverted className="bannerGreeting">Hello, my name is</Header>
            <Header inverted className="bannerName">Mike</Header>
            <Header inverted className="bannerRandomWord">I am {}</Header>
            <Video />
            <Button style={{position:'absolute', top:'80%',left:'42%', width:'200px'}} color="red">Hire Me</Button>
        </div>
    )
}

export default HeroSection
