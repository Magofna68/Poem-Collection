import React, { Component } from 'react';
import { init } from 'ityped';
// import { Hidden } from '@material-ui/core';

export default class ITyped extends Component {
  componentDidMount() {
    const myElement = document.querySelector('#myElement')
    init(myElement, {
      // disabledBackTyping: false,
      // showCursor: true,
      strings: ['Poem #1.', 'Poem ll Awaits.', 'Start Tomorrow with a Poem Today.'],
      // typeSpeed: 85,
      // backDelay: 500,
      loop: true,
      // cursorChar: "|",
      // placeholder: "Check out these featured Poems:"
    })
  }
  render() {
    return <div id="myElement"></div>
  }
}
