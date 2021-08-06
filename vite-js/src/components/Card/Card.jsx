import React from "react";
import '../../css/Card/card.css'

export const Card = (props) => {
    return (
        <div className="card">
            <p>FirstName: <span>{props.item.firstName}</span></p>
            <p>LastName: <span>{props.item.lastName}</span></p>
            <p>birthDate: <span>{props.item.birthDate}</span></p>
            <p>country: <span>{props.item.country}</span></p>
        </div>
    )
}