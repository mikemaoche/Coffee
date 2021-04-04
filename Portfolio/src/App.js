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
import Testimonial from './pages/Testimonial';
import Spinner from './components/Spinner';
import Cube from './components/Cube3D'



export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      pageName:'Home',
      isLoading:true,
      wordsToDescribeMe:[
        'freaking awesome', 'a developer', 'open-minded',
        'passionate about coding','kind','enjoying working with people'
      ]
    }
    this.handleIndex=this.handleIndex.bind(this)
    this.radomWords=this.radomWords.bind(this)
  }



  componentDidMount() {
    
    setTimeout(() => { 
          $(".preload").fadeOut(500)
          this.setState({isLoading: false},
            ()=>{
              if(!this.state.isLoading) {
                $(".preload").fadeIn(2000)
              }

            }
          )
    }, 1000);
  }

  radomWords(){
    var words= this.state.wordsToDescribeMe
    return words[Math.floor(Math.random() * words.length)]
  }

  handleIndex(id){ 
    this.setState({pageName:id})
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
      <HeroSection className="heroSection" handleIndex={this.handleIndex} radomWords={this.radomWords}/>
        <Container style={{ flexGrow: 1,width:'100%'}}>
          <Cube/>
          <Introduction id="Introduction"/>
          <Projects id="Projects" />
          <Testimonial id="Testimonials"/>
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

