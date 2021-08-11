import React, { Component } from 'react';
import { Segment,Header, Image, Grid, Container } from 'semantic-ui-react';
import imgTrust from '../images/trust.png';
import imgCompassion from '../images/compassion.png';
import imgCourage from '../images/courage.png';

class Values extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.id
        }
    }
    
    render() {
        return (
            <div id={this.state.id}>
                <Segment  style={{ background: 'linear-gradient(0.25turn, #32174d, #4b0082, #32174d)', minHeight:'1080px'}} text="true">
                    <Segment style={{width:"80%", margin:'10rem auto', zIndex:3}}>
                            <Header data-aos='fade-right' as='h1' textAlign="left" style={{marginBottom:'2rem'}}>My Values</Header>
                        <Grid stackable>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={4}>
                                <Image data-aos='fade-down' className='shake' src={imgTrust} size='small' bordered />
                                <Container style={{width:'fit-content', marginTop:'2rem'}} textAlign="left" text>
                                        <Header data-aos='fade-down' as='h2'>Trust</Header>
                                        <p data-aos='fade-down'>
                                            If there is a trust installed, there is collaboration, which means mutual respect is present too.
                                        </p>
                                    </Container>
                            </Grid.Column>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={4}>
                                <Image data-aos='fade-down' className='shake' src={imgCourage} size='small' bordered />
                                <Container style={{width:'fit-content', marginTop:'2rem'}} textAlign="left" text>
                                        <Header data-aos='fade-down' as='h2'>Courage</Header>
                                        <p data-aos='fade-down'>
                                            It takes courage to fail again and again to move forward. Being brave to
                                            dare your ideas, open yourself to people, and accept upcoming difficulties.
                                        </p>
                                    </Container>
                            </Grid.Column>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={4}>
                                <Image data-aos='fade-down' className='shake' src={imgCompassion} size='small' bordered />
                                <Container style={{width:'fit-content', marginTop:'2rem'}} textAlign="left" text>
                                        <Header data-aos='fade-down' as='h2'>Compassion</Header>
                                        <p data-aos='fade-down'>
                                            The desire to take actions to help others in difficulty.
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

export default Values;