/**
 * Styles
 */

import './CardHotel.css';

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
            <div className="text">
                <h2 className="name">{name}</h2>
                <p className="date">hola{availabilityFrom}</p>
                <p className="date">hola{availabilityTo}</p>
            </div> 
                <p className="description">{description}</p>
            <div>
                <span>{city},   </span>
                <span>{country}</span>
            </div>
            <p>{rooms} habitaciones {price}</p>
            <Button />
        </div>
    )
}


