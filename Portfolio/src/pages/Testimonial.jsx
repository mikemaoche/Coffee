import React, { Component } from 'react';
import {Form, Button, List, TextArea, Grid, Segment, Item, Image, Header} from 'semantic-ui-react'
var randomWords = require('random-words');

class Testimonial extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.id,
            note:'',
            guest:'',
            feedingList:[],
            btnSubmit: React.createRef()
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onEnterPress = this.onEnterPress.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    verifyString(comments){
        if(comments.length > 0) return true
        return false
    }

    handleSubmit(event){
        event.preventDefault();
        var tempGuest= this.state.guest
        if(this.state.guest === ''){
            tempGuest= randomWords()+ Math.floor(Math.random() * 10000)
        } 

        if(this.verifyString(this.state.note)){
            this.setState({
                feedingList:[...this.state.feedingList,{guest:tempGuest, note:this.state.note}]
            })
            document.getElementById('table').style.display='block'
        }
        
    }

    onEnterPress(event){
        if(event.keyCode === 13 && event.shiftKey === false) {
            this.state.btnSubmit.current.handleSubmit(event);
        }
    }

    render() {
        return (
            <div id={this.state.id}>
                <Segment style={{ minHeight:'1080px',backgroundColor:'rgba(0,0,0,0.1)', borderRadius:'none'}}>
                    <Segment style={{width:"80%", margin:'10rem auto',zIndex:3}}>
                        <Grid>
                            <Grid.Column width={4}>
                                <Form onSubmit={this.handleSubmit} ref={this.state.btnSubmit} >
                                    <Form.Field >
                                        <Header as="h1" textAlign='left'>Testimonials</Header>
                                        <label className='customLabel' style={{textAlign:'left'}}>Name</label>
                                        <input name='guest' placeholder='Enter name or leave it blank...' onChange={this.handleChange}/>
                                        <label className='customLabel' style={{textAlign:'left',marginTop:'1rem'}}>Leave Me A Comment!</label>
                                        <TextArea name='note' value={this.state.value} minLength={4}
                                        placeholder='E.g: Such a nice dev to work with...' onChange={this.handleChange} onKeyDown={this.onEnterPress}/>
                                    </Form.Field>
                                    <Button style={{display:'block', float:'right'}} type='submit' value='Submit'>Feed</Button>
                                </Form>
                            </Grid.Column>
                            <Segment id='table' style={{width:'40%', margin:'4rem auto', display:'none'}}>
                                <Grid>
                                    <Grid.Column>
                                        <List>
                                            {this.state.feedingList.map((arrayItem)=>{
                                                return <List.Item>
                                                    <Item.Group divided>
                                                        <Item style={{border:'1px solid black', borderRadius:'4px', textAlign:'left'}}>
                                                            <Image style={{ margin:'1rem'}} avatar src='./nz-flag.png' />
                                                            <List.Content style={{ margin:'0.1rem'}}>
                                                                <List.Header style={{ margin:'0.3rem 0.5rem'}} as='a'>{arrayItem.guest}</List.Header>
                                                                <List.Description style={{  margin:'0.2rem 0.5rem'}}>{arrayItem.note}</List.Description>
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
                        </Grid>
                    </Segment>
                </Segment>
            </div>
        );
    }
}

export default Testimonial;