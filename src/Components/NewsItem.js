import React from "react";

export default function NewsItem(props) {
  return (
    <div>
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.imgUrl} className="card-img-top w-100 h-75" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><strong>{props.title.length>30?props.title.slice(0,31)+"...":props.title}</strong></h5>
            <p className="card-text">{props.descrip&&props.descrip.length>50?props.descrip.slice(0,81)+"...":props.descrip}.</p>
            <a href={props.source} className="btn btn-primary" target="_.blank">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
