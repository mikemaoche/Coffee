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
// import Testimonial from './pages/Testimonial';
import Spinner from './components/Spinner';
import Planet from './components/Planet';
import Services from './pages/Services';



export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      pageName:'Home',
      isLoading:true,
      wordsToDescribeMe:[
        'a fast-learner', 'a developer', 'open-minded',
        'passionate about coding','creative','enjoying working with people'
      ],
      isScrolling:false
    }
    this.handleIndex=this.handleIndex.bind(this)
    this.randomWords=this.randomWords.bind(this)
    this.handleScroll=this.handleScroll.bind(this)
  }



  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    setTimeout(() => { 
          $(".preload").fadeOut(200)
          this.setState({isLoading: false},
            ()=>{
              if(!this.state.isLoading) {
                $(".preload").fadeIn(300)
              }

            }
          )
    }, 1000);
  }

  handleScroll(event) {
    if (window.scrollY === 0) this.setState({ isScrolling: false }) 
    if (window.scrollY > 0 ) this.setState({ isScrolling:true})
  }

  randomWords(){
    var words= this.state.wordsToDescribeMe
    return words[Math.floor(Math.random() * words.length)]
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
        <HeroSection className="heroSection" handleIndex={this.handleIndex} randomWords={this.randomWords}/>
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

