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
            id:props.id
        }
    }

    render(){
        return(
            <div id={this.state.id}>
                <Segment vertical style={{padding:'0rem'}}>
                    <Container className='footer'>
                        <Grid inverted columns={3}>
                            <Grid.Column width={4}>
                                <Container textAlign='left'>
                                    <Header inverted as='h4' content='My Mission' />
                                    <p>
                                        Engaged to build the most innovative, inexpensive, and rapid Web Technologies to impact
                                        millions of users on their daily basis. I am looking to ease
                                        user's life by providing high availability, capacity, and performance based on offers and demands.
                                        
                                    </p>
                                </Container>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header inverted as='h4' textAlign='left' content='View Source Code on Github' />
                                <List link inverted style={{textAlign:'left'}}>
                                    <List.Item as='a' href='https://github.com/mikemaoche/RecipeFinder'>Recipe Finder</List.Item>
                                    <List.Item as='a' href='https://github.com/mikemaoche/ReduxOnBoarding'>Redux OnBoarding</List.Item>
                                    <List.Item as='a' href='https://github.com/mikemaoche/PHPWebsiteEnglishVersion'>Streaming Website</List.Item>
                                    <List.Item as='a' href='https://github.com/mikemaoche/Xmas'>Christmas Website</List.Item>
                                    <List.Item as='a' href='https://github.com/mikemaoche/PHPWebsiteEnglishVersion'>Automated Appartment Seeker</List.Item>
                                    
                                </List>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header inverted as='h4' content='Stay Connected With Me' />
                                <p>Follow me through social media. If you appreciate leave me a like !</p>
                            </Grid.Column>
                        </Grid>
                        <Divider inverted section />
                        <FollowAt links = {links} color={'rgba(230,130,220,1)'} hoverColor={'white'}/>
                        <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
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