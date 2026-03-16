import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../config/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// Body Component
function Body() {

    // const [listofRestaurant, setListofRestraunt] = useState(restaurantList)
    const [listofRestaurant, setListofRestraunt] = useState([]);
    const [listOfRestroCopy, setListOfRestroCopy] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
        console.log("Use Effect Called");
    }, [])

    const fetchData = async () => {

        try {
            const response = await fetch(
                "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.99077958483023&lng=79.44214638322592&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await response.json();
            console.log("Full JSON:", json);

            // Find the card which contains restaurants
            const restaurantCard = json?.data?.cards?.find(
                (card) =>
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );

            // console.log("Restaurant Card:", restaurantCard);

            const restaurants =
                restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            // console.log("Restaurants Array:", restaurants);

            setListofRestraunt(restaurants);
            setListOfRestroCopy(restaurants);

        } catch (error) {
            console.error("Error fetching data:", error);
        }


    };

    // if (listofRestaurant.length === 0) {
    //     return <Shimmer />
    // }

    return listofRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body">

            <div className="filter">
                <div className="search-wrapper">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for restaurant, cuisine or a dish"
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}

                    />
                    <button className="search-bar"
                        onClick={() => {
                            console.log(searchText)

                            const searchedRes = listofRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                            searchedRes.length === 0 ? alert("No restaurant found") : setListOfRestroCopy(searchedRes);

                            // setListofRestraunt(filteredRestaurant);
                        }}
                    >search
                    </button>
                    {/* setListofRestraunt(restaurants) */}
                </div>
                <button
                    className="filter-btn"
                    // Filter restaurant 
                    onClick={() => {
                        const filteredRestro = listofRestaurant.filter((res) => res.info.avgRating >= 4);
                        setListOfRestroCopy(filteredRestro);
                    }}>
                    Filter Top Rated Restaurant
                </button>
            </div>
            <div className="restaurant-container">
                {listOfRestroCopy.map((restaurant) => (<RestaurantCard key={restaurant.info.id} value={restaurant} />

                ))}
            </div>
        </div>

    );

}

export default Body;
