import '../style/Product.css';
import React from 'react';
import { useStateValue } from "./StateProvider";

const Product = props => {
    const {id, title, image, price, rating} = props;
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item onto the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    };

    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>★</p>
                    ))
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;