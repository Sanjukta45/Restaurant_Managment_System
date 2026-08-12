import { addToCart } from "../../redux/slices/cartSlice";
import Button from "./Button";
import './FoodCard.css'
import { useDispatch } from "react-redux";

function FoodCard({food}){
    const dispatch = useDispatch();
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
                <Button onClick = {()=>{dispatch(addToCart(food))}} name = "Add to Cart" color="green" />
            </div>
        </div>
    )
}

export default FoodCard;