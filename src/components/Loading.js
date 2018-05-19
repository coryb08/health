import React, { Component } from "react"

class Loading extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    let that = this.props.handleRender
    setTimeout(function() {
      that()
    }, 4000)
  }
  render() {
    return (
      <div className="loading">
        <div id="blueHeader" />
        <div id="rh">Amy Smith</div>
        <div id="rsh">Astellas ID: AM0808424</div>
        <div id="headerLogo" />
        <h2>
          MLI is working to provide you with additional insights to help
          prioritize your HCPs.
        </h2>
        <h2>One moment.</h2>
        <div id="loadingIcon" />
        <h1>0%</h1>
        <div className="loadBorder">
          <div className="animate" />
        </div>
        <h1>100%</h1>
      </div>
    )
  }
}

export default Loading
