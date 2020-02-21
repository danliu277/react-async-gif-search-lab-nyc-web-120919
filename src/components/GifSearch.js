import React, { Component } from 'react'
export default class GifSearch extends Component {
    state = {
        text: ''
    }

    updateText = (text) => {
        this.setState({ text })
    }

    getGifs = (e) => {
        e.preventDefault()
        this.props.getGifs(this.state.text)
    }

    render() {
        return(
            <form onSubmit={(e) => this.getGifs(e)}>
                <input value={this.state.text} onChange={(e) => this.updateText(e.target.value)} />
            </form>
        )
    }
}