import './App.css'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import Header from './components/Header'
import Introduction from './pages/Introduction';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer'
import {Container} from 'semantic-ui-react'
import HeroSection from './components/HeroSection';
import Testimonial from './pages/Testimonial';


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      pageName:'Home',

    }
    this.handleIndex=this.handleIndex.bind(this)
  }

  handleIndex(id){
    // var node = document.getElementById(id)
    // var headerHeight = 55

    this.setState({pageName:id})
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    
    // node.scrollIntoView(true);
    
    // var scrolledY = window.scrollY;
    
    // if(scrolledY){
    //   window.scroll(0, scrolledY - headerHeight)
    // 
    // }
  }

  renderPage(){
    var TAG = this.state.components
    return React.createElement(TAG[this.state.pageName]);
  }

  render(){

    return (
      <div className='App'>
          <Header id="Home" pageName={this.state.pageName} handleIndex={this.handleIndex} />
          <HeroSection className="heroSection" />
            <Container style={{ flexGrow: 1,width:'100%'}}>
              <Introduction id="Introduction"/>
              <Projects id="Projects" />
              <Testimonial id="Testimonials"/>
              <Contact id="Contact"/>
          </Container>
          <Footer/>
      </div>
    )
  }
}

