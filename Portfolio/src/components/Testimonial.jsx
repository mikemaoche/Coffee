import React from 'react'
import { Card, Icon, Image, Header, Divider } from 'semantic-ui-react'


const Testimonial = (props) =>
    <>
     <Card className='cardHighlight'>
        <Card.Content textAlign='left' header={<Icon name='left quote' />} />
        <Card.Content description={props.description} />
        <Card.Content extra>
            <Image src={props.src} size='tiny' circular />
            <Header>{props.name}</Header>
            <Header as='h4'><a href={props.linkedin}>View LinkedIn Profile</a></Header>
            <Divider></Divider>
            <Header textAlign='left' as='h3'>Job Position</Header>
            <Header textAlign='left' as='h5'>Previous: {props.prevPosition}<br/>Current: {props.currentPosition}</Header>
        </Card.Content>
    </Card>
    </>

export default Testimonial;