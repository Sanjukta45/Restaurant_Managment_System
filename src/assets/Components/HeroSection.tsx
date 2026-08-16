import Button from "./Button";
import "./HeroSection.css";
import heroImage from "../Images/heroImage.jpg";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();
    return (
        <div className="hero-section">
            <img className="heroImage" src={heroImage} alt="image not found" />
            <div className="heroDesc">
            <h1>Welcome to Our Restaurant</h1>
            <p>Experience the best dining with us.</p>
            <Button onClick={()=>{navigate("/menu")}} name = {"Explore Menu"} color={"green"}/>
           </div>
        </div>
    );
}
