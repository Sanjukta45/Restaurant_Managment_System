import {useState} from "react";
import './Navbar.css';
import Button from "./Button";

function Navbar(){
    const [isMenu, showMenu] = useState<boolean>(false);
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
                    <li><Button name = "Login" color = "white"/></li>
                    <li><Button name = "Get Started" color = "orange"/></li>
            </ul>
            <div className="hamburger" onClick={()=>{showMenu(!isMenu)}}>☰</div>
            
        </div>
        </>
    )
}

export default Navbar;