import Navbar from "../Components/Navbar";
import CartItem from "../Components/CartItem";
import { useSelector } from 'react-redux';
import OrderSummary from "../Components/OrderSummary";

function Cart(){
    const items = useSelector((state : any)=> state.cart.items);
    return (
        <>
        <Navbar />
        
        {items.map((item)=>(
            <div key = {item.id}>
                {item.quantity >0 && <CartItem item = {item}/>}
            </div>
        ))}
       {items.length > 0 && <OrderSummary subtotal={items.reduce((acc, item) => acc + item.price * item.quantity, 0)} 
        deliveryFee={50} />}

       
        </>
    )
}

export default Cart;