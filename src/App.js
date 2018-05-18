import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Landing from "./components/Landing"
import EnterID from "./components/EnterID"
import Results from "./components/Results"
import Loading from "./components/Loading"
import NewResults from "./components/NewResults"
import Thankyou from "./components/Thankyou"

class App extends Component {
  constructor() {
    super()
    this.state = {
      render: "Landing"
    }
  }

  handleConfirm = e => {
    e.preventDefault()
    this.handleRender("Results")
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
        case "Results":
          return <Results handleRender={() => this.handleRender("Loading")} />
        case "Loading":
          return (
            <Loading handleRender={() => this.handleRender("newResults")} />
          )
        case "newResults":
          return (
            <NewResults handleRender={() => this.handleRender("thankyou")} />
          )
        case "thankyou":
          return <Thankyou handleRender={() => this.handleRender("Landing")} />
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
