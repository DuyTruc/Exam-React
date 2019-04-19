import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
        
        <div>
            <div>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                {/* Bootstrap CSS */}
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
            </div>
            <div>
                <nav className="navbar navbar-expand-md navbar-dark mb-4" style={{backgroundColor: 'black'}}>
                <a className="navbar-brand" href="https://reactjs.org/">Reactjs-Redux Exam by TrucLn2</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-">
                    <li className="nav-item active">
                        <a className="nav-link" href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3000/">Show All Tasks</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
        );
    }
}

export default Nav;