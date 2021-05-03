import React, { Component } from 'react';
import { Segment,Header, Image, Grid, Container } from 'semantic-ui-react';
import imgDesign from '../images/design.png';
import imgAPI from '../images/api.png';
import imgMarketing from '../images/marketing.png';

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
                    <Segment style={{width:"80%", margin:'10rem auto', zIndex:3}}>
                            <Header as='h1' textAlign="left" style={{marginBottom:'2rem'}}>My Services</Header>
                        <Grid stackable>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={4}>
                                <Image  className='shake' src={imgDesign} size='small' bordered />
                                <Container style={{width:'fit-content', marginTop:'2rem'}} textAlign="left" text>
                                        <Header as='h2'>Web Design</Header>
                                        <p>
                                            Create solid visual, intuitive, and user friendly using latest Web technologies.
                                        </p>
                                    </Container>
                            </Grid.Column>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={4}>
                                <Image className='shake' src={imgMarketing} size='small' bordered />
                                <Container style={{width:'fit-content', marginTop:'2rem'}} textAlign="left" text>
                                        <Header as='h2'>Marketing</Header>
                                        <p>
                                            Promote your company services and products via links, 
                                            strong SEO, emails, keywords optimisation and more.
                                        </p>
                                    </Container>
                            </Grid.Column>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={4}>
                                <Image className='shake' src={imgAPI} size='small' bordered />
                                <Container style={{width:'fit-content', marginTop:'2rem'}} textAlign="left" text>
                                        <Header as='h2'>APIs Integration</Header>
                                        <p>
                                           Multiple services such as Google, Youtube, Facebook API, and more can be integrated into a tailor project.
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