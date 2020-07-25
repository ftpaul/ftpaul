import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => (
    <>
        {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}

        <hr />

        {data.allPocketArticle.nodes.map(
            node => (
                <>
                <p>{node.time_added}</p>
                <p>{Date.parse(node.time_added)}</p>
                <br/>
                </>
            )
        )}
    </>
)

// https://github.com/conradj/gatsby-source-pocket/issues/2 dates are UNIX type

export const query = graphql`
  {
    allPocketArticle(filter: {readDay: {gt: 0.1}}) {
      totalCount
      nodes {
        title
        readWeek
        time_read
        readDay
        articleDomain
        time_added
        is_index
        favorite
        favourite
        is_article
        has_image
        has_video
        id
        word_count
        url
        time_updated
        tags
      }
      pageInfo {
        itemCount
      }
    }
  }
`

export default ComponentName
