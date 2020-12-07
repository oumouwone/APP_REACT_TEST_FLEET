import React from 'react'
import { NavLink } from 'react-router-dom';

// List des films oscars
class Movies extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.themoviedb.org/3/list/1?api_key=4582f3be0f54a89cfa71d5857d523edb&language=fr-FR")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
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
  
    render() {
      const { error, isLoaded, items } = this.state;
  
      const filterMovies = items.filter(data => (
        data.title.toLowerCase().includes(this.props.data_filtered.toLowerCase())
      ))
  
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
            <div className="movies">

            <ul className="list-group">

            {filterMovies.map(item => (
              <li className="list-group-item">
              {item.title}
                <div>
                    <NavLink type="button" className="btn btn-outline-success badge"to={{ pathname: `/movie/${item.id}`, state: 'flushDeal' }}>Voir plus</NavLink>
                </div>
              </li>
            ))}
            </ul>
        </div>
        );
      }
    }
  }
  

export default Movies
