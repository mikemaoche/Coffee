import Aos from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';
import React, { Component, lazy, Suspense } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Spinner from './components/Spinner';
const Introduction = lazy(() => import( './pages/Introduction'));
const Contact  = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import( './pages/Projects'));
const Values = lazy(() => import('./pages/Values'));
// const Planet = lazy(() => import('./components/Planet'))

const self = window

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      pageName:'Home',
      isLoading:true,
      wordsToDescribeMe:[
        'HTMl5/CSS3/JS/jQuery','ReactJS/Semantic UI/NodeJS','AOS/EmailJS/FiberJS/GoogleMap API',
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
    setInterval(() => {
      this.randomWords();
    }, 3000); 

    setTimeout(() => { 
          $(".preload").fadeOut(50)
          this.setState({isLoading: false},
            ()=>{
              if(!this.state.isLoading) {
                $(".preload").fadeIn(50)
              }
            }
          )
    }, 1500);
  }

  componentDidUpdate(){
    Aos.init({ duration: 1000 })
  }
  handleScroll(event) {
    event.preventDefault()
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
      <Suspense fallback={<p>Loading</p>}>
          <Header id="Home" pageName={this.state.pageName} handleIndex={this.handleIndex} />
          <HeroSection className="heroSection" handleIndex={this.handleIndex} word={this.state.word}/>
            <Container style={{ flexGrow: 1,width:'100%'}}>
              {/* <Planet isScrolling={this.state.isScrolling} /> */}
              <Introduction id="Introduction"/>
              <Projects id="Projects" />
              <Values id="Values"/>
              <Contact id="Contact"/>
          </Container>
          <Footer id="Footer" />
      </Suspense>
    </div>

    return (
      <div className='App'>
          {render}
      </div>
    )
  }
}

