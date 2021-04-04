import React, { Component } from 'react'
import {Image, Container} from 'semantic-ui-react'
import Slider from 'infinite-react-carousel';

export default class SliderCarousel extends Component {
    render() {
        return (
            <div>
                <Container>
                  <Slider
                    className="slider"
                    autoplay slidesToShow={5} 
                    arrows={false} 
                    pauseOnHover={true}
                  >
                    <div>
                      <Image className="imageSlider" src='/hk-flag.png' size='medium' />
                    </div>
                    <div>
                      <Image className="imageSlider" src='/fr-flag.png' size='medium' />
                    </div>
                    <div>
                      <Image className="imageSlider" src='/nz-flag.png' size='medium' />
                    </div>
                    <div>
                      <Image className="imageSlider" src='/hk-flag.png' size='medium' />
                    </div>
                    <div>
                      <Image className="imageSlider" src='/hk-flag.png' size='medium' />
                    </div>
                    <div>
                      <Image className="imageSlider" src='/fr-flag.png' size='medium' />
                    </div>
                    <div>
                      <Image className="imageSlider" src='/nz-flag.png' size='medium' />
                    </div>
                    <div>
                      <Image className="imageSlider" src='/hk-flag.png' size='medium' />
                    </div>
                  </Slider>
                </Container>
                
            </div>
        )
    }
}
