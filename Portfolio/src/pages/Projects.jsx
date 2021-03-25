import React, { Component } from 'react';
import { Segment,Header, Embed, Grid, Container } from 'semantic-ui-react';
import Slider from '../components/Slider';

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
                <Segment style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', minHeight:'1080px'}} text>
                    <Segment style={{width:"80%", margin:'10rem auto'}}>
                            <Header as='h1' style={{marginBottom:'2rem'}}>Projects</Header>
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
                                        <Header as='h2'>Header</Header>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                        </p>
                                    </Container>
                            </Grid.Column>
                        </Grid>

                        <Grid>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={6}>
                                <Container className="projectContainer" style={{width:'fit-content'}} textAlign="right" text>
                                        <Header as='h2'>Header</Header>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
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
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={10}>
                                <Embed
                                    
                                    autoplay={true}
                                    color='black'
                                    id='D0WnZyxp_Wo'
                                    source='youtube'
                                />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Container className="projectContainer" style={{width:'fit-content'}} textAlign="left" text>
                                        <Header as='h2'>Header</Header>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                        </p>
                                    </Container>
                            </Grid.Column>
                        </Grid>
                            <Slider />
                    </Segment>
                </Segment>
            </div>
        );
    }
}

export default Projects;