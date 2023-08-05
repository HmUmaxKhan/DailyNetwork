import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader.js";

export default function News() {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const pageSize=15

  async function fetchItems(page) {
    let info = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${page}&apiKey=24be594173364e3b9be6c7bf2b964df7`
    );

    let data = await info.json();
    const articles = data.articles
    let total = data.articles.length;
    console.log(total);
    setTotal(total);
    setNews(articles);
    setLoad(false);
    
  }
  
  useEffect(() => {
    
    fetchItems(page);
    
  }, [page]);

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
    {!load ?<div><h1 className="text-center my-2">NEWS</h1>

      <div className="container d-flex justify-content-around">
        <div className="row my-2 ">
          {news&&news.map((newItem) => {
            return (
             <div className="col-md-4 my-2">
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
    </div>: <div class="d-flex justify-content-center" style={{height:"100vh"}}><div class="d-flex align-items-center"><Loader /></div></div>
        }

        <div class="d-flex justify-content-around mb-3">
        <button type="button" class="btn btn-dark" disabled={page<1} onClick={handlePrevious}>Previous</button>
        <button type="button" class="btn btn-dark" disabled={total<pageSize}  onClick={handleNext}>Next</button>
        </div>
    </div>

  );
}
