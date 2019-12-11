import React, { Component } from 'react'

export default class PopularFlight extends Component {
    render() {
        return (
            <React.Fragment>
                 <section className="section-py">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="title-section text-center">
                        <h3 className="text-uppercase mb-4">popular flights</h3>
                        <h2 className="text-uppercase mb-5">most popular flights</h2>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <div className="single-service">
                        <div className="card">
                            <img className="card-img-top" src="assets/img/ross-parmly.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5>from <b>$870</b> / person</h5>
                                <h6>one way flights</h6>
                                <h3>cheap flights to paris</h3>
                                <h6>book now and <span>save 30%</span></h6>
                                <button className="btn btn-danger" type="button">book now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <div className="single-service">
                        <div className="card">
                            <img className="card-img-top" src="assets/img/jerry.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5>from <b>$870</b> / person</h5>
                                <h6>one way flights</h6>
                                <h3>cheap flights to london</h3>
                                <h6>book now and <span>save 30%</span></h6>
                                <button className="btn btn-danger" type="button">book now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <div className="single-service">
                        <div className="card">
                            <img className="card-img-top" src="assets/img/nils.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5>from <b>$870</b> / person</h5>
                                <h6>one way flights</h6>
                                <h3>cheap flights to new zealand</h3>
                                <h6>book now and <span>save 30%</span></h6>
                                <button className="btn btn-danger" type="button">book now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
            </React.Fragment>
        )
    }
}
