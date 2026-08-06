import Button from "./Button";
import "./HeroSection.css";
import heroImage from "../Images/heroImage.jpg";

export default function HeroSection() {
    return (
        <div className="hero-section">
            <img className="heroImage" src={heroImage} alt="image not found" />
            <div className="heroDesc">
            <h1>Welcome to Our Restaurant</h1>
            <p>Experience the best dining with us.</p>
            <Button name = {"Explore Menu"} color={"green"}/>
           </div>
        </div>
    );
}
