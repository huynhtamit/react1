import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container text-sm-center">
              <h3 className="display-4">Project quan ly thanh vien bang reactjs</h3>
              <p className="lead">voi du lieu json</p>
              <hr className="my-2" />
            </div>
          </div>
        );
    }
}

export default Header;