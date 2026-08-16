import { addToCart } from "../../redux/slices/cartSlice";
import Button from "./Button";
import './FoodCard.css'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function FoodCard({food}){
    const dispatch = useDispatch();
    const cartItem = useSelector((state : any)=> state.cart.items);
    const isAddedItem = (cartItem).some((item)=> item.id === food.id);
    const navigate = useNavigate();

   
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
                <Button onClick = {()=>{isAddedItem ?  navigate("/cart") : dispatch(addToCart(food))}} 
                name = {isAddedItem ? "Go To Cart" : "Add to cart"}
                color="green" />
            </div>
        </div>
    )
}

export default FoodCard;