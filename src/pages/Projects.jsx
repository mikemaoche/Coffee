import React, { Component } from 'react';
import { Segment,Header, Grid, Container } from 'semantic-ui-react';
import SliderCarousel from '../components/SliderCarousel';
import Video from '../components/Video';
import botVideo from '../videos/bot.mp4'
import christmasVideo from '../videos/Christmas.mkv'
import streamingWebsite from '../videos/Anime.mkv'
import img1 from "../images/projects/img1.png";
import img2 from "../images/projects/img2.png";
import img3 from "../images/projects/img3.png";
import img4 from "../images/projects/img4.png";
import img5 from "../images/projects/img5.png";
import img6 from "../images/projects/img6.png";
import img7 from "../images/projects/img7.png";

const images=[
    img1,img2,img3,img4,img5,img6,img7
]

class Projects extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.id
        }
    }
    render() {
        return (
            <div id={this.state.id}>
                <Segment className='revealContainer'  style={{ backgroundColor: 'rgba(255,120,255, 0)', minHeight:'1080px'}} text="true">
                    <Segment style={{width:"80%", margin:'10rem auto'}}>
                            <Header textAlign="left" as='h1' style={{marginBottom:'2rem'}}>Personal Projects</Header>
                        <Grid columns={2} divided>
                            <Grid.Row stretched>
                                <Grid.Column width={10}>
                                    <Video src={botVideo} type={'video/mp4'}  controls='controls'
                                        autoPlay={true} loop={true} muted={true} 
                                        style={{ width:'relative', borderRadius:'4px', boxShadow: '0px 0px 15px 3px #FFA6EA' }}/>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Container className="projectContainer" style={{width:'fit-content'}} textAlign="left" text>
                                            <Header as='h2'>Automated Appartment Seeker</Header>
                                            <p>
                                                It's my first bot creation where the purpose is to seek rental apartments at their lowest prices. 
                                                With a combination of JavaScript and NodeJS for the Web and Pupeeter for machine learning. The bot
                                                is programmed with predefined values although it can be improved in the future.
                                            </p>
                                        </Container>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                        <Grid columns={2} divided>
                            <Grid.Row stretched>
                                <Grid.Column width={8}>
                                    <Container className="projectContainer" style={{width:'fit-content'}} textAlign="right" text>
                                            <Header textAlign='right' as='h2'>Christmas Website</Header>
                                            <p>
                                                It's a cultural Web project that integrates Korean and Japanese cultures. The technology to build this website is based on
                                                JavaScript and JQUERY for the animation, and Bootstrap for the CSS style. In this project,
                                                I have learned how to use embedded videos and refresh my front-end knowledge. You would be immersed in a winter
                                                and cherry blossom season.
                                            </p>
                                        </Container>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Video src={christmasVideo} type={'video/mp4'}  controls='controls'
                                            autoPlay={true} loop={true} muted={true} 
                                            style={{ width:'relative', borderRadius:'4px', boxShadow: '0px 0px 15px 3px #FFA6EA' }}/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid columns={2} divided>
                            <Grid.Row stretched>
                                <Grid.Column width={10}>
                                    <Video src={streamingWebsite} type={'video/mp4'}  controls='controls'
                                            autoPlay={true} loop={true} muted={true} 
                                            style={{ width:'relative', borderRadius:'4px', boxShadow: '0px 0px 15px 3px #FFA6EA' }}/>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Container className="projectContainer" style={{width:'fit-content'}} textAlign="left" text>
                                            <Header as='h2'>Streaming Website</Header>
                                            <p>
                                            This is one of the most interesting projects that I was working on at the CEGEP of Vieux Montreal.
                                            Instead of doing an internship as the school was about to. They decided to let students work on a free project.
                                            It could be Web, Desktop, or mobile application. In my case, I went with an operational Website using PHP,
                                            DAO Architecture, MySQL database, and homemade CSS. 
                                            
                                            The Website contains two UI. One for the users and the
                                            other one for the admin. The passwords are secured by using HASH and SALT for encryption. We can upload,
                                            delete, comment, and review the video. Users can request a video that they want to see on streaming to the admin.
                                            A panel will indicate the queue. The admin can post announcements.
                                            </p>
                                        </Container>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                            <SliderCarousel images={images} />
                    </Segment>
                </Segment>
            </div>
        );
    }
}

export default Projects;