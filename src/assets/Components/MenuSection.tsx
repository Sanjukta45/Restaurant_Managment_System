import './MenuSection.css'
function MenuSection(){
    return(
        <div className="menu-section">
            <div className="menuHeader"><h1>Our Menu</h1></div>
            <div className= "menuCategories" >
                <ul className="menuCategoriesList">
                    <li>Starters</li>
                    <li>Main Course</li>
                    <li>Deserts</li>
                    <li>Beverages</li>
                </ul>
            </div> 
            
            <div className="menu-items">
                
            </div>
        </div>
    )
}

export default MenuSection;