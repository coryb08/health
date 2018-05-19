import React, { Component } from "react"
import { render } from "react-dom"
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc"

const SortableItem = SortableElement(({ value }) => (
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
))

const SortableList = SortableContainer(({ items }) => {
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
})

class Results extends Component {
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

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    })
  }
  render() {
    return (
      <div id="results">
        <div id="blueHeader" />
        <div id="headerLogo" />
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        <button onClick={this.props.handleRender}>Submit</button>
      </div>
    )
  }
}

// render(<Results />, document.getElementById("root"))

export default Results
