import './App.css'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home';
 import Contact from './pages/Contact';
// import Skills from './pages/Skills';
import Footer from './components/Footer'
import {Container} from 'semantic-ui-react'


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      pageName:'Home',
      components:{
        'Home':Home,
        'Contact':Contact
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
          <Header pageName={'profile'} handleIndex={this.handleIndex} />
          <Container style={{ marginTop: '1rem', width:'98%' }}>
            {this.renderPage()}
          </Container>
          <Footer></Footer>
      </div>
    )
  }
}

