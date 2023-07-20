import React from "react"

export default function Card(props) {
    let badge;
    if (props.openSpots === 0) {
        badge = <div className="card--badge">SOLD OUT</div>;
    } else if (props.location === "Online") {
        badge = <div className="card--badge">ONLINE</div>;
    }
    
    return (
        <div className="card">
            {badge}
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}