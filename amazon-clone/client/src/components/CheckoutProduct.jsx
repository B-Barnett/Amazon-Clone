import React from 'react';
import "../style/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = props => {
    const {id, title, image, price, rating} = props;
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div>
            <div className="checkout_product">
                <img className="checkout_product_img" src={image} alt=""/>
            </div>
            <div className="checkout_product_info">
                <p className="checkout_product_title">
                    {title}
                </p>
                <p className="checkout_product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout_product_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>★</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;