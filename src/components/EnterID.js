import React from "react"

const EnterID = props => {
  return (
    <div id="enterID">
      <div id="blueHeader" />
      <div id="headerLogo" />

      <form onSubmit={props.handleConfirm}>
        <input id="enterIDinput" type="text" placeholder="Enter ID" />
        <div id="divider" />
        <button id="enterIDbutton" className="button" type="submit">
          Confirm
        </button>
      </form>
    </div>
  )
}

export default EnterID
