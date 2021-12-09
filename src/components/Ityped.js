import React, { Component } from 'react'
import { init } from 'ityped'
// import { Hidden } from '@material-ui/core'

export default class ITyped extends Component {
  componentDidMount() {
    const myElement = document.querySelector('#myElement')
    init(myElement, {
      disabledBackTyping: false,
      showCursor: false,
      strings: ['Elevate Your Gains.', 'Greatness Awaits.', 'Tomorrow Starts Today.'],
      typeSpeed: 85,
      backDelay: 1500,
      loop: true,
      cursorChar: "|",
    })
  }
  render() {
    return <div id="myElement"></div>
  }
}
