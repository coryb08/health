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
        <div id="blueHeader" />
        <div id="rh">Amy Smith</div>
        <div id="rsh">Astellas ID: AM0808424</div>
        <div id="headerLogo" />
        <h1>HCP Prioritization with New MLI Insights</h1>
        <div id="itemList2">
          <div id="columns2">
            <p>Decile</p>
            <p> Prior 6 month Myr NRx</p>
            <p>Prior 6 month Myr NRx Share</p>
            <p>MLI Opportunity Flag</p>
            <p>MLI Predicted Myrbetriq NRx for FQ1</p>
            <p>MLI NRx Response Score</p>
            <p>MLI Market Share Risk Bracket</p>
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
                  <div id="hContainer">
                    <h3>34</h3>
                    <h3>22</h3>
                    <h3>42</h3>
                  </div>
                  <div id="pContainer">
                    <p>MYRBETRIQ Projected 48% increase</p>
                    <p>Xtandi Second Position Strong</p>
                    <p>High Call Responsive</p>
                    <p>TBD</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2>
          Do the new MLI Insights change your perception of HCP prioritization?
        </h2>
        <button onClick={this.props.handleRender}>Yes</button>
        <button onClick={this.props.handleRender}>No</button>
      </div>
    )
  }
}

// render(<NewResults />, document.getElementById("root"))

export default NewResults
