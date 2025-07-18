import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`/.netlify/functions/getNews?category=${category}`)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
      .catch(err => console.error("Error fetching news:", err));
  }, [category]);

  return (
    <>
      {articles.map((news, index) => (
        <NewsItem key={index} news={news} />
      ))}
    </>
  );
};

export default NewsBoard;
