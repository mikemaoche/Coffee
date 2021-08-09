import React, { Component } from 'react';
import Testimonial from '../components/Testimonial'
import { Segment, Grid, Header } from 'semantic-ui-react';
import images from '../images/index'

class Testimonials extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.id,
            testimonials:[
                {name:'Konstantin Khvan', linkedin:'https://www.linkedin.com/in/konstantinkhvan/', prevPosition:'Intern Developer at MVP Studio', currentPosition:'Software Developer at Debitsuccess by Xplor', src:images[0].kon, description:'Mike was one of my colleagues at MVP Studio. He was always one of the best interns, always keen to learn and help anyone who needs his help. That’s why Mike managed to establish friendly relationship with everyone in the team. During my time at MVP Studio it was really amazing to see how Mike growing up as a professional software developer. I highly recommend Mike to do any IT related job and hope we have a chance to work together again in the future.' },
                // {name:'Dene Collin', linkedin:'https://www.linkedin.com/in/dene-collison-b89b2b17/', prevPosition:'N/A', currentPosition:'Head of Quality Assurance & Operations at Tasman International Academies', src:'', description:'' },
                {name:'Ru Ng', linkedin:'https://www.linkedin.com/in/ruying-ng-15208380/', prevPosition:'Software Developer at MVP Studio', currentPosition:'Software Developer at Datacom', src:images[0].ru, description:'Mike is a real team player. He has helped build main features for MVP Studio\'s skill exchange web platform and recruitment mobile platform. He\'s done an awesome job in mentoring new interns and has even gone the extra mile to create guides on how to set up the development environment with ReactJS to help new interns kickstart their on boarding tasks.' },
                {name:'Irene Yang', linkedin:'https://www.linkedin.com/in/ireneyang0908/', prevPosition:'Former Administrator at Dominion English School', currentPosition:'Administrator at Unitec Institute of Technology', src:images[0].irene, description:'I have known Mike for 2 years since he was a student at Dominion English School. He was always recognized for his consistent diligence and his congenial personality which allowed him to maintain good relationships with everyone including his peers, teachers, and all the school staff. I witnessed that Mike was praised by the Director of Studies for his excellent academic performance. Even after he graduated from Dominion English School, he stayed in touch with me and when I told him about my side-project, a website redesign project for a company I was freelancing, he voluntarily provided his advice and suggestions on the aspect of UX design and website responsiveness. I was touched and impressed by Mike’s genuine heart for helping others, his innovative insight, and his advanced IT knowledge. I would have no hesitation recommending Mike for a position in IT engineering or web development.' },
                {name:'Brett Sommerville', linkedin:'https://www.linkedin.com/in/brett-somerville-3b8b8342/', prevPosition:'English Teacher at Dominion English School', currentPosition:'English Teacher at Language Elevator', src:images[0].brett, description:'Mike was a student in my Conversation, General English and Jobseeker classes when I was a teacher at Dominion English School. He was always an active and fun participant in class activities and made significant contributions especially in conversation classes. I also observed his ability to get on particularly well with a wide range of students from many different countries. This made him a popular student amongst other students and teachers.'},
                {name:'Gayathri Vijay', linkedin:'https://www.linkedin.com/in/gayathri-vijay/', prevPosition:'Intern Developer at MVP Studio', currentPosition:'Software Developer at iCOS LIVE', src:images[0].defaultImage, description:'They say a leader is someone who can inspire and motivate people to dream and achieve for more. That is exactly who Mike has been. Mike was my mentor when I did Internship with Industry Connect. He helped me in analyzing the projects given to us and also directed me positively through out the internship. He even gave me tips for time management. His strength of character also reflected in his warm, and approachable nature. I never had to think twice before approaching him to discuss about my doubts in the internship process. I found Mike as a very helpful person with always smile on his face. He is a great team player. He has been a true mentor, in every sense of the term.                ' },
                {name:'Thai Ong', linkedin:'https://www.linkedin.com/in/thaiong96/', prevPosition:'Intern Developer at MVP Studio', currentPosition:'Software Developer at CreditWorks', src:images[0].defaultImage, description:'Three years ago, the first day I joined MVP Studio, my first impression about Mike was an active and energetic team player. That time, I did not know that he would be my best friend who went along with me on the very first day of my career. Although we started almost together, Mike started showing his great responsibility and an attention to details by focusing on questioning to any unclear minorities which may impact the outcome. From the same starting point, we have grown and seen each other efforts and successes. Indeed, I should thank him more than I did to all the lessons that I still use them today. Hence, I would have no hesitation in recommeding Mike to any potential developer position.' },
            ]

        }
    }


    
    render() {
        return (
            <div id={this.state.id}>
                <Segment style={{ background: 'linear-gradient(90deg, rgba(62,8,117,1) 0%, rgba(78,7,148,1) 35%, rgba(78,7,148,1) 100%)', minHeight:'1080px'}} text="true">
                    <Segment style={{width:"90%", margin:'10rem auto'}}>
                        <Header data-aos='fade-down' textAlign="left" as='h1' style={{marginBottom:'2rem'}}>Testimonials</Header>
                        <Grid>
                            {this.state.testimonials.map((testi)=>{
                                return ( 
                                    <Grid.Column width={4}>
                                        <Testimonial name={testi.name} linkedin={testi.linkedin} prevPosition={testi.prevPosition} currentPosition={testi.currentPosition} description={testi.description} src={testi.src} />
                                    </Grid.Column>
                                )
                            }
                            )}
                        </Grid>
                    </Segment>
                </Segment>
            </div>
        );
    }
}

export default Testimonials;