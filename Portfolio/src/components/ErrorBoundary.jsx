import React, { Component } from 'react'
import { Header } from 'semantic-ui-react';

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        hasError: false,
        error:''
      };
    }
  
    componentDidCatch(error, info) {      
      // Display fallback UI
      console.log('hey',error);
      
      this.setState({ hasError: true, error });
    }
  
    render() {
      
      if (this.state.hasError) {
        // You can render any custom fallback UI
      return <Header as='h1'>Error found: {this.state.error}</Header>;
      }
      return this.props.children;
    }
  }