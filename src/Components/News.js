import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader.js";
import PropTypes from 'prop-types'
import _ from 'lodash';
export default function News(props) {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(true);
  const [page,setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [pageSize] = useState(30);


  async function fetchItems() {
    let info = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${page}&pageSize=${pageSize}&apiKey=${props.apikey}`
    ) 

    let data = await info.json();
    const articles = data.articles;
    let total = data.totalResults;
    setTotal(total);
    setNews(articles);
    setLoad(false);
    
  }
  
useEffect(() => {
   fetchItems();
},)

function capital(category) {
  let cap = _.capitalize(category);
  return cap;
}

const handleNext = ()=>{
  const nextPage = page+1
  setPage(nextPage);
}
const handlePrevious = ()=>{
  const prevPage = page-1
  setPage(prevPage);
}
 
  return (
    <div>
    {!load ?<div><h1 className="text-center my-3">Daily Network - {capital(props.category)}</h1>

      <div className="container d-flex justify-content-around">
        <div className="row my-2 ">

          {news&&news.map((newItem,index) => {
            return (
             <div key={index} className="col-md-4 my-2">
                <NewsItem
                  title={newItem.title}
                  descrip={newItem.description}
                  imgUrl={newItem.urlToImage}
                  source = {newItem.url}
                  author = {newItem.author}
                  date = {newItem.date}
                />
              </div>
            );
          })}

        </div>
      </div> 
    </div>: <div className="d-flex justify-content-center" style={{height:"100vh"}}><div className="d-flex align-items-center"><Loader /></div></div>
        }
        <div className="d-flex justify-content-around mb-3">
        <button type="button" className="btn btn-dark" disabled={page<1} onClick={handlePrevious}>Previous</button>
        <button type="button" className="btn btn-dark" disabled={page>=Math.ceil(total/pageSize)}  onClick={handleNext}>Next</button>
        </div>
    

    
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
