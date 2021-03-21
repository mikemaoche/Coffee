import React from 'react';

const Map = (props) => {
    return(
            <div>
                <iframe 
                    width={props.width}
                    height={props.height}
                    style={props.style}
                    loading={props.loading}
                    src={props.src}
                    allowFullScreen>
                </iframe>
            </div>
        )
}
export default Map;


{/* <Map 
    width="600"
    height="450"
    style={{border:0}}
    loading="lazy"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBngV46U18-YJCQfouurYvV90f7I-hSmXU
        &q=Space+Needle,Seattle+WA"/> */}
