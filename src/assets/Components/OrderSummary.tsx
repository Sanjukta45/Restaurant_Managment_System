import './OrderSummary.css';

interface OrderSummaryProps {
    subtotal: number;
    deliveryFee: number;
}

export default function OrderSummary({
    subtotal,
    deliveryFee
}: OrderSummaryProps) {

    const gst = subtotal * 0.05;
    const total = subtotal + deliveryFee + gst;

    return (
        <div className="order-summary">

            <h2>Price Details</h2>

            <div className="price-row">
                <span>Item Total</span>
                <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="price-row">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee.toFixed(2)}</span>
            </div>

            <div className="price-row">
                <span>GST (5%)</span>
                <span>₹{gst.toFixed(2)}</span>
            </div>

            <div className="divider"></div>

            <div className="total-row">
                <strong>Total Amount</strong>
                <strong>₹{total.toFixed(2)}</strong>
            </div>

            <p className="savings">
                🎉 You're getting a great deal on this order!
            </p>
            <div className='checkout'>
            <button className="checkout-btn">
                Proceed to Checkout
            </button>
            </div>
         </div>
    );
}