import React from 'react'

function SearchBar(props) {
    return (
        <div className="Search">
        <nav className="navbar navbar-light bg-dark">
        <form className="form-inline">
          <input onChange={props.handlechange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>
      </nav> 
        </div>
    )
}


export default SearchBar
