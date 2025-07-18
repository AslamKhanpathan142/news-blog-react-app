import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {
    const [article, setArticles] = useState([]);
   let API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    useEffect(() => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
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
