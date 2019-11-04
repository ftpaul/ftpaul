import React from "react"
import "./layout.css"
import { Helmet } from "react-helmet"
import favicon from '../images/favicon.png'

export default ({ children }) => (
  <>
  <Helmet>
    <link rel="icon" href={favicon} />
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Helmet>
  <div class="container-parent" >
  <div class="container-child" >
    {children}
  </div>
  </div>
  </>
)
