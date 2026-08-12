import Button from "./Button";
import './FoodCard.css'

function FoodCard({food}){
    return(
        <div className="foodCard">
            <img className="foodImage" src={food.image} alt="cappuccino image" />
            <div className="foodDescription">
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <div className="priceSection">
                    <p>₹{food.price}</p>
                    <p>⭐️ {food.rating}</p>
                </div>
                <Button name = "Add to Cart" color="green" />
            </div>
        </div>
    )
}

export default FoodCard;