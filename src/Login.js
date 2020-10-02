import React, { Component } from 'react';
import background from './assets/janko-ferlic-sfL_QOnmy00-unsplash.jpg';

export default class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          background: `url(${background}) center center fixed`,
          minHeight: '1000px',
          minWidth: '100%',
        }}
      >
        <div>d;lfkja;lsdkjfa;lkjsdf;alksjfa;lksjfls;kdfjd;flkajsdflkajsdfl;akjflkdjflk</div>
        <label>Email Address: </label>
        <input type='text' />
        <button>Try our Books Free!</button>
        <div>Only new members are eligible for this offer.</div>
      </div>
    );
  }
}
