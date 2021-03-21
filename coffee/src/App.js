import './App.css'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home';
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
      components:{
        'Home':Home,
        'Contact':Contact,
        'Projects': Projects
      }
    }
    this.handleIndex=this.handleIndex.bind(this)
  }
  
  handleIndex(name){
    this.setState({pageName:name})
  }

  renderPage(){
    var TAG = this.state.components
    return React.createElement(TAG[this.state.pageName]);
  }

  render(){
    //let component = this.state.pageName != 'profile' ? this.renderPage() : null
    return (
      <div className='App'>
          <Header pageName={'Home'} handleIndex={this.handleIndex} />
          <HeroSection className="heroSection" />
          <Container style={{ flexGrow: 1}}>
            {/* {this.renderPage()} */}
            <Home/>
            <Projects/>
            <Testimonial/>
            <Contact/>
          </Container>
          <Footer/>
      </div>
    )
  }
}

