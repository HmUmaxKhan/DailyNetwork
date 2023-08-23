import React from "react";

export default function NewsItem(props) {
  return (
    <div>
      <div className="container">
        <div className="card">
          <img src={props.imgUrl?props.imgUrl:'https://yt3.googleusercontent.com/ytc/AOPolaSH5c2fljga65bXZJV6poeDMXu0NC8ZgmpQ8LiI=s900-c-k-c0x00ffffff-no-rj'} className="card-img-top w-100 h-75" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><strong>{props.title?props.title.length>30?props.title.slice(0,31)+"...":props.title:"Title"}</strong></h5>
            <p className="card-text">{props.descrip?props.descrip.length>50?props.descrip.slice(0,81)+"...":props.descrip:"Description"}.</p>
            
    
            <a href={props.source} className="btn btn-primary" target="_.blank">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
