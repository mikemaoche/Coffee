import { React, useState} from 'react'
import { Image, Container, Button, Icon } from 'semantic-ui-react'
import Slider from 'infinite-react-carousel';

// onMouseOver={() => setScale('huge')} onMouseOut={() => setScale('medium')} 
const SliderCarousel = (props) => {
  const [opacity,setOpacity] = useState(false)

      return (
          <div>
              <Container>
                <Slider
                  className="slider"
                  autoplay slidesToShow={3}
                  centerMode={false}
                  dots={false}
                  arrows={true} 
                  pauseOnHover={true}
                  nextArrow={<Button onMouseOut={()=> setOpacity(false)} onMouseOver={()=> setOpacity(true)} style={opacity? arrowsHover: arrows}> <Icon style={icons} name='angle right' size='large'/></Button>}
                  prevArrow={<Button onMouseOut={()=> setOpacity(false)} onMouseOver={()=> setOpacity(true)} style={opacity? arrowsHover: arrows}> <Icon style={icons} name='angle left' size='large' /></Button>}
                >
                  {props.images.map((src,index) => {
                    return (
                      <div key={index}>
                        <Image onClick={(event) => props.handleOpen(event.target.src)} 
                          src={src} height={300} width={300} />
                      </div>
                    )
                  })}
                </Slider>
              </Container>
              
          </div>
        )
    }

const arrows = {
  color:'#E03B8B',
  backgroundColor:'#FFFFFF',
  padding:0,
  margin:0,
  opacity:0.4,
  borderRadius:'12px',
}

const arrowsHover = {
  color:'#E03B8B',
  backgroundColor:'#FFFFFF',
  padding:0,
  margin:0,
  opacity:1,
  borderRadius:'12px',
}

const icons = {
  margin:0,
}

export default SliderCarousel
