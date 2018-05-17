import React, { Component } from "react"
import logo from "../imgs/logo.png"
import Draggable from "react-draggable"

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseDown: null
    }
  }
  // const doesIntersect = e => {
  //   let div1 = document.getElementById("result1").getBoundingClientRect()
  //   let div1Top = div1.top
  //   let div1Left = div1.left
  //   let div1Right = div1.right
  //   let div1Bottom = div1.bottom
  //
  //   let div2 = document.getElementById("result2").getBoundingClientRect()
  //   let div2Top = div1.top
  //   let div2Left = div1.left
  //   let div2Right = div1.right
  //   let div2Bottom = div1.bottom
  //
  //   let verticalMatch
  //   if (
  //     (div2Top > div1Top && div2Top < div1Bottom) ||
  //     (div2Bottom > div1Top && div2Bottom < div1Bottom)
  //   ) {
  //     verticalMatch = true
  //   } else {
  //     verticalMatch = false
  //   }
  //   let horizontalMatch
  //   if (
  //     (div2Right > div1Left && div2Right < div1Right) ||
  //     (div2Left < div1Right && div2Left > div1Left)
  //   ) {
  //     horizontalMatch = true
  //   } else {
  //     horizontalMatch = false
  //   }
  //   let intersect
  //   if (horizontalMatch && verticalMatch) {
  //     intersect = true
  //   } else {
  //     intersect = false
  //   }
  //
  //   console.log(intersect)
  // }

  // const moveDiv = e => {}

  checker = () => {
    console.log(this.state.mouseDown)
  }

  handleDragStart = e => {
    this.setState({ mouseDown: true }, () => {
      this.checker()
    })
  }

  handleDragEnd = e => {
    this.setState({ mouseDown: false }, () => {
      this.checker()
    })
  }

  handleMouseMove = e => {
    console.log(e)
  }

  render() {
    return (
      <div id="results" onMouseMove={this.handleMouseMove}>
        <h1>Here are your results...</h1>
        <div
          draggable="true"
          id="result1"
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
        />
      </div>
    )
  }
}

export default Landing

// <Draggable
//   draggable="true"
//   onDragEnter={() => console.log(this.state.mouseDown)}
//   onDragEnd={this.handleDragLeave}
// >
//   <div id="result1">Result 1</div>
// </Draggable>
// <Draggable>
//   <div id="result2">Result 1</div>
// </Draggable>
