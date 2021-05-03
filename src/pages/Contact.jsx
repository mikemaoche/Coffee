import React, { Component } from 'react';
import { Segment, Grid, Form, Button, TextArea, Header, List, Container} from 'semantic-ui-react'
import emailjs from 'emailjs-com';

const SERVICE_ID='service_cpg043h'
const TEMPLATE_ID='template_y28f1pn'
const USER_ID='user_GyM444whvcCHDqhrAJqzm'

const mailFormat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.id,
            subject:'',
            email: null,
            message:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.isFormValid =this.isFormValid.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.name]:event.target.value },
            () =>
            {
                if(this.state.subject.length >= 4) 
                    document.getElementsByName('subject')[0].style.background="rgba(0,255,0,0.2)"
                if(mailFormat.test(String(this.state.email).toLowerCase())) 
                    document.getElementsByName('email')[0].style.background="rgba(0,255,0,0.2)"
                if(this.state.message.length > 0)
                    document.getElementsByName('message')[0].style.background="rgba(0,255,0,0.2)"
            }
            
        )
    }

    isFormValid(){
        if(this.state.subject.length < 4) return {isValid: false, field:'subject'};
        if(!mailFormat.test(String(this.state.email).toLowerCase())) return {isValid: false, field:'email'};
        if(this.state.message.length < 1) return {isValid: false, field:'message'};

        return {isValid:true};
    }

    clearForm(){
        document.getElementsByName('subject')[0].style.background="none"
        document.getElementsByName('email')[0].style.background="none"
        document.getElementsByName('message')[0].style.background="none"
    }

    handleSubmit(event){
        event.preventDefault();
        
        if(this.isFormValid().isValid){
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
            this.clearForm();
            event.target.reset();
            
        } else {
            document.getElementsByName(this.isFormValid().field)[0].style.background="rgba(255,0,0,0.2)"
        }
            
        
    }

    render() {
        
        return (
            <div id={this.state.id}>
                <Segment style={{ backgroundColor:'rgba(45, 52, 54,1.0)'}}>
                    <Segment style={{width:"80%", margin:'10rem auto', zIndex:3}}>
                        <Grid stackable>
                            <Grid.Column width={4}>
                                <Form onSubmit={this.handleSubmit} ref={this.state.btnSubmit} >
                                    <Form.Field style={{textAlign:'left'}} >
                                        <Header as='h1'>Contact</Header>
                                        <label>Subject</label>
                                        <input onChange={this.handleChange} name='subject' placeholder='Enter your subject...'/>
                                        <label style={{marginTop:'1rem'}}>Email</label>
                                        <input onChange={this.handleChange} name='email' placeholder='Enter your email...'/>
                                        <label style={{marginTop:'1rem'}}>Message</label>
                                        <TextArea onChange={this.handleChange} name='message'
                                        placeholder='Message here...'/>
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
                            <Grid.Column width={12}>
                                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7725469858756!2d174.75614031543472!3d-36.84792307993885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f1f295562d%3A0xb2cc8c575c4a2e30!2sVictoria%20Street%20West%2C%20Auckland%20Central%2C%20Auckland!5e0!3m2!1sen!2snz!4v1616196885956!5m2!1sen!2snz" width="100%" height="485px" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Segment>
            </div>
        );
    }
}

export default Contact;