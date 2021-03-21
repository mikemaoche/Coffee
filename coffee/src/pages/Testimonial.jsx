import React, { Component } from 'react';
import {Form, Button, List, TextArea, Grid, Segment, Item, Image} from 'semantic-ui-react'
var randomWords = require('random-words');

class Testimonial extends Component {
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
            document.getElementById('table').style.display='block'
        }
        
    }

    onEnterPress(e){
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault()
            this.state.btnSubmit.current.handleSubmit(e)   
        }
    }

    render() {
        return (
            <Segment className='personalContainer'>
                        <Grid>
                            <Grid.Column width={4}>
                                <Form onSubmit={this.handleSubmit} ref={this.state.btnSubmit} >
                                    <Form.Field >
                                        <label className='customLabel'>Name</label>
                                        <input name='guest' placeholder='Enter name or leave it blank...' onChange={this.handleChange}/>
                                        <label className='customLabel' style={{textAlign:'left',marginTop:'1rem'}}>Leave Me A Comment!</label>
                                        <TextArea name='note' value={this.state.value} minLength={4}
                                        placeholder='E.g: Such a nice dev to work with...' onChange={this.handleChange} onKeyDown={this.onEnterPress}/>
                                    </Form.Field>
                                    <Button style={{display:'block', float:'right'}} type='submit' value='Submit'>Feed</Button>
                                </Form>
                            </Grid.Column>
                                <Segment id='table' style={{width:'60%', margin:'4rem auto', display:'none'}}>
                                    <Grid>
                                        <Grid.Column>
                                            <h1>Testimonials</h1>
                                            <List>
                                                {this.state.feedingList.map((arrayItem)=>{
                                                    return <List.Item>
                                                        <Item.Group divided>
                                                            <Item style={{border:'1px solid black', borderRadius:'4px'}}>
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
        );
    }
}

export default Testimonial;