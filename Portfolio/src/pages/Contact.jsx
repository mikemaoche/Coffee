import React, { Component } from 'react';
import { Segment, Grid, Form, Button, TextArea, Header, List, Container} from 'semantic-ui-react'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.id
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e){

    }

    handleSubmit(e){

    }


    render() {
        
        return (
            <div id={this.state.id}>
                <Segment style={{ backgroundColor:'rgba(230,150,240,1)'}}>
                    <Segment style={{width:"80%", margin:'10rem auto'}}>
                        <Grid>
                            <Grid.Column width={4}>
                                <Form onSubmit={this.handleSubmit} ref={this.state.btnSubmit} >
                                    <Form.Field style={{textAlign:'left'}} >
                                        <Header as='h1'>Contact</Header>
                                        <label>Email</label>
                                        <input name='email' placeholder='Enter your email...' onChange={this.handleChange}/>
                                        <label style={{marginTop:'1rem'}}>Message</label>
                                        <TextArea name='note' value={this.state.value} minLength={4}
                                        placeholder='Message here...' onChange={this.handleChange} onKeyDown={this.onEnterPress}/>
                                    </Form.Field>
                                    <Button style={{display:'block', float:'right', margin:'1rem 0rem'}} type='submit' value='Submit'>Send</Button>
                                </Form>
                                <Container style={{clear:'both', textAlign:'left', padding:'1rem', border:'1px solid gray', borderRadius:'4px'}}>
                                    <List>
                                        <List.Item icon='phone' content='021 078 7288' />
                                        <List.Item
                                        icon='mail'
                                        content={<a href='mailto:maochemike@yahoo.fr'>maochemike@yahoo.fr</a>}
                                        />
                                        <List.Item
                                        icon='linkify'
                                        content={<a href='https://www.linkedin.com/in/mike-mao-che-595218163/'>LinkedIn profile</a>}
                                        />
                                        <List.Item icon='marker' content='Auckland, NZ' />
                                    </List>
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7725469858756!2d174.75614031543472!3d-36.84792307993885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f1f295562d%3A0xb2cc8c575c4a2e30!2sVictoria%20Street%20West%2C%20Auckland%20Central%2C%20Auckland!5e0!3m2!1sen!2snz!4v1616196885956!5m2!1sen!2snz" width="800" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Segment>
            </div>
        );
    }
}

export default Contact;