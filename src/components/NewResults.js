import React, { Component } from "react"
import { render } from "react-dom"

const SortableItem = value => (
  <div className="item">
    <div id="name">
      <h4>{"Dr. " + value.name}</h4>
    </div>
    <div className="innerBox">
      <h3>34</h3>
      <h3>22</h3>
      <h3>42</h3>
    </div>
    <div className="dragIcon" />
  </div>
)

const SortableList = items => {
  return (
    <div id="itemList">
      <div id="columns">
        <p id="rank">Rank</p>
        <p id="hcp">HCP</p>
        <p>Decile</p>
        <p>Myr NRx</p>
        <p>Myr NRx Share</p>
      </div>
      <div id="rankContainer">
        <div className="rank">
          <h3>1</h3>
          <h3>2</h3>
          <h3>3</h3>
          <h3>4</h3>
        </div>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </div>
    </div>
  )
}

class NewResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        this.setState({ items: json.slice(0, 4) })
      })
      .then(res => console.log(this.state))
  }

  render() {
    return (
      <div id="results">
        <h1>New Sample Results</h1>
        <div id="itemList2">
          <div id="columns2">
            <p>Decile</p>
            <p>Myr NRx</p>
            <p>Myr NRx Share</p>
            <p>Predicted Myr NRx in Next Quarter</p>
            <p>Opportunity Decile</p>
            <p>Risk Decile</p>
            <p>Incremental NRx Next Detail</p>
          </div>
          <div id="rankContainer">
            <div className="rank">
              <h3>1</h3>
              <h3>2</h3>
              <h3>3</h3>
              <h3>4</h3>
            </div>
            {this.state.items.map((value, index) => (
              <div className="item2">
                <div id="name">
                  <h4>{"Dr. " + value.name}</h4>
                </div>
                <div className="innerBox2">
                  <h3>34</h3>
                  <h3>22</h3>
                  <h3>42</h3>
                  <h3>34</h3>
                  <h3>22</h3>
                  <h3>42</h3>
                  <h3>42</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={this.props.handleRender}>Yes</button>
        <button>No</button>
      </div>
    )
  }
}

// render(<NewResults />, document.getElementById("root"))

export default NewResults
