import React from 'react'
import { Header, Button } from 'semantic-ui-react'
import Video from './Video'

const HeroSection = (props) => {
    return (
        <div>
            <Header inverted className="bannerTitle">Hello, my name is</Header>
            <Video />
            <Button style={{position:'absolute', top:'80%',left:'42%', width:'200px'}} color="red">Hire Me</Button>
        </div>
    )
}

export default HeroSection
