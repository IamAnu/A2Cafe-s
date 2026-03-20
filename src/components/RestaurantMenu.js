import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import getRestaurantMenu from "../config/restaurantMenuMockData";

function RestaurantMenu() {
    const { resId } = useParams();
    const location = useLocation();
    const [menuData, setMenuData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Get restaurant name from navigation state if available
    const restaurantName = location.state?.restaurantName || "Restaurant";

    useEffect(() => {
        fetchRestaurantMenu();
    }, [resId]);

    async function fetchRestaurantMenu() {
        try {
            setLoading(true);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500));

            // Generate mock menu for any restaurant ID
            const menu = getRestaurantMenu(resId, restaurantName);

            setMenuData(menu);
            console.log("Menu loaded successfully:", menu);
        } catch (error) {
            console.log("Error fetching restaurant menu:", error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <div className="restaurant-menu-container"><h2>Loading menu...</h2></div>;
    }

    if (!menuData) {
        return <div className="restaurant-menu-container"><h2>No menu available</h2></div>;
    }

    return (
        <div className="restaurant-menu-container">
            <h1>{menuData.name}</h1>
            <p className="cuisines">Cuisines: {menuData.cuisines.join(", ")}</p>
            <p className="rating">Rating: {menuData.avgRating} ⭐</p>

            <h2>Menu Items</h2>
            <div className="menu-items">
                {menuData.menu.map((item) => (
                    <div key={item.itemId} className="menu-item">
                        <h3>{item.name}</h3>
                        <p className="description">{item.description}</p>
                        <p className="category">{item.category}</p>
                        <p className="price">₹{item.price}</p>
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;  