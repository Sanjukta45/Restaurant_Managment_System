import { useState } from 'react';
import './MenuSection.css';
import {menuItems} from '../../data/menuData';
import FoodCard from './FoodCard';

function MenuSection(){
    const [category, setCategory] = useState<String>("starters");
    console.log(menuItems);
    return(
        <div className="menu-section">
            <div className="menuHeader"><h1>Our Menu</h1></div>
            <div className= "menuCategories" >
                <ul className="menuCategoriesList">
                    <li onClick={()=>{setCategory("starters")}}>Starters</li>
                    <li onClick={()=>{setCategory("main-course")}}>Main Course</li>
                    <li onClick={()=>{setCategory("desserts")}}>Deserts</li>
                    <li onClick={()=>{setCategory("beverages")}}>Beverages</li>
                </ul>
            </div> 
            
            <div className="menuItems">
                {menuItems.filter((food)=> food.category === category)
                .map((food)=>(
                    <div key = {food.id}>
                        <FoodCard food = {food} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuSection;