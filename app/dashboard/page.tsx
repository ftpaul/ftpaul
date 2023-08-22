

import React from 'react';
import { LineChart, PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
import Section from '../../components/Section';






  async function getData() {
    
   
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data')
    // }
   
    // return res.json()
  }
  
  function getReadArticlesByMonth(articles) {
    // Filter articles with time_read different than 0
    const readArticles = articles
        .filter(article => article.time_read !== "0" &&
            article.time_read !== undefined);
        
    // Group articles by month
    const groupedByMonth = readArticles.reduce((acc, article) => {
        console.log(article.time_read)
      const date = new Date(Number(article.time_read) * 1000);  // Convert UNIX timestamp to JavaScript Date
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure month has two digits
      const year = date.getFullYear();
      const monthYearKey = `${month}-${year}`;  // e.g., "05-2021" for May 2021
  
      // Initialize the month-year key if it doesn't exist
      if (!acc[monthYearKey]) {
        acc[monthYearKey] = 0;
      }
  
      // Increment the count for the month-year key
      acc[monthYearKey]++;



      
      return acc;
    }, {});
  
    return groupedByMonth;
  }
  
  function orderByMonth(readArticlesByMonth) {
    Object.entries(readArticlesByMonth)
    .sort((a, b) => {
    const [monthA, yearA] = a[0].split('-').map(Number);
    const [monthB, yearB] = b[0].split('-').map(Number);

    // Compare by year first, then by month
    return yearA - yearB || monthA - monthB;
    })
    .reduce((acc, [monthYearKey, count]) => {
    acc[monthYearKey] = count;
    return acc;
    }, {});
    return readArticlesByMonth;
  }


  export default async function DashboardPage() {

    // const data = await getData()

    // const dataList = data.list;
    // const dataArray = Object.values(dataList)

    // const readArticlesByMonth = getReadArticlesByMonth(dataArray)

    // const orderedByMonth = orderByMonth(readArticlesByMonth)
    
    // console.log(orderedByMonth);


    
  
//   consumerKey: `92512-8ff61a3de059f2bbd382f7b5`,
//         accessToken: 2b8a4ad7-69dc-0719-09fb-7a6a9a,
//         weeksOfHistory: 300,
//         apiMaxRecordsToReturn: 10000,
//         getCurrentWeekOnly: `n`,
//         tagFilter: true,
//         stateFilterString: `all`,


   // const newObject = { ...orderedByMonth };

//   var finalDataYear = []
//   queryReadArticlesYear.map(element => (
//     finalDataYear.push([element.fieldValue, element.totalCount])
//   ))

//   var finalDataAdded = []
//   queryAddedArticles.map(element => (
//     finalDataAdded.push([element.fieldValue, element.totalCount])
//   ))

        return (
            <Section>
                
                ...

                {/* <pre>{JSON.stringify(newObject, null, 4)}</pre> */}


                {/* <LineChart 
                    data={newObject} 
                    colors={["#EF4155"]}
                    xtitle="Years" 
                    ytitle="Articles Read" 
                    />  */}
                    {/* <h2>Articles Added</h2>
                    <ColumnChart 
                        data={orderedByMonth} 
                        colors={["#EF4155"]}
                        xtitle="Months" 
                        ytitle="Articles Added" 
                    /> */}


<PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
            </Section>

        )
}
