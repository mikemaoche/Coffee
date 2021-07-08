import React, { Component } from 'react';
import { Container, Grid, Header, Segment, Dimmer,  Image} from 'semantic-ui-react';
import SliderCarousel from '../components/SliderCarousel';
import Video from '../components/Video';
import nintendoswitch from "../images/projects/nintendo-switch.jpg";
import whiskey from "../images/projects/glass-of-whiskey.jpg";
import bullet from "../images/projects/bullet.jpg";
import dragonball from "../images/projects/dragon-ball.jpg";
import led from "../images/projects/led.jpg";
import dog from "../images/projects/lego-dog.jpg";
import recipe1 from "../images/projects/recipe-finder.jpg";
import recipe2 from "../images/projects/recipe-finder2.jpg";
import recipe3 from "../images/projects/recipe-finder3.jpg";

import streamingWebsite from '../videos/Anime.mkv';
import botVideo from '../videos/bot.mp4';
import christmasVideo from '../videos/Christmas.mkv';

const images=[
    nintendoswitch, whiskey, bullet, dragonball, led, dog,
    recipe1,recipe2,recipe3
]

class Projects extends Component {ß
    constructor(props){
        super(props)
        this.state={
            id:props.id,
            active:false,
            src:null
        }
    }


    handleOpen = (src) => this.setState({ active: true, src })
    handleClose = () => this.setState({ active: false })


    render() {
        return (
            <div id={this.state.id}>
                <Segment style={{ backgroundColor: 'rgba(255,120,255, 0)', minHeight:'1080px'}} text="true">
                    <Segment style={{width:"90%", margin:'10rem auto'}}>
                            <Header data-aos='fade-down' textAlign="left" as='h1' style={{marginBottom:'2rem'}}>Personal Projects</Header>
                        <Grid columns={2} divided stackable>
                            <Grid.Row stretched>
                                <Grid.Column data-aos='fade-right' width={8}>
                                    <Video src={botVideo} type={'video/mp4'}  controls='controls'
                                        autoPlay={false} loop={true} muted={true} 
                                        style={{ width:'relative', borderRadius:'4px', boxShadow: '0px 0px 15px 3px #FFA6EA' }}/>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Container className="projectContainer" style={{width:'fit-content'}} textAlign="left" text>
                                            <Header data-aos='fade-right' as='h2'>Automated Appartment Seeker</Header>
                                            <p data-aos='fade-left'>
                                                The purpose is to automate the process of seeking rental apartments at their lowest prices. 
                                                Technologies used: JavaScript, NodeJS, and Pupeeter for machine learning.
                                            </p>
                                        </Container>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        
                        <Grid columns={2} divided stackable>
                            <Grid.Row stretched>
                                <Grid.Column width={8}>
                                    <Container className="projectContainer" style={{width:'fit-content'}} textAlign="right" text>
                                            <Header data-aos='fade-right' textAlign='right' as='h2'>Christmas Website</Header>
                                            <p data-aos='fade-left'>
                                                I built this website for my friend to let him keep and visualize his personal photos using a carousel. In this project,
                                                I have learned how to use embedded videos and refresh my front-end knowledge.
                                                Technologies used: HTML, CSS, JavaScript, jQuery, and Bootstrap. 
                                            </p>
                                        </Container>
                                </Grid.Column>
                                <Grid.Column data-aos='fade-left' width={8}>
                                    <Video src={christmasVideo} type={'video/mp4'}  controls='controls'
                                            autoPlay={false} loop={true} muted={true} 
                                            style={{ width:'relative', borderRadius:'4px', boxShadow: '0px 0px 15px 3px #FFA6EA' }}/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid columns={2} divided stackable>
                            <Grid.Row stretched>
                                <Grid.Column data-aos='fade-right' width={8}>
                                    <Video src={streamingWebsite} type={'video/mp4'}  controls='controls'
                                            autoPlay={false} loop={true} muted={true} 
                                            style={{ width:'relative', borderRadius:'4px', boxShadow: '0px 0px 15px 3px #FFA6EA' }}/>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Container className="projectContainer" style={{width:'fit-content'}} textAlign="left" text>
                                            <Header as='h2' data-aos='fade-right'>Streaming Website</Header>
                                            <p data-aos='fade-left'>
                                            This is one of the most interesting projects that I was working on at the Cegep of Vieux Montreal.
                                            Instead of doing an internship as the school was about to. They decided to let students work on a free project.
                                            It could be Website, Desktop application, or mobile application. 
                                            
                                            It was my dream to own a Streaming Website where I could upload my content.
                                            </p>
                                            <p data-aos='fade-left'>
                                            The passwords are secured by using HASH and SALT for encryption. Technologies used: XAMP Server, HTML, PHP, DAO, MySQL, and homemade CSS.
                                            </p>
                                        </Container>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid columns={1} divided stackable>
                            <Grid.Column>
                                <Container className="projectContainer" style={{width:'fit-content'}} text>
                                    <Header data-aos='fade-right' as='h1'>Latest News</Header>
                                    <p data-aos='fade-left'>
                                        Creating Blender Projects...
                                        I currently work on mobile project using React Native, NativeBase, Back4App and Figma.
                                    </p>
                                </Container>
                                <SliderCarousel handleOpen={this.handleOpen} images={images} />
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Segment>
                {this.state.active ?   
                    <Dimmer active={this.state.active} onClickOutside={this.handleClose} page>
                        <Image src={this.state.src} size='huge' />
                    </Dimmer>
                    : 
                    <div/>
                }
            </div>
        );
    }
}

export default Projects;