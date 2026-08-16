import {useState} from "react";
import './Navbar.css';
import Button from "./Button";
import { useSelector } from "react-redux";

function Navbar(){
    const [isMenu, showMenu] = useState<boolean>(false);
    const cartItems = useSelector((state: any) => state.cart.items);
    const totalItems = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
    return(
        <>
        <div className="navBar">
            <div className='logoPart'>
            <img className="logoImg" src='../app_icon.svg' alt="logo_img" />
            <p>RestoFlow</p>
            </div>
            
            <ul className={!isMenu ? "listItems" : "listItems active"}>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Menu">Menu</a></li>
                    <li><a href = "About">About</a></li>
                    <li><a href = "Contact">Contact</a></li>
                    <li><Button onClick={()=>{}} name = "Login" color = "green"/></li>
            <li className="cartItem">
            <Button onClick={() => {}} name="Cart" color="#ff6b35"/><span className="cartBadge">{totalItems}</span></li>            
            </ul>
            <div className="hamburger" onClick={()=>{showMenu(!isMenu)}}>☰</div>
            
        </div>
        </>
    )
}

export default Navbar;