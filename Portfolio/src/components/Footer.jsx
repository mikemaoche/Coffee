import React, {Component} from 'react'
import { Grid, Header, List, Divider, Segment, Container } from 'semantic-ui-react'
import FollowAt from "react-social-media-follow";

const links = [
      'https://twitter.com/MaoChe1',
      'https://www.facebook.com/maochemike',
      'https://www.youtube.com/channel/UCOPg0E_8NruOo3Xo_gfoojw',
      'https://www.instagram.com/mike.codetech/',
    ];


export default class Footer extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
                <Segment vertical style={{padding:'0rem'}}>
                    <Container className='footer'>
                        <Grid divided inverted stackable>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 1' />
                            <List link inverted>
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 2' />
                            <List link inverted>
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 3' />
                            <List link inverted>
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header inverted as='h4' content='Footer Header' />
                            <p>
                            Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
                        </Grid.Column>
                        </Grid>

                        <Divider inverted section />
                        <FollowAt links = {links} color={'rgba(230,130,220,1)'} hoverColor={'white'}/>
                        <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Me
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        )
    }
}