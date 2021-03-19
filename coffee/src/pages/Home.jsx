import React, { Component } from 'react'
import { Card, Image, Grid, Segment, Form, Button, List, Item, TextArea } from 'semantic-ui-react'
import ProgressBar from '../components/ProgressBar'
var randomWords = require('random-words');

export default class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            note:'',
            guest:'',
            feedingList:[],
            btnSubmit: React.createRef()
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onEnterPress = this.onEnterPress.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    verifyString(comments){
        if(comments.length > 0)
            return true
        return false
    }
    
    handleSubmit(e){
        e.preventDefault();
        var tempGuest= this.state.guest

        if(this.state.guest==''){
            tempGuest= randomWords()+ Math.floor(Math.random() * 10000)
        } 

        if(this.verifyString(this.state.note)){
            this.setState({
                feedingList:[...this.state.feedingList,{guest:tempGuest, note:this.state.note}]
            })
        }
    }

    onEnterPress(e){
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            console.log(this.state.btnSubmit.current);
            this.state.btnSubmit.current.handleSubmit(e);
            
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
        return(
            <div>
                <Segment className='personalContainer'>
                    <Grid>
                        <Grid.Column width={4}>
                            <Card color='blue'>
                                <Image src='../myphoto.jpg' wrapped ui={false} />
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
                <Segment className='personalContainer'>
                        <Grid>
                            <Grid.Column width={4}>
                                <Form onSubmit={this.handleSubmit} ref={this.state.btnSubmit} >
                                    <Form.Field >
                                        <label>Name</label>
                                        <input name='guest' placeholder='Enter name or leave it blank...' onChange={this.handleChange}/>
                                        <label style={{textAlign:'left',marginTop:'1rem'}}>Leave Me A Note!</label>
                                        <TextArea name='note' value={this.state.value} minLength={4}
                                        placeholder='E.g: Such a nice dev to work with...' onChange={this.handleChange} onKeyDown={this.onEnterPress}/>
                                    </Form.Field>
                                    <Button style={{display:'block', float:'right'}} type='submit' value='Submit'>Feed</Button>
                                </Form>
                            </Grid.Column>
                        </Grid>
                        <Segment style={{width:'60%', margin:'4rem auto'}}>
                            <Grid>
                                <Grid.Column width={4} style={{textAlign:'center'}} >
                                    <List>
                                        {this.state.feedingList.map((arrayItem)=>{
                                            console.log(arrayItem);
                                            
                                            return <List.Item>
                                                <Item.Group divided>
                                                    <Item>
                                                        <Image avatar src='/images/avatar/small/lindsay.png' />
                                                            <List.Content>
                                                                <List.Header as='a'>{arrayItem.guest}</List.Header>
                                                                <List.Description>
                                                                {arrayItem.note}
                                                                </List.Description>
                                                            </List.Content>
                                                        {/* <Item.Content><Message style={{width:'200px', marginRight: '20px'}}>{note}</Message></Item.Content> */}
                                                        {/* <Item.Content verticalAlign='middle'><Button style={{height:'100%'}} onClick={this.handleDelete} type="button" value={arrayItem.note}>x</Button></Item.Content> */}
                                                    </Item>
                                                </Item.Group>
                                            </List.Item>
                                        })}
                                    </List>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Segment>
            </div>
        )
    }
}