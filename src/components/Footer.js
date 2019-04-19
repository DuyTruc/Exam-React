import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
        <div>
        <footer className="page-footer font-small mdb-color lighten-3 pt-4">
        {/* Footer Elements */}
        <div className="container">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-2 col-md-12 mb-4">
              {/*Image*/}
              <div className="view overlay z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" className="img-fluid" alt = "" />
                <a href>
                  <div className="mask rgba-white-light" />
                </a>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-2 col-md-6 mb-4">
              {/*Image*/}
              <div className="view overlay z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg" className="img-fluid" alt = "" />
                <a href>
                  <div className="mask rgba-white-light" />
                </a>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-2 col-md-6 mb-4">
              {/*Image*/}
              <div className="view overlay z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg" className="img-fluid" alt = ""/>
                <a href>
                  <div className="mask rgba-white-light" />
                </a>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-2 col-md-12 mb-4">
              {/*Image*/}
              <div className="view overlay z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).jpg" className="img-fluid" alt = ""/>
                <a href>
                  <div className="mask rgba-white-light" />
                </a>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-2 col-md-6 mb-4">
              {/*Image*/}
              <div className="view overlay z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(82).jpg" className="img-fluid" alt = ""/>
                <a href>
                  <div className="mask rgba-white-light" />
                </a>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-2 col-md-6 mb-4">
              {/*Image*/}
              <div className="view overlay z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(84).jpg" className="img-fluid" alt = ""/>
                <a href>
                  <div className="mask rgba-white-light" />
                </a>
              </div>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Footer Elements */}
        {/* Copyright */}
        <div className="footer-copyright text-center py-3">© 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
        </div>
        {/* Copyright */}
        </footer>
            </div>
        );
    }
}

export default Footer;