import React from 'react'
import HotSellerProds from '../HotSeller.json'
import {Link} from 'react-router-dom'


function HotSeller() {
    return (
        <div>
            <div className="prod">
            <h1 className="heading">Hot<span className="heading___sub">Seller</span></h1>
            <div className="product___page container">
                {Object.keys(HotSellerProds).map(keyName => {
                    const hot_sellers = HotSellerProds[keyName]
                    return (
                        <div className="container" key={keyName}>
                            <div className="card prod___Style">
                                <img className="card-img-top" src={hot_sellers.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{hot_sellers.name}</h5>
                                    <p className="card-text">Color: {hot_sellers.colour}</p>
                                    <Link to={`/product/${keyName}`} className="btn btn-outline-dark">View Product</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}

export default HotSeller
