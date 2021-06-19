import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const product = (props) => {
    // console.log(props);
    const {img, name, seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h3  className="product-name">{name}</h3>
            <br />
            <p><small>by:{seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in stock - Order soon</small></p>
            <br />
            <button className="add-to-cart-btn"
            // when use parameter must be use a arrow function other wayse not use only use name
                    onClick={() => props.handleAddProduct(props.product)}
                        
                        >
                
                 <FontAwesomeIcon className="icon" icon={faShoppingCart} />Add to cart
                 
                 </button>
            </div>
            
        </div>
    );
};

export default product;