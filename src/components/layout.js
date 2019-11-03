import React from "react"
import "./layout.css"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <>
  <Helmet>
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Helmet>
  <div class="container-parent" >
  <div class="container-child" >
    {children}
  </div>
  </div>
  </>
)
