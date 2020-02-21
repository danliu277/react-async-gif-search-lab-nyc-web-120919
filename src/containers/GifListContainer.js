import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GiftListContainer extends Component {
    state = {
        gifs: []
    }

    getGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(gifs => {
                this.setState({gifs: gifs.data.slice(0, 3)})
            })
    }

    render() {
        return (
            <div>
                <GifSearch getGifs={this.getGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}