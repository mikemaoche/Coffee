import React, { Component } from 'react';
import { Segment,Header, Embed, Grid, Container } from 'semantic-ui-react';
import SliderCarousel from '../components/SliderCarousel';

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
                <Segment className='revealProjects'  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', minHeight:'1080px'}} text>
                    <Segment style={{width:"80%", margin:'10rem auto'}}>
                            <Header as='h1' style={{marginBottom:'2rem'}}>Personal Projects</Header>
                        <Grid>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={5}>
                                <Embed
                                    
                                    autoplay={true}
                                    color='black'
                                    id='D0WnZyxp_Wo'
                                    source='youtube'
                                />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Container className="projectContainer" style={{width:'fit-content'}} textAlign="left" text>
                                        <Header as='h2'>Automated Appartment Seeker</Header>
                                        <p>
                                            It's my first bot creation where the purpose is to seek rental apartments at their lowest prices. 
                                            With a combination of JavaScript and NodeJS for the Web and Pupeeter for machine learning. The bot
                                            is looking for the desired Website.
                                        </p>
                                    </Container>
                            </Grid.Column>
                        </Grid>

                        <Grid>
                            <Grid.Column width={8}>
                                <Container className="projectContainer" style={{width:'fit-content'}} textAlign="right" text>
                                        <Header as='h2'>Christmas Website</Header>
                                        <p>
                                            It's a cultural Web project that integrates Korean and Japanese cultures. The technology to build this website is based on
                                            JavaScript and JQUERY for the animation, and Bootstrap for the CSS style. In this project,
                                            I have learned how to use embedded videos and refresh my front-end knowledge. You would be immersed in a winter
                                            and cherry blossom season. Enjoy the visit!
                                        </p>
                                    </Container>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Embed
                                    autoplay={true}
                                    color='black'
                                    id='D0WnZyxp_Wo'
                                    source='youtube'
                                />
                            </Grid.Column>
                        </Grid>
                        <Grid>
                            <Grid.Column width={10}>
                                <Embed
                                    
                                    autoplay={true}
                                    color='black'
                                    id='D0WnZyxp_Wo'
                                    source='youtube'
                                />
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
                        </Grid>
                            <SliderCarousel />
                    </Segment>
                </Segment>
            </div>
        );
    }
}

export default Projects;