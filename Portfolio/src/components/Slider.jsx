import React, { Component } from 'react'
import {Image, Container} from 'semantic-ui-react'

export default class Slider extends Component {
    render() {
        return (
            <div>
                <Container className="slider">
                    <Image className="imageSlider" src='/hk-flag.png' size='medium' floated="left" />
                    <Image className="imageSlider" src='/hk-flag.png' size='medium' floated="left" />
                    <Image className="imageSlider" src='/hk-flag.png' size='medium' floated="left" />
                    <Image className="imageSlider" src='/hk-flag.png' size='medium' floated="left" />
                    <div style={{clear: 'both'}}></div>
                </Container>
                
            </div>
        )
    }
}
