import React, { Component } from 'react';
import { Segment,Header, Image, Grid, Container } from 'semantic-ui-react';
import imgDesign from '../images/design.jpg';
import imgAPI from '../images/api.jpg';
import imgADS from '../images/ads.jpg';

class Services extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.id
        }
    }
    
    render() {
        return (
            <div id={this.state.id}>
                <Segment  style={{ backgroundColor: '#450099', minHeight:'1080px'}} text="true">
                    <Segment style={{width:"70%", margin:'10rem auto', zIndex:3}}>
                            <Header as='h1' textAlign="left" style={{marginBottom:'2rem'}}>My Services</Header>
                        <Grid>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={4}>
                                <Image  className='shake' src={imgDesign} size='small' bordered />
                                <Container style={{width:'fit-content', marginTop:'2rem'}} textAlign="left" text>
                                        <Header as='h2'>Web Design</Header>
                                        <p>
                                            Create colorful, practical, and ethical layers using latest Web technologies.
                                        </p>
                                    </Container>
                            </Grid.Column>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={4}>
                                <Image className='shake' src={imgADS} size='small' bordered />
                                <Container style={{width:'fit-content', marginTop:'2rem'}} textAlign="left" text>
                                        <Header as='h2'>Advertising</Header>
                                        <p>
                                            Promote your company services and products via networking, 
                                            Solid SEO referencing, social media, etc.
                                        </p>
                                    </Container>
                            </Grid.Column>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={4}>
                                <Image className='shake' src={imgAPI} size='small' bordered />
                                <Container style={{width:'fit-content', marginTop:'2rem'}} textAlign="left" text>
                                        <Header as='h2'>APIs Integration</Header>
                                        <p>
                                           Multiple Web services can be implemented into your project.
                                        </p>
                                    </Container>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Segment>
            </div>
        );
    }
}

export default Services;