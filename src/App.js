import './App.css';
import React from 'react';
import MovieDetails from './components/MovieDetails';
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  render() {
    const { search } = this.state;

  return (
    <BrowserRouter> 
      <div>
      <SearchBar handlechange = { e => {  this.setState({search: e.target.value})}} />
      <div className="App">
      <Movies data_filtered = {search} ></Movies>
      <Switch>
        <Route Route exact path="/movie/:id" component={MovieDetails} />
      </Switch>
      </div>
      
      </div>
    </BrowserRouter>  
  );
  }
}

export default App;
