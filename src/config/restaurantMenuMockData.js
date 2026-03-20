// Mock menu data - works with any restaurant ID from live API
const menuTemplates = [
    {
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.5,
        menu: [
            {
                itemId: 1,
                name: "Margherita Pizza",
                description: "Fresh mozzarella, basil, tomato sauce",
                price: 299,
                category: "Pizzas"
            },
            {
                itemId: 2,
                name: "Pepperoni Pizza",
                description: "Pepperoni, mozzarella, tomato sauce",
                price: 349,
                category: "Pizzas"
            },
            {
                itemId: 3,
                name: "Garlic Bread",
                description: "Crispy garlic bread with cheese",
                price: 99,
                category: "Starters"
            },
            {
                itemId: 4,
                name: "Coke",
                description: "Cold drink",
                price: 49,
                category: "Beverages"
            }
        ]
    },
    {
        cuisines: ["Sandwich", "Salads", "Wrap", "Healthy Food"],
        avgRating: 4.2,
        menu: [
            {
                itemId: 1,
                name: "6\" Italian BMT",
                description: "6 inch sandwich with ham, beef, pepperoni",
                price: 199,
                category: "Sandwiches"
            },
            {
                itemId: 2,
                name: "6\" Veggie Delite",
                description: "6 inch vegetarian sandwich",
                price: 149,
                category: "Sandwiches"
            },
            {
                itemId: 3,
                name: "Caesar Salad",
                description: "Fresh greens with Caesar dressing",
                price: 179,
                category: "Salads"
            },
            {
                itemId: 4,
                name: "Bottled Water",
                description: "500ml bottled water",
                price: 20,
                category: "Beverages"
            }
        ]
    },
    {
        cuisines: ["Burgers", "Fast Food", "Beverages"],
        avgRating: 4.0,
        menu: [
            {
                itemId: 1,
                name: "Big Mac",
                description: "Two beef patties with special sauce",
                price: 249,
                category: "Burgers"
            },
            {
                itemId: 2,
                name: "McChicken Burger",
                description: "Grilled chicken burger",
                price: 159,
                category: "Burgers"
            },
            {
                itemId: 3,
                name: "French Fries",
                description: "Crispy golden fries",
                price: 99,
                category: "Sides"
            },
            {
                itemId: 4,
                name: "Coke",
                description: "Cold drink",
                price: 49,
                category: "Beverages"
            }
        ]
    },
    {
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.3,
        menu: [
            {
                itemId: 1,
                name: "Chicken Bucket",
                description: "5 piece crispy fried chicken",
                price: 399,
                category: "Main Course"
            },
            {
                itemId: 2,
                name: "Zinger Burger",
                description: "Spicy crispy chicken burger",
                price: 199,
                category: "Burgers"
            },
            {
                itemId: 3,
                name: "Coleslaw",
                description: "Crispy coleslaw",
                price: 79,
                category: "Sides"
            },
            {
                itemId: 4,
                name: "Sprite",
                description: "Cold drink",
                price: 49,
                category: "Beverages"
            }
        ]
    }
];

// Function to generate mock menu for any restaurant ID
const getRestaurantMenu = (restaurantId, restaurantName = "Restaurant") => {
    // Use restaurant ID to pick a template (cycles through templates)
    const templateIndex = (parseInt(restaurantId) || 0) % menuTemplates.length;
    const template = menuTemplates[templateIndex];

    return {
        name: restaurantName,
        cuisines: template.cuisines,
        avgRating: template.avgRating,
        menu: template.menu
    };
};

export { getRestaurantMenu, menuTemplates };
export default getRestaurantMenu;
