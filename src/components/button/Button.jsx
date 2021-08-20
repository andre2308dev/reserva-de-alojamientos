/**
 * Styles
 */
import './Button.css';

/**
 * Data
 */

import { hotelsData } from '../../DB/data';


function Button() {
    
    const handleButton = () => {
        const infoHotel = hotelsData;
        const [{name}] = infoHotel;
        alert(`El hotel ${name} a sido reservado`)
    }

    return(
        <button
        onClick={handleButton}
        className="button"
        >
            Reservar
        </button>
    )
}


export default Button;
