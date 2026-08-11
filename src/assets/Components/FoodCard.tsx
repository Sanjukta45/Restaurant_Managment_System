import coffee from "../Images/cappuccino.jpg";
import Button from "./Button";
import './FoodCard.css'

function FoodCard(){
    return(
        <div className="foodCard">
            <img className="foodImage" src={coffee} alt="cappuccino image" />
            <div className="foodDescription">
                <h3>Cappuccino</h3>
                <p>Classic espresso topped with steamed milk and creamy foam.</p>
                <div className="priceSection">
                    <p>₹159</p>
                    <p>⭐️4.8</p>
                </div>
                
                <Button name = "Add to Cart" color="green" />
            </div>
        </div>
    )
}

export default FoodCard;