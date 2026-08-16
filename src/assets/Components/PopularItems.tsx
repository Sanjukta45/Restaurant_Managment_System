import './MenuSection.css';
import {menuItems} from '../../data/menuData';
import FoodCard from './FoodCard';

function PopularItems(){
    console.log(menuItems);
    return(
        <div className="menu-section">
            <div className="menuHeader"><h1>Our Popular Items</h1></div>
            <div className="menuItems">
                {menuItems.filter((food)=> food.id % 4  === 0)
                .map((food)=>(
                    <div key = {food.id}>
                        <FoodCard food = {food} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularItems;