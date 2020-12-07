import React from 'react'


class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: {}
    };
  }

  fetch_data() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=4582f3be0f54a89cfa71d5857d523edb&language=fr-FR`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentDidMount() {
    this.fetch_data();
  }
  componentWillReceiveProps(nextProps) {
    const { item } = this.state;
    if (this.props.match.params.id !== item.id) {
      this.fetch_data();
    }
  }

  render() {
    const { error, isLoaded, item } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <div className="movieDetails">

          <div className="container">
            <div className="row">
              <div className="col-md-4 card card-body">
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} className="thumbnail img" alt="Poster"/>
              </div>
              <div className="col-md-8">
                <h2 className="mb-4"></h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Title: {item.title}</strong>
                  </li>
                  <li className="list-group-item">
                  <strong>Genre: </strong>
                  {item.genres.map(item => (
                    <strong> {item.name} </strong> 
                  ))}
                  </li>
                  <li className="list-group-item">
                    <strong>Released: {item.release_date}</strong>
                  </li>
                  <li className="list-group-item">
                    <strong>Rated: {item.vote_count}</strong>
                  </li>
                  <li className="list-group-item">
                    <strong>TMDB Rating: {item.popularity}</strong>
                  </li>
                  <li className="list-group-item">
                    <strong>Director:</strong>
                    {item.production_companies.map(item => (
                      <strong> {item.name} </strong> 
                    ))}
                  </li>
                  <li className="list-group-item">
                    <strong>language:</strong>
                    {item.spoken_languages.map(item => (
                      <strong> {item.name} </strong> 
                    ))}
                  </li>
                  <li className="list-group-item">
                    <strong>Status: {item.status}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>)
    }
  }
}

export default MovieDetails
