import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

export default class ProgressBar extends Component {
  constructor(props){
      super(props)
      this.state={
          percent:props.percent,
          language:props.language
      }
  }


  render() {
    return (
      <div>
        <label>{this.state.language}</label>
        <Progress percent={this.state.percent} indicating />
      </div>
    )
  }
}