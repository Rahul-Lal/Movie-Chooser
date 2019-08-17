import React from 'react'
import { getFilm } from '../api'

class App extends React.Component {
  state = {
    title: '',
    overview: '',
    poster_path: ''
  }

  componentDidMount() {
    try {
      getFilm()
        .then(res => {
          this.setState({
            title: res.body.title,
            overview: res.body.overview,
            poster_path: res.body.poster_path
          })
        })
        .catch(err => this.setState({ title: err.message }))
    }
    catch (error) {
      console.log('https://thumbs.gfycat.com/RequiredExcellentDarwinsfox-size_restricted.gif\nERROR: ' + error.message)
    }
  }

  handleClick = () => {
    const title = this.state.title
    const overview = this.state.overview
    const poster_path = this.state.poster_path

    this.setState({ title, overview, poster_path })
  }

  render() {
    const film = this.state
    try {
      return (
        <React.Fragment>
          <h1>I want to watch...</h1>

          <button onClick={this.handleClick}>Choose</button>

          <h2>{film.title}</h2>
          <p>{film.overview}</p>
          <img src={film.poster_path} />
        </React.Fragment>
      )
    }
    catch (error) {
      console.log('https://media0.giphy.com/media/BmnbtcKKBGqfS/source.gif\nERROR: ' + error.message)
    }
  }
}

export default App
