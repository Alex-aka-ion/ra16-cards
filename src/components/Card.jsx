import React from "react";

export default function Card({imgUrl, title, text, url, buttonGoText}) {
    return <div className="card">
        {imgUrl && <img src={imgUrl} className="card-img-top" alt={title}/>}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={url} className="btn btn-primary">{buttonGoText}</a>
            </div>
    </div>
}
