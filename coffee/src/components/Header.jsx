import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

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
      <Menu className='menuHeader' inverted>
        <Menu.Item>
          <img src='../coffee-logo.png' />
        </Menu.Item>

        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='skills'
          active={activeItem === 'skills'}
          onClick={this.handleItemClick}
        >
          Skills
        </Menu.Item>

        <Menu.Item
          name='Contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
          Contact Me
        </Menu.Item>
      </Menu>
    )
  }
}