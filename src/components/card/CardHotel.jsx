/**
 * Styles
 */

import './CardHotel.css';
/**
 * icons
 */
//import marcador from './../icons/marcador-de-posición.svg';

/**
 * Data
 */
import { hotelsData } from '../../DB/data';

/**
 * Components
 */
import Button from '../button/Button';


export default function CardHotel () {
    return(
        <div className="card-container">
            {
                hotelsData.map((card) => {
                    const {photo, name, availabilityFrom, availabilityTo, description, city, country, rooms, price} = card;
                    
                    return(
                        <Card
                            photo={photo}
                            name={name}
                            description={description}
                            city={city}
                            country={country}
                            rooms={rooms}
                            price={price}
                            availabilityFrom={availabilityFrom}
                            availabilityTo={availabilityTo}
                        />
                    )
                })
            }
        </div>
    )
}

function Card (props) {
    const {photo, name, availabilityFrom, availabilityTo, description, city, country, rooms, price} = props;
    return(
        <div className="card">
            <div>
                <img width="100%" src={photo} alt="Esto es una foto del Hotel"/>
            </div>
            <div className="container-description">
                <h2 className="name">{name}</h2>
                <p className="date from">{availabilityFrom}, desde esta fecha</p>
                <p className="date to">{availabilityTo}, hasta esta fecha</p>
                <p className="description">{description}</p>
            </div> 
            <div>
                <img src="" alt="" />
                <p className="city-country">{city}, {country}</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>{rooms} habitaciones</p>
                <span>{price}</span>
            </div>
            <Button />
        </div>
    )
}


