// Restaurant Card Component
import { useNavigate } from "react-router-dom";

const styleCard = {

    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    // backgroundColor: '#bababa',
    backgroundColor: 'rgb(219 214 206)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
};

const RestaurantCard = (props) => {
    const { info } = props.value;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/restroMenu/${info.id}`);
        // console.log("Navigating to restaurant menu for ID:", info.id);

    };

    return (
        <div className="restaurant-card" style={styleCard} onClick={handleClick}>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`} alt={info.name} className='restaurant-card-img' />
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(", ")}</h4>
            <h4>{info.avgRating} ⭐</h4>
            <h4>{info.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;  