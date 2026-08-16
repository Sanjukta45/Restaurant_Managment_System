import './CartItem.css';


export default function CartItem({item}) {
    
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
                        A delicious cappuccino made with espresso
                        and steamed milk.
                    </p>

                    <span className="item-unit-price">
                        ₹{item.price}
                    </span>
                </div>
            </div>

            <div className="item-quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>

            <div className="item-price">
                <span>Total</span>
                <strong>₹{item.price}</strong>
            </div>

        </div>
    );
}