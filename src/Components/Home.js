import React from 'react'
import shoeCover from './imgs/shoe-cover.jpg'
import {Link} from 'react-router-dom'
import HotSellerProds from '../HotSeller.json'

function Home() {
    return (
        <div className="mx-auto">
            <h1 className="heading">Lace <span className="heading___sub">IT</span></h1>
            <img className="home___image" src={shoeCover} alt="abc"/>
            <p className="home___para container">We Provide Best Quality Products in very reasonable prices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus purus eu lectus blandit, quis convallis augue commodo. Fusce ultrices iaculis risus, ac iaculis nunc rutrum non. Pellentesque semper sapien in quam blandit imperdiet. Proin luctus massa eget magna congue, eu aliquam orci blandit. Etiam justo lacus, tristique a commodo eget, fermentum eu nulla.</p>
            <Link to="/product" type="button" className="btn btn-secondary">View All Products</Link>
        
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

export default Home
