import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Landing from "./components/Landing"
import EnterID from "./components/EnterID"
import Results from "./components/Results"

class App extends Component {
  constructor() {
    super()
    this.state = {
      render: "Landing"
    }
  }

  handleConfirm = e => {
    e.preventDefault()
    this.handleRender("IDconfirmed")
  }

  handleRender = render => {
    this.setState({
      render
    })
  }

  render() {
    const component = () => {
      switch (this.state.render) {
        case "Landing":
          return <Landing handleRender={this.handleRender} />
        case "enterID":
          return <EnterID handleConfirm={this.handleConfirm} />
        case "IDconfirmed":
          return <Results />
        default:
          return <Landing handleRender={this.handleRender} />
      }
    }
    return <div id="app">{component()}</div>
  }
  c
}

export default App
//
// use intersect logic, then exchange css classNames
