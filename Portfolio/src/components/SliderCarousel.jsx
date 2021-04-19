import React, { useState } from 'react'
import {Image, Container} from 'semantic-ui-react'
import Slider from 'infinite-react-carousel';

// onMouseOver={() => setScale('huge')} onMouseOut={() => setScale('medium')} 
// ()=> <ModalForSlider src={src} />
const SliderCarousel = (props) => {
  const [scale, setScale] = useState('medium');
  
        return (
            <div>
                <Container>
                  <Slider
                    className="slider"
                    autoplay slidesToShow={3} 
                    centerMode={true}
                    arrows={false} 
                    pauseOnHover={true}
                  >
                    {props.images.map((src,index) => {
                      return (
                        <div key={index}>
                          <Image
                          src={src} size={scale} 
                          />
                        </div>
                      )
                    })}
                  </Slider>
                </Container>
                
            </div>
        )
    }
export default SliderCarousel
