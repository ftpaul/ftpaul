import React from "react"
import "./layout.css"

export default ({ children }) => (
  <div style={{ display: `flex-`, alignItems: `center`, height: `100vh`, display: `flex` }}>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem`, display: `flex` }}>
    {children}
  </div>
  </div>
)
