import React from "react"
import logo from "../imgs/logo.png"

const Landing = props => {
  return (
    <div id="landing">
      <div id="blueBar" />
      <div id="landingLogo" />
      <button className="button" onClick={e => props.handleRender("enterID")}>
        Enter
      </button>
    </div>
  )
}

export default Landing
