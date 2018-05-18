import React from "react"

const Thankyou = props => {
  return (
    <div id="landing">
      <div id="landingLogo" />
      <h2>Thank you for your feedback!</h2>
      <button onClick={props.handleRender}>Finish</button>
    </div>
  )
}

export default Thankyou
