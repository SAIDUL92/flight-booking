import React, { Component } from 'react'
export default class NavBars extends Component {
    render() {
        return (
          <React.Fragment>
               <header className="bg-white">
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="travel-info d-sm-flex text-center text-sm-left">
                            <p><span><i className="fas fa-phone-alt"></i></span> contact with us:083355874</p>
                            <p className="pl-sm-4"><span><i className="fas fa-envelope"></i></span> email: john123@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="navbar navbar-expand justify-content-end">
                            <div className="mx-2">
                                <select name="name" id="select">
									<option value="0"> English (United States)</option>
									<option value="1">arabic</option>
									<option value="2"> English (United kingdom)</option>
									<option value="3">English (australia)</option>
								</select>
                            </div>
                            <div className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link btn btn-danger mx-1" href="#">book now </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-danger mx-1" href="#">Manage</a>
                                </li>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      
        <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="#"><img src="assets/img/Cathay.png" alt=""/></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
											info
										</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
       
    </header>
          </React.Fragment>
        )
    }
}
