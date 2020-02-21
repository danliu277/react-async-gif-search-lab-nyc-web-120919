import React from 'react'

export default function Gif(props) {
    return (
        <li>
            <img src={props.image} alt="gif" />
        </li>
    )
}