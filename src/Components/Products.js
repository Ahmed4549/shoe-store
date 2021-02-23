import React from 'react'
import { Link } from 'react-router-dom';
import Shoes from "../ProductItem.json";

function Products() {
    return (
        <div className="prod">
            <h1 className="heading">Our <span className="heading___sub">Products</span></h1>
            <div className="product___page container">
                {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName]
                    return (
                        <div className="container" key={keyName}>
                            <div className="card prod___Style">
                                <img className="card-img-top" src={shoe.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{shoe.name}</h5>
                                    <p className="card-text">Color: {shoe.colour}</p>
                                    <Link to={`/product/${keyName}`} className="btn btn-outline-dark">View Product</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products;