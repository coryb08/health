import React, { Component } from "react"
import { render } from "react-dom"
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc"

const SortableItem = SortableElement(({ value }) => (
  <div className="item">
    <p>{"Dr. " + value.name}</p>
    <div className="dragIcon" />
  </div>
))

const SortableList = SortableContainer(({ items }) => {
  return (
    <div id="itemList">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  )
})

class Results extends Component {
  constructor() {
    super()
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

  // state = {
  //   items: ["Name 1", "Name 2", "Name 3", "Name 4"]
  // }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    })
  }
  render() {
    return (
      <div id="results">
        <h1>Sample Results</h1>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
      </div>
    )
  }
}

// render(<Results />, document.getElementById("root"))

export default Results

// import React, { Component } from "react"
// import logo from "../imgs/logo.png"
// import Draggable from "react-draggable"
// import { DragSource } from "react-dnd"
//
// class Landing extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       mouseDown: null,
//       mouseX: 0,
//       mouseY: 0,
//       currentDiv: "",
//       landing: "",
//       result1: "result1",
//       result2: "result2",
//       result3: "result3",
//       result4: "result4"
//     }
//   }
//
//   styleCheck = id => {
//     if (id === this.state.currentDiv) {
//       return this.newStyle()
//     } else {
//       return this.oldStyle()
//     }
//   }
//
//   newStyle = () => {
//     return { "z-index": "99" }
//   }
//
//   oldStyle = () => {
//     return { "z-index": "2" }
//   }
//
//   doesIntersect = (x, y) => {
//     let result1Top = this.refs.result1.getBoundingClientRect().top
//     let result1Left = this.refs.result1.getBoundingClientRect().left
//     let result1Right = this.refs.result1.getBoundingClientRect().right
//     let result1Bottom = this.refs.result1.getBoundingClientRect().bottom
//     //
//
//     let result2Top = this.refs.result2.getBoundingClientRect().top
//     let result2Left = this.refs.result2.getBoundingClientRect().left
//     let result2Right = this.refs.result2.getBoundingClientRect().right
//     let result2Bottom = this.refs.result2.getBoundingClientRect().bottom
//
//     let result3Top = this.refs.result3.getBoundingClientRect().top
//     let result3Left = this.refs.result3.getBoundingClientRect().left
//     let result3Right = this.refs.result3.getBoundingClientRect().right
//     let result3Bottom = this.refs.result3.getBoundingClientRect().bottom
//
//     let result4Top = this.refs.result4.getBoundingClientRect().top
//     let result4Left = this.refs.result4.getBoundingClientRect().left
//     let result4Right = this.refs.result4.getBoundingClientRect().right
//     let result4Bottom = this.refs.result4.getBoundingClientRect().bottom
//     let verticalMatch1
//     let horizontalMatch1
//     if (
//       result1Top < y &&
//       result1Bottom > y &&
//       this.state.currentDiv !== "result1"
//     ) {
//       verticalMatch1 = true
//       if (result1Left < x && result1Right > x) {
//         horizontalMatch1 = true
//       }
//     }
//
//     let verticalMatch2
//     let horizontalMatch2
//     if (
//       result2Top < y &&
//       result2Bottom > y &&
//       this.state.currentDiv !== "result2"
//     ) {
//       verticalMatch2 = true
//       if (result2Left < x && result2Right > x) {
//         horizontalMatch2 = true
//       }
//     }
//
//     let verticalMatch3
//     let horizontalMatch3
//     if (
//       result3Top < y &&
//       result3Bottom > y &&
//       this.state.currentDiv !== "result3"
//     ) {
//       verticalMatch3 = true
//       if (result3Left < x && result3Right > x) {
//         horizontalMatch3 = true
//       }
//     }
//
//     let verticalMatch4
//     let horizontalMatch4
//     if (
//       result4Top < y &&
//       result4Bottom > y &&
//       this.state.currentDiv !== "result4"
//     ) {
//       verticalMatch4 = true
//       if (result4Left < x && result4Right > x) {
//         horizontalMatch4 = true
//       }
//     }
//
//     let intersect
//     let landing
//     if (horizontalMatch1 && verticalMatch1) {
//       intersect = true
//       landing = "result1"
//     } else if (horizontalMatch2 && verticalMatch2) {
//       intersect = true
//       landing = "result2"
//     } else if (horizontalMatch3 && verticalMatch3) {
//       intersect = true
//       landing = "result3"
//     } else if (horizontalMatch4 && verticalMatch4) {
//       intersect = true
//       landing = "result4"
//     } else {
//       intersect = false
//     }
//     this.setState({ landing })
//     return intersect
//   }
//
//   handleDragStart = e => {
//     e.preventDefault()
//     this.setState({ mouseDown: true, currentDiv: e.target.id }, () => {})
//   }
//
//   handleDragEnd = e => {
//     console.log(e)
//     this.setState({ mouseDown: false })
//
//     if (this.doesIntersect(e.pageX, e.pageY)) {
//       let landingDiv = this.state.landing
//       let selectedDiv = this.state.currentDiv
//       this.setState({
//         [landingDiv]: selectedDiv,
//         [selectedDiv]: landingDiv
//       })
//     }
//   }
//
//   handleMouseMove = e => {
//     this.setState({
//       mouseX: e.touches[0].clientX,
//       mouseY: e.touches[0].clientY
//     })
//   }
//
//   exchangeData = landing => {
//     console.log(landing.id)
//   }
//
//   componentDidUpdate = () => {
//     if (this.state.mouseDown === true) {
//     }
//   }
//
//   render() {
//     return (
//       <div id="results" onTouchMove={this.handleMouseMove}>
//         <iframe src="http://localhost:3001" id="iframe" />
//         <h1>Here are your results...</h1>
//
//         <Draggable
//           draggable="true"
//           onMouseDown={this.handleDragStart}
//           onStop={this.handleDragEnd}
//         >
//           <div
//             style={this.styleCheck("result1")}
//             ref="result1"
//             id={this.state.result1}
//           >
//             Result 1
//           </div>
//         </Draggable>
//         <Draggable
//           onMouseDown={this.handleDragStart}
//           onStop={this.handleDragEnd}
//           draggable="true"
//         >
//           <div
//             style={this.styleCheck("result2")}
//             ref="result2"
//             id={this.state.result2}
//           >
//             Result 2
//           </div>
//         </Draggable>
//         <Draggable
//           onMouseDown={this.handleDragStart}
//           onStop={this.handleDragEnd}
//           draggable="true"
//         >
//           <div
//             style={this.styleCheck("result3")}
//             ref="result3"
//             id={this.state.result3}
//           >
//             Result 3
//           </div>
//         </Draggable>
//         <Draggable
//           onDrag={this.handleDragStart}
//           onStop={this.handleDragEnd}
//           draggable="true"
//         >
//           <div
//             style={this.styleCheck("result4")}
//             ref="result4"
//             id={this.state.result4}
//           >
//             Result 4
//           </div>
//         </Draggable>
//       </div>
//     )
//   }
// }
//
// export default Landing
