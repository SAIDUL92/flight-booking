import React, { Component } from 'react'

export default class HeroSection extends Component {
    render() {
        return (
           <React.Fragment>
               <section className="hero-section">
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12">
                    <div className="hero">
                        <div className="hero-text text-center">
                            <h5 className="mb-4 text-white">over 90 000 flights for your choice</h5>
                            <h2 className="mb-5 text-white">choose flights</h2>
                        </div>
                        <div className="hero-form">
                            <form>
                                <div className="form-row  align-items-center">
                                    <div className="col-sm-6 col-md-6 col-lg-4 mb-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-plane-departure"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="from"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-plane-arrival"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="to"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-3 mb-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
														className="far fa-calendar-alt"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Departure"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-2 mb-3 text-center text-lg-left">
                                        <button className="btn lg btn-danger btn-block" type="button">Explore</button>
                                    </div>
                                </div>
                            </form>
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
