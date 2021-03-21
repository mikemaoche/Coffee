import React from 'react'
import { Header } from 'semantic-ui-react'
import Video from './Video'

const HeroSection = (props) => {
    return (
        <div>
            <Header inverted className="bannerTitle">Having a sip of coffee helps you to perform better</Header>
            <Video />
        </div>
    )
}

export default HeroSection
