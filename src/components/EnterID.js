import React from "react"
import logo from "../imgs/logo.png"

const EnterID = props => {
  return (
    <div id="enterID">
      <div id="blueHeader" />
      <div id="headerLogo" />

      <form onSubmit={props.handleConfirm}>
        <input type="text" placeholder="Enter ID" />
        <button className="button" type="submit">
          Confirm
        </button>
      </form>
    </div>
  )
}

export default EnterID
