import './App.css'
import $ from 'jquery'; 
import React, { Component} from 'react'
import {Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
import Introduction from './pages/Introduction';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer'
import HeroSection from './components/HeroSection';
import Spinner from './components/Spinner';
import Planet from './components/Planet';
import Services from './pages/Services';


const self = window

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      pageName:'Home',
      isLoading:true,
      wordsToDescribeMe:[
        'a fast-learner', 'a developer', 'adaptable',
        'passionate about programming','a team player'
      ],
      word:"",
      isScrolling:false
    }
    this.handleIndex=this.handleIndex.bind(this)
    this.randomWords=this.randomWords.bind(this)
    this.handleScroll=this.handleScroll.bind(this)
  }

  componentDidMount() {
    self.addEventListener('scroll', this.handleScroll);
    this.randomWords();
    setTimeout(() => { 
          $(".preload").fadeOut(300)
          this.setState({isLoading: false},
            ()=>{
              if(!this.state.isLoading) {
                $(".preload").fadeIn(300)
              }

            }
          )
    }, 1500);
  }

  handleScroll(event) {
    if (self.scrollY === 0) this.setState({ isScrolling: false }) 
    if (self.scrollY > 0 ) this.setState({ isScrolling:true})
  }

  randomWords(){
    var words = this.state.wordsToDescribeMe
    var word = words[Math.floor(Math.random() * words.length)]
    this.setState({word})
  }

  handleIndex(id){ 
    this.setState({pageName:id, isScrolling:true})
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  renderPage(){
    var TAG = this.state.components
    return React.createElement(TAG[this.state.pageName]);
  }

  render(){
    
    let render= this.state.isLoading? <Spinner/>:
    <div>
        <Header id="Home" pageName={this.state.pageName} handleIndex={this.handleIndex} />
        <HeroSection className="heroSection" handleIndex={this.handleIndex} word={this.state.word}/>
          <Container style={{ flexGrow: 1,width:'100%'}}>
            <Planet isScrolling={this.state.isScrolling} />
            <Introduction id="Introduction"/>
            <Projects id="Projects" />
            <Services id="Services"/>
            {/* <Testimonial id="Testimonials"/> */}
            <Contact id="Contact"/>
        </Container>
        <Footer id="Footer" />
    </div>

    return (
      <div className='App'>
          {render}
      </div>
    )
  }
}

