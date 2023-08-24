import React, { useState, useEffect } from 'react';
import { LineChart, PieChart, ColumnChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { Console } from 'console';



function getGroupArticlesByMonth(articles, groupBy) {
  // Filter articles with time_read different than 0
  const readArticles = articles
      .filter(article => article[groupBy] !== "0" &&
          article[groupBy] !== undefined &&
          article[groupBy] > 1622498400); // avoid edge cases with old dates
      
  // Group articles by month
  const groupedByMonth = readArticles.reduce((acc, article) => {
    //console.log(article[groupBy])
    const date = new Date(Number(article[groupBy]) * 1000);  // Convert UNIX timestamp to JavaScript Date
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure month has two digits
    const year = date.getFullYear();
    const monthYearKey = `${year}-${month}-1`;  // e.g., "05-2021" for May 2021

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


export default function DashboardPage() {
    
  const [dataList, setDataList] = useState([]);
  const [readArticlesByMonth, setReadArticlesByMonth] = useState({});
  const [addedArticlesByMonth, setAddedArticlesByMonth] = useState({});
  var data = []

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch('/api/get-pocket-data');
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const result = await response.json();
            
            setDataList(Object.values(result.list));
            
            const readArticlesByMonth = getGroupArticlesByMonth(Object.values(result.list), "time_read");

            const addedArticlesByMonth = getGroupArticlesByMonth(Object.values(result.list), "time_added");
            
            setAddedArticlesByMonth(addedArticlesByMonth);
            setReadArticlesByMonth(readArticlesByMonth);
            
            
        } catch (error) {
            console.error("There was a problem fetching the data:", error);
        }
    }

    fetchData();
}, []);
  

  return (
      <>
          <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} id="something" /> 

          <LineChart 
                      data={[{name: "read articles", data: readArticlesByMonth}, {name: "added articles", data: addedArticlesByMonth}]} 
                      colors={["#EF4155"]}
                      xtitle="Months" 
                      ytitle="Articles Added" 
                      id="loading"
                  />
                  <LineChart 
                      data={readArticlesByMonth} 
                      colors={["#EF4155"]}
                      xtitle="Months" 
                      ytitle="Articles Read" 
                      id="loading"
                  />
                  <LineChart 
                      data={addedArticlesByMonth} 
                      colors={["#EF4155"]}
                      xtitle="Months" 
                      ytitle="Articles Added" 
                      id="loading"
                  />
      </>
  );
}
