import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => (
    <>

<pre>{JSON.stringify(data.readArticles, null, 4)}</pre>

        <hr />

        {/* {data.addedArticles.group.map(
            node => (
                <div key={node.fieldValue}>
                <p>{node.fieldValue}</p>
                <p>{node.totalCount}</p>
                <br/>
                </div>
            )
        )} */}
    </>
)

// https://github.com/conradj/gatsby-source-pocket/issues/2 dates are UNIX type


export const query = graphql`
  {
    addedArticles: allPocketArticle(sort: {fields: fields___month_added}) {
      group(field: fields___month_added) {
        totalCount
        fieldValue
      }
    }
    readArticles: allPocketArticle(sort: {fields: fields___month_read}) {
      group(field: fields___month_read) {
        totalCount
        fieldValue
      }
    }
  }
`

export default ComponentName
