import Navbar from "../Components/Navbar";
import CartItem from "../Components/CartItem";
import { useSelector } from 'react-redux';

function Cart(){
    const items = useSelector((state : any)=> state.cart.items);
    return (
        <>
        <Navbar />
        <h1>Cart Page Added</h1>
        {items.map((item)=>(
            <div key = {item.id}>
                 <CartItem item = {item}/>
            </div>
        ))}
       
        </>
    )
}

export default Cart;