import React, { Component } from "react"
import logo from "../imgs/logo.png"

class Loading extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    let that = this.props.handleRender
    setTimeout(function() {
      that()
    }, 3400)
  }
  render() {
    return (
      <div className="loading">
        <h2>
          MLI is working to provide you with additional insights to help
          prioritize your HCPs.
        </h2>
        <h2>One moment.</h2>
        <div className="loadBorder">
          <div className="animate" />
        </div>
      </div>
    )
  }
}

export default Loading
