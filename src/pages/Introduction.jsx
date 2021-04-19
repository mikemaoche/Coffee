import React, { Component, useState } from 'react'
import { Card, Image, Grid, Segment, Item, Header,Reveal } from 'semantic-ui-react'
import ProgressBar from '../components/ProgressBar'
import photo from '../images/myphoto.jpg';
import fr from '../images/fr-flag.png';
import nz from '../images/nz-flag.png';
import hk from '../images/hk-flag.png';
import silverFern from '../images/silver-fern.jpeg';

export default class Introduction extends Component{
    constructor(props){
        super(props)
        this.state={
            id:props.id,
            programingLanguages:[
                {language:"ReactJS", percent:0, max:95},
                {language:"SQL", percent:0, max:90},
                {language:"C#",percent:0, max:70},
                {language:"PHP", percent:0, max:90},
                {language:"CSS", percent:0, max:100},
                {language:"React Native",percent:0, max:80}
            ]
        }
        // this.handleDelete = this.handleDelete.bind(this)
        this.animateProgressBar=this.animateProgressBar.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.animateProgressBar);
    }

    animateProgressBar(){
            if (window.scrollY > 1080) {
                var newArray=[]
                this.state.programingLanguages.forEach((object) => {
                    let {language,percent,max} = object
                    while(percent < max){ 
                        percent+=1
                    }
                    newArray.push({language,percent,max})
                    
                })
                this.setState({ programingLanguages:newArray})
            } 
            
            if(window.scrollY < 1070){
                var array=[
                    {language:"ReactJS", percent:0, max:95},
                    {language:"SQL", percent:0, max:90},
                    {language:"C#",percent:0, max:70},
                    {language:"PHP", percent:0, max:90},
                    {language:"CSS", percent:0, max:100},
                    {language:"React Native",percent:0, max:80}]
                this.setState({programingLanguages:array})
            }
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
        const { programingLanguages } = this.state;
        
        return(
            <div id={this.state.id}>
                <Segment className='personalContainer'>
                    <Segment style={{width:"80%", margin:'10rem auto',zIndex:3}}>
                        <Header as="h1">About Me</Header>
                        <Grid>
                            <Grid.Column width={4}>
                                <Card fluid color='pink'>
                                    <Reveal animated='small fade'>
                                        <Reveal.Content visible>
                                            <Image src={silverFern} />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <Image  src={photo} ui wrapped={false}/>
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
                                <Header as='h1'>Introduction</Header>
                                <p> From a small island called 'Tahiti', I am driven and passionate about software development. Also, love to make it people feel comfortable.
                                    Enjoying social activities and interactions. 
                                </p>
                                <Header as='h2'>Programming Languages</Header>
                                <Header as='h5'>Confidence Level</Header>
                                { programingLanguages.map((object,index) => {
                                    const {language,percent} = object
                                    return (                    
                                        <div key={index}>
                                            <ProgressBar percent={percent} language={language}/>
                                        </div>
                                    )
                                    
                                })}
                            </Grid.Column>
                            <Grid.Column width={3} style={{textAlign:'justify', backgroundColor:'rgba(255,255,255,1)', margin:'1rem', borderRadius:'4px', height: 'fit-content'}}>
                                <Header as='h3'>Spoken Languages</Header>
                                <Item.Group divided>
                                    <Item>
                                        <Item.Image className='flag' size='tiny' src={fr} />
                                        <Item.Content verticalAlign='middle'>French</Item.Content>
                                    </Item>

                                    <Item>
                                        <Item.Image className='flag' size='tiny' src={nz} />
                                        <Item.Content verticalAlign='middle'>English</Item.Content>
                                    </Item>

                                    <Item>
                                        <Item.Image className='flag' size='tiny' src={hk} />
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