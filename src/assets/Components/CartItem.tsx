import { decreaseItem, increaseItem } from '../../redux/slices/cartSlice';
import './CartItem.css';
import { useDispatch } from 'react-redux';

export default function CartItem({item}) {
    const dispatch = useDispatch();
    return (
        <div className="item-container">

            <div className="item-about">
                <img
                    className="item-image"
                    src={item.image}
                    alt="Cappuccino"
                />

                <div className="item-desc">
                    <h3>{item.name}</h3>

                    <p>
                        {item.description}
                    </p>

                    <span className="item-unit-price">
                        ₹{item.price}
                    </span>
                </div>
            </div>

            <div className="item-quantity">
                <button onClick={()=>dispatch(decreaseItem(item))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={()=>dispatch(increaseItem(item))}>+</button>
            </div>

            <div className="item-price">
                <span>Total</span>
                <strong>₹{item.price * item.quantity}</strong>
            </div>

        </div>
    );
}