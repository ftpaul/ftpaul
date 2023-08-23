import React, { useState, useEffect } from 'react';
import { LineChart, PieChart, ColumnChart } from 'react-chartkick'
import 'chartkick/chart.js'




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

export default function DashboardPage() {
    const [dataList, setDataList] = useState([]);
    const [orderedByMonth, setOrderedByMonth] = useState({});

    useEffect(() => {
      async function fetchData() {
          try {
              const response = await fetch('/api/get-pocket-data');
              
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              
              const result = await response.json();
              
              setDataList(Object.values(result.list));
              
              const readArticlesByMonth = getReadArticlesByMonth(Object.values(result.list));
              const orderedData = orderByMonth(readArticlesByMonth);
  
              setOrderedByMonth(orderedData);
          } catch (error) {
              console.error("There was a problem fetching the data:", error);
          }
      }
  
      fetchData();
  }, []);

    // ... rest of the component

   

    return (
        <>
            <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} id="something" /> 

            <LineChart 
                        data={orderedByMonth} 
                        colors={["#EF4155"]}
                        xtitle="Months" 
                        ytitle="Articles Added" 
                        id="loading"
                    />
        </>
    );
}
