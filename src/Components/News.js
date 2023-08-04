import React, { useState , useEffect} from "react";
import NewsItem from "./NewsItem";

export default function News() {
    const [news, setNews] = useState([]);

    useEffect(()=>{

    async function fetchItems(){
        let info = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=24be594173364e3b9be6c7bf2b964df7");

        let data = await info.json(); 
        console.log(data);
         data = data.articles
         if(data.isArray){
            console.log("yup");
         }
        setNews(data);

    }

    fetchItems();

 },[])
    
    return (
        <div>
            <h1 className="text-center my-2">NEWS</h1>
            {news.map(newItem => {
                return(<div className="container d-flex justify-content-around">
                    <div className="row my-2 ">

                        <div className="col-md-4">
                            <NewsItem title={newItem.title} descrip={newItem.description} />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title={newItem.title} descrip={newItem.description} />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title={newItem.title} descrip={newItem.description} />
                        </div>
                    </div>
    
                </div>     
    )})}
    </div>
    );
}
