import Button from "./Button";
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <div className="hero-section">
            <img className="heroImage" src="" alt="" />
            <div className="heroDesc">
            <h1>Welcome to Our Restaurant</h1>
            <p>Experience the best dining with us.</p>
            <Button name = {"Explore Menu"} color={"green"}/>
           </div>
        </div>
    );
}