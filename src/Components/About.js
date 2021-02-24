import React from 'react'
import { Link } from 'react-router-dom'
import shoeCover from './imgs/shoe-about.jpg'

function About() {
    return (
        <div>
            <section id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0  order-2 order-lg-1">
                                    <h1 className="heading">About <span className="heading___sub">Us</span></h1>
                                    <h5 className="heading">We Have the best shoes in the whole country</h5>
                                    <div className="mt-3">
                                        <Link to="/product" className="btn btn-outline-dark">View Product</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <img src={shoeCover} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
