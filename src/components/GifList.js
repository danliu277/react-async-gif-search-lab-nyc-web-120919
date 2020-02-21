import React from 'react'
import Gif from './Gif'
export default function GifList(props) {
    return (
        <ul>
            {props.gifs ? props.gifs.map(gif => <Gif image={gif.images.original.url} />) : null}
        </ul>
    )
}