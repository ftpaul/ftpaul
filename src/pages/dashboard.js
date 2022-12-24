import React from "react"
import { graphql } from "gatsby"
import 'chartkick/chart.js'
import { ColumnChart } from 'react-chartkick'
// import Layout from '../components/layout'
// import SEO from '../components/SEO'
import ContentColumn from '../components/contentColumn'

const DashboardPage = ({ data }) => {
  

  const queryReadArticles = data.readArticles.group
  const queryReadArticlesYear = data.readArticlesYear.group
  const queryAddedArticles = data.addedArticles.group
  


  var finalDataRead = []
  queryReadArticles.map(element => (
    finalDataRead.push([element.fieldValue, element.totalCount])
  ))

  var finalDataYear = []
  queryReadArticlesYear.map(element => (
    finalDataYear.push([element.fieldValue, element.totalCount])
  ))

  var finalDataAdded = []
  queryAddedArticles.map(element => (
    finalDataAdded.push([element.fieldValue, element.totalCount])
  ))

  
  return (
    <ContentColumn>
    {/* <SEO title="Home" /> */}
    <h2>Articles Read</h2>
    <ColumnChart 
      data={finalDataRead.slice(-40)} 
      colors={["#EF4155"]}
      xtitle="Months" 
      ytitle="Articles Read" 
    />


<ColumnChart 
      data={finalDataYear.slice(-40)} 
      colors={["#EF4155"]}
      xtitle="Years" 
      ytitle="Articles Read" 
    />

    <h2>Articles Added</h2>
    <ColumnChart 
        data={finalDataAdded.slice(-40)} 
        colors={["#EF4155"]}
        xtitle="Months" 
        ytitle="Articles Added" 
      />

<pre>{JSON.stringify(data.readArticlesYear, null, 4)}</pre>
  </ContentColumn>

)}

// https://github.com/conradj/gatsby-source-pocket/issues/2 dates are UNIX type
// https://chartkick.com/react

export const query = graphql`
  {
    readArticles: allPocketArticle(sort: {fields: fields___month_read},filter: {fields: {month_read: {nin: "Invalid date"}}}) {
      group(field: fields___month_read) {
        totalCount
        fieldValue
      }
    }

    readArticlesYear: allPocketArticle(sort: {fields: fields___year_read},filter: {fields: {year_read: {nin: "Invalid date", , ne: "1970"}}}) {
        group(field: fields___year_read) {
          totalCount
          fieldValue
        }
      }

    addedArticles: allPocketArticle(sort: {fields: fields___month_read},filter: {fields: {month_read: {nin: "Invalid date"}}}) {
      group(field: fields___month_added) {
        totalCount
        fieldValue
      }
    }
  }
`
// addedArticles: allPocketArticle(sort: {fields: fields___month_added}) {
//   group(field: fields___month_added) {
//     totalCount
//     fieldValue
//   }
// }

export default DashboardPage
