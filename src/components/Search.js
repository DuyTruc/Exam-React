import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
        <div>
            <div className="form-group">
                <label >Search Task :</label>
                <input type="text" name = "searcg" id = "" className="form-control" placeholder="Input ..."/><br></br>
                <button onClick = "" type="button" className="btn btn-outline-info">Search</button>
            </div>
        </div>
        );
    }
}

export default Search;