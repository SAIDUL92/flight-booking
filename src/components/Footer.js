import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="bg-foter">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <a className="navbar-brand" href="#">
                        <img src="assets/img/Cathay.png" alt="img"/>
                        </a>
                </div>
                <div className="col-6 text-right">
                    <p>&copy; 2019 All rights reservred</p>
                </div>
            </div>
        </div>
    </footer>
            </React.Fragment>
        )
    }
}
