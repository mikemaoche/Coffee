import React, { Component } from 'react';
import { Button, Image, Menu } from 'semantic-ui-react';
import logo from '../images/logo.png';

const styles ={
  hireMe:{
    position:'absolute', zIndex:4, top:'43%',left:'43.5%', width:'200px'
  },
  logo:{
    position: 'absolute', top:0, left:'40%', zIndex:4
  },
  buttonFooter:{
    position:'fixed', zIndex:10, bottom:'5%', right:'2%'
  }
}

export default class HomeMenu extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      id:props.id,
      activeItem:props.pageName,
      menu:false,
      prevScrollY: window.pageYOffset
    }
    this.handleItemClick=this.handleItemClick.bind(this)
    this.changeBgMenu=this.changeBgMenu.bind(this)
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name},this.props.handleIndex(name)) 
  }

  changeBgMenu(){
    let currScrollY = window.pageYOffset
    if(this.state.prevScrollY >= currScrollY) document.getElementsByClassName('menuHeader')[0].style.top = '0px'
    else document.getElementsByClassName('menuHeader')[0].style.top = '-50px'
    this.setState({prevScrollY: currScrollY})
  }
  
  render() {
    window.addEventListener('scroll',this.changeBgMenu);
    const { activeItem } = this.state
    
    return (
      <div id={this.state.id}>
        <Menu className='menuHeader' inverted pointing secondary stackable>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
            position='left'
          >
            Home
          </Menu.Item>

          <Menu.Item
            name='Introduction'
            active={activeItem === 'Introduction'}
            onClick={this.handleItemClick}
          >
            My Story
          </Menu.Item>

          <Menu.Item
            name='Projects'
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}
          >
            View My Projects
          </Menu.Item>
          <Menu.Item
            name='Values'
            active={activeItem === 'Values'}
            onClick={this.handleItemClick}
          >
            My Values
          </Menu.Item>
          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
            position='right'
          >
            Contact Me
          </Menu.Item>
        </Menu>
        <Button name='Contact' onClick={this.handleItemClick} className='hireMe' style={styles.hireMe} color="purple">Contact Me</Button>
        <Button name='Footer'  className="buttonFooter" onClick={this.handleItemClick} style={styles.buttonFooter}
          circular icon='arrow alternate circle down' size="big" color="purple"/>
          <Image style={styles.logo} alt='logo' src={logo} size='medium'/>
      </div>
    )
  }
}