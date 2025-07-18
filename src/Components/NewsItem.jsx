import React from 'react'
import img from '../assets/news.webp'

const NewsItem = ({news}) => {
  return (
   <>
   
    <div className=" card bg-dark text-light mb-3 d-inline-block my-3 mx-3 text-center" style={{width:"344px"}}  id="media">
  <img src={news.urlToImage?news.urlToImage:img} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{news.title.slice(0,70)}</h5>
    <p className="card-text">{news.description}</p>
    <a href={news.url} className="btn btn-primary">Read More</a>
  </div>
</div>

   </>
  )
}

export default NewsItem

//slice() :- slice method use to cut data
