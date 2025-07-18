import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {
    const [article, setArticles] = useState([]);
   

    useEffect(() => {
      try {
       // let url = 'Your API'
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
        
      } catch (error) {
        console.log(error)
      }
        
        
    },[category])
  return (
    <>
   
   
        {article.map((news, index) => (
            <NewsItem key={index} news={news}></NewsItem>
        ))}
       
    </>
  )
}

export default NewsBoard
