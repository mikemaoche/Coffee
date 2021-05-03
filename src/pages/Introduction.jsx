import React, { Component } from 'react'
import { Card, Image, Grid, Segment, Item, Header,Reveal } from 'semantic-ui-react'
import ProgressBar from '../components/ProgressBar'
import photo from '../images/myphoto.jpg';
import fr from '../images/fr-flag.png';
import nz from '../images/nz-flag.png';
import hk from '../images/hk-flag.png';
import silverFern from '../images/silver-fern.jpeg';

const self = window

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

        this.animateProgressBar=this.animateProgressBar.bind(this);
    }

    componentDidMount(){
        self.addEventListener('scroll', this.animateProgressBar);
    }

    animateProgressBar(){
            if (self.scrollY > 1080) {
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
            
            if(self.scrollY < 1070){
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

    render(){
        const { programingLanguages } = this.state;
        
        return(
            <div id={this.state.id}>
                <Segment className='personalContainer'>
                    <Segment style={{width:"90%", margin:'10rem auto',zIndex:3}}>
                        <Header as="h1">Profile</Header>
                        <Grid stackable>
                            <Grid.Column width={4}>
                                <Card fluid color='pink'>
                                    <Reveal animated='small fade'>
                                        <Reveal.Content visible>
                                            <Image src={silverFern} />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <Image src={photo} ui wrapped={false}/>
                                        </Reveal.Content>
                                    </Reveal>
                                    <Card.Content>
                                    <Card.Header>Mike Mao Che</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Software Developer</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Graduated student from Tasman.
                                    </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column  width={8} style={{textAlign:'justify', backgroundColor:'rgba(255,255,255,1)', margin:'1rem', borderRadius:'4px', height: 'fit-content'}}>
                                <Header as='h1'>About Me</Header>
                                <p> Nice to meet you! My name is Mike and I am from an exotic island called Tahiti. Since I was a child, I was exposed to different
                                    technology. Especially, gaming consoles.
                                    Later, during my time in high school, I met an incredible friend that was very passionate about programming.
                                </p>
                                <p>
                                    I will always remember that day when
                                    he made me discovered the power of programming by creating executables on PC and running games in a graphing calculator. It was fun and awesome. 
                                    So, from it, I decided this is the path that I have to take. 
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