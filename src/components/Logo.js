import React, { Component } from "react";

class Logo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }
  }
  onClick () {
    this.setState({ clicked: true }, () => {
      setTimeout(() => this.setState({ clicked:false }), 0)
    })
  }
  render () {
    return (
      <svg
        id="logoSVG"
        onClick={this.onClick.bind(this)}
        className={this.state.clicked ? 'clicked' : 'run-animation'}
        width="100%"
        viewBox="0 0 166 166"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
      >
        <g transform="matrix(0.367077,0,0,0.367077,-127.815,-69.3978)">
          {/* <circle
            id="circle"
            cx="574.179"
            cy="415.036"
            r="222.856"
            fill="rgba(0,0,0,.9)"
            stroke="rgb(31,159,241)"
            strokeWidth="6.25px"
          /> */}
          <path id="circle" d="M351.323,415.036a222.856,222.856 0 1,0 445.712,0a222.856,222.856 0 1,0 -445.712,0" 
            fill="rgba(0,0,0,.9)"
            stroke="rgb(31,159,241)"
            strokeWidth="6.25px" />
          <g id="p2" transform="matrix(2.72422,0,0,2.72422,348.197,189.055)">
            <path
              d="M76.92,60.066C76.92,60.066 82.788,60.066 106.303,60.066C117.899,60.066 128.985,65.38 128.985,79.073C128.985,92.766 117.993,99.229 106.303,99.229C83.238,99.229 77.065,99.229 77.065,99.229"
              fill="none"
              stroke="rgb(31,159,241)"
              strokeWidth="2.67px"
              strokeLinecap="butt"
            />
          </g>
          <g id="p1" transform="matrix(2.72422,0,0,2.72422,348.197,189.055)">
            <path
              d="M76.997,58.813L76.997,131.572"
              fill="none"
              stroke="rgb(31,159,241)"
              strokeWidth="2.67px"
              strokeLinecap="butt"
            />
          </g>
          <g
            id="f3"
            transform="matrix(-2.72422,3.33621e-16,-3.33621e-16,-2.72422,765.478,618.558)"
          >
            <path
              d="M101.396,78.83L51.778,78.83"
              fill="none"
              stroke="rgb(31,159,241)"
              strokeWidth="2.67px"
              strokeLinecap="butt"
            />
          </g>
          <g
            id="f2"
            transform="matrix(-2.72422,-3.33621e-16,3.33621e-16,-2.72422,770.624,426.15)"
          >
            <path
              d="M104.293,43.516L50.77,43.516"
              fill="none"
              stroke="rgb(31,159,241)"
              strokeWidth="2.67px"
              strokeLinecap="butt"
            />
          </g>
          <g
            id="f1"
            transform="matrix(-2.72422,-3.33621e-16,3.33621e-16,-2.72422,630.739,633.23)"
          >
            <path
              d="M51.821,120.751L51.894,42.295"
              fill="none"
              stroke="rgb(31,159,241)"
              strokeWidth="2.67px"
              strokeLinecap="butt"
            />
          </g>
        </g>
      </svg>
    )
  }
} 

export default Logo
