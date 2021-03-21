import React, { Component } from 'react'
import { Menu,Dropdown,Image } from 'semantic-ui-react'

export default class HomeMenu extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      activeItem:props.pageName
    }
    this.handleItemClick=this.handleItemClick.bind(this)
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name },this.props.handleIndex(name))
  }


  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu className='menuHeader' inverted>
          <Menu.Item
            name='Home'
            style={{backgroundColor:'rgba(255,255,255,1)'}}
            onClick={this.handleItemClick}
          >
            <Image alt='coffee' src='../coffee-logo.png' avatar />
          </Menu.Item>

          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name='Projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            name='Testimonials'
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            Testimonials
          </Menu.Item>
          <Menu.Item
            name='Contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          >
            Contact Me
          </Menu.Item>
          <Menu.Item
            name='SignUp'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
            position='right'
          >
            Sign Up
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}