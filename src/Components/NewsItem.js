import React from "react";

export default function NewsItem(props) {
  return (
    <div>
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.descrip}.</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
