import React, { Component } from 'react'
import userimage from '../Image/Rose.jpg';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <p>I am the Footer Component</p>
        <img src={userimage} style = {{height :'20rem'}} alt="userImage" />
      </div>
    )
  }
}
