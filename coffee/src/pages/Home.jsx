import React, { Component } from 'react'
import { Card, Image, Grid, Segment, Form, Button, List, Item, Message } from 'semantic-ui-react'

export default class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            skill:null,
            feedingList:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(e) {
        this.setState({skill: e.target.value});
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            feedingList:[...this.state.feedingList,this.state.skill]
        })
    }

    handleDelete(e){
        var shallowCopy= this.state.feedingList
        var index = shallowCopy.indexOf(e.target.value)

        if (index !== -1) {
            shallowCopy.splice(index, 1);
            this.setState({
                feedingList:shallowCopy
            })
        }
    }

    render(){
        return(
            <div>
                <Segment className='personalContainer'>
                    <Grid>
                        <Grid.Column width={3}></Grid.Column>
                        <Grid.Column width={4}>
                            <Card color='blue'>
                                <Image src='../myphoto.jpg' wrapped ui={false}/>
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
                        <Grid.Column  width={7} style={{textAlign:'justify', backgroundColor:'rgba(255,255,255,1)', margin:'1rem', borderRadius:'4px'}}>
                            <p> From a small island called 'Tahiti', I am driven and passionate about coding. Also, love to make it people feel comfortable.
                                Enjoying social activities and interactions. 
                            </p>
                        </Grid.Column>
                        </Grid>
                </Segment>
                <Segment className='personalContainer'>
                        <Grid>
                            <Grid.Column width={4}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Field >
                                        <label style={{textAlign:'left'}}>Leave Me A Note!</label>
                                        <input name='skill' value={this.state.value} 
                                        placeholder='E.g: Such a nice dev to work with...' onChange={this.handleChange}/>
                                    </Form.Field>
                                    <Button style={{display:'block'}} type='submit' value='Submit'>Feed</Button>
                                </Form>
                            </Grid.Column>
                        </Grid>
                        <Segment>
                            <Grid columns={2}>
                                <Grid.Column width={4} style={{textAlign:'center'}} >
                                    <List>
                                        {this.state.feedingList.map((skill)=>{
                                            return <List.Item>
                                                <Item.Group divided>
                                                    <Item>
                                                        <Image avatar src='/images/avatar/small/lindsay.png' />
                                                            <List.Content>
                                                                <List.Header as='a'>Lindsay</List.Header>
                                                                <List.Description>
                                                                {skill}
                                                                </List.Description>
                                                            </List.Content>
                                                        {/* <Item.Content><Message style={{width:'200px', marginRight: '20px'}}>{skill}</Message></Item.Content> */}
                                                        <Item.Content verticalAlign='middle'><Button style={{height:'100%'}} onClick={this.handleDelete} type="button" value={skill}>x</Button></Item.Content>
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