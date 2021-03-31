import React, { Component } from 'react'
import { Card, Image, Grid, Segment, Item, Header,Reveal } from 'semantic-ui-react'
import ProgressBar from '../components/ProgressBar'

export default class Introduction extends Component{
    constructor(props){
        super(props)
        this.state={
            id:props.id
        }
        // this.handleDelete = this.handleDelete.bind(this)
    }


    // handleDelete(e){
    //     var shallowCopy= this.state.feedingList
    //     var index = shallowCopy.indexOf(e.target.value)

    //     if (index !== -1) {
    //         shallowCopy.splice(index, 1);
    //         this.setState({
    //             feedingList:shallowCopy
    //         })
    //     }
    // }

    render(){
        return(
            <div id={this.state.id}>
                <Segment className='personalContainer'>
                    <Segment style={{width:"80%", margin:'10rem auto'}}>
                        <Header as="h1">About Me</Header>
                        <Grid>
                            <Grid.Column width={4}>
                                <Card fluid color='pink'>
                                    <Reveal animated='small fade'>
                                        <Reveal.Content visible>
                                            <Image src='../silver-fern.jpeg' />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <Image  src='../myphoto.jpg' ui wrapped={false}/>
                                        </Reveal.Content>
                                    </Reveal>
                                    
                                    <Card.Content>
                                    <Card.Header>Mike Mao Che</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Intern Software Developer</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Mike is a graduated student from Tasman.
                                    </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column  width={8} style={{textAlign:'justify', backgroundColor:'rgba(255,255,255,1)', margin:'1rem', borderRadius:'4px', height: 'fit-content'}}>
                                <h1>Introduction</h1>
                                <p> From a small island called 'Tahiti', I am driven and passionate about software development. Also, love to make it people feel comfortable.
                                    Enjoying social activities and interactions. 
                                </p>
                                <h2>Programming Languages<h5>Confidence Level</h5></h2>
                                <ProgressBar percent={95} language="ReactJS"/>
                                <ProgressBar percent={90} language="SQL"/>
                                <ProgressBar percent={70} language="C#"/>
                                <ProgressBar percent={90} language="PHP"/>
                                <ProgressBar percent={100} language="CSS"/>
                            </Grid.Column>
                            <Grid.Column width={3} style={{textAlign:'justify', backgroundColor:'rgba(255,255,255,1)', margin:'1rem', borderRadius:'4px', height: 'fit-content'}}>
                                <h3>Spoken Languages</h3>
                                <Item.Group divided>
                                    <Item>
                                    <Item.Image size='tiny' src='../fr-flag.png' />
                                    <Item.Content verticalAlign='middle'>French</Item.Content>
                                    </Item>

                                    <Item>
                                    <Item.Image size='tiny' src='../nz-flag.png' />
                                    <Item.Content verticalAlign='middle'>English</Item.Content>
                                    </Item>

                                    <Item>
                                    <Item.Image size='tiny' src='../hk-flag.png' />
                                    <Item.Content content='Cantonese' verticalAlign='middle' />
                                    </Item>
                                </Item.Group>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Segment>
            </div>
        )
    }
}