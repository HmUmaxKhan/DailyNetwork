import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader.js";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function News(props) {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(true);
  const [page] = useState(1);
  const [total, setTotal] = useState(1);
  const [pageSize,setPageSize] = useState(15);


  async function fetchItems() {
    let info = await fetch(
     `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${page}&pageSize=${pageSize}&apiKey=${props.apikey}`
      );

    let data = await info.json();
    console.log(data);
    const articles = data.articles
    let total = data.totalResults;
    setTotal(total);
    setPageSize(total);
    setNews(articles);
    setLoad(false);
    
  }
  
useEffect(() => {
   fetchItems();
},)

 
  
  const  fetchMore = async() => {
    let info = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${page}&pageSize=${pageSize}&apiKey=${props.apikey}`
       );
 
     let data = await info.json();
     const articles = data.articles
     let total = data.totalResults;
     setTotal(total);
     const newArticles = [...news, ...articles];
     console.log(newArticles);
     setNews(newArticles);
     setLoad(false);
  }



  return (
    <div>
    {!load ?<div><h1 className="text-center my-2">NEWS</h1>

    <InfiniteScroll
    dataLength = {news.length}
    next = {fetchMore}
    hasMore = {news.length !== total}
    loader={<div  className="d-flex justify-content-center"><Loader /></div>}
  >
      <div className="container d-flex justify-content-around">
        <div className="row my-2 ">

          {news.map((newItem,index) => {
            return (
             <div key={index} className="col-md-4 my-2">
                <NewsItem
                  title={newItem.title}
                  descrip={newItem.description}
                  imgUrl={newItem.urlToImage}
                  source = {newItem.url}
                />
              </div>
            );
          })}

        </div>
      </div> 
      </InfiniteScroll>
    </div>: <div className="d-flex justify-content-center" style={{height:"100vh"}}><div className="d-flex align-items-center"><Loader /></div></div>
        }

    </div>

  );
}

News.propTypes={
    category: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired
};

News.defaultProps = {
    category: "general",
    countryCode: "us"   
}
