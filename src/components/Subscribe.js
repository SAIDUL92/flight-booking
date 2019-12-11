import React, { Component } from 'react'

export default class Subscribe extends Component {
    render() {
        return (
            <React.Fragment>
                 <section className="section-py bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="title-section text-center">
                        <h3 className="text-uppercase mb-4 text-white">subscribe</h3>
                        <h2 className="text-uppercase mb-5 text-white">let's subscribe</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="subscribe-section">
                        <form>
                            <div className="form-row align-items-center">
                                <div className="col-12 col-md-10">
                                    <input type="text" className="form-control" placeholder="enter your email"/>
                                </div>
                                <div className="col-8 mx-auto col-md-2 mt-3 mt-md-0">
                                    <button type="button" className="btn lg  btn-primary btn-block">subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </section>
            </React.Fragment>
        )
    }
}
