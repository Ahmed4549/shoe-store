import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Shoes from "../ProductItem.json";


function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id]
    if (!shoe)
        return <h1>OOPS! Product Not Found!</h1>
    return (
        <div>
            <h1 className="heading">Product <span className="heading___sub">Description</span></h1>
            <div className="container">
                <div className="card prod___description">
                    <img className="card-img-top" src={shoe.image} alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">{shoe.name}</h3>
                        <h5 className="card-text">Color: {shoe.colour}</h5>
                        <p>{shoe.description}</p>
                        <Link to="/product" className="btn btn-outline-dark">&larr; Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
