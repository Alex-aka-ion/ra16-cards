import React from "react";

export default function Card({imgUrl, imgAltText, children}) {
    return <div className="card">
        {imgUrl && <img src={imgUrl} className="card-img-top" alt={imgAltText}/>}
            <div className="card-body">
                {children}
            </div>
    </div>
}
