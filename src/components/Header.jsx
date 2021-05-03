import React, { Component } from 'react'
import { Menu,Image, Button } from 'semantic-ui-react'
import logo from '../images/logo.png';

const styles ={
  hireMe:{
    position:'absolute', zIndex:10, top:'42%',left:'43.5%', width:'200px'
  },
  logo:{
    borderRadius:'none', backgroundColor:'rgba(0,0,0,0)'
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
      menu:false
    }
    this.handleItemClick=this.handleItemClick.bind(this)
    this.changeBgMenu=this.changeBgMenu.bind(this)
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name},this.props.handleIndex(name)) 
  }

  changeBgMenu(){
    var menu=false;
    
    if(window.scrollY >=55){
      menu=true
    } else {
      menu=false
    }
    
    this.setState({ menu})
  }
  
  render() {
    window.addEventListener('scroll',this.changeBgMenu);
    const { activeItem } = this.state
    
    return (
      <div id={this.state.id}>
        <Button name='Home' className="logo" style={styles.logo} onClick={this.handleItemClick} as="a">
          <Image alt='logo' src={logo} />
        </Button>
        <Menu className={this.state.menu ? 'menuHeaderVisible':'menuHeader'} inverted stackable>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name='Introduction'
            active={activeItem === 'Introduction'}
            onClick={this.handleItemClick}
          >
            Introduction
          </Menu.Item>

          <Menu.Item
            name='Projects'
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            name='Services'
            active={activeItem === 'Services'}
            onClick={this.handleItemClick}
          >
            Services
          </Menu.Item>
          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          >
            Contact Me
          </Menu.Item>
        </Menu>
        <Button name='Contact' onClick={this.handleItemClick} className='hireMe' style={styles.hireMe} color="pink">Hire Me</Button>
        <Button className="buttonFooter" name='Footer' onClick={this.handleItemClick} style={styles.buttonFooter}
          circular icon='arrow alternate circle down' size="big" color="purple"/>
      </div>
    )
  }
}