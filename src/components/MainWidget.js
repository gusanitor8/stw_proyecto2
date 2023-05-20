import './MainWidget.css';
import Temperature from './Temperature';
import mountain from '../images/snowy_mountain.svg';
import { useEffect, useState } from 'react';


function MainWidget(){
    const [bgImage, setBgImage] = useState(mountain);
    const [city, setCity] = useState('Guatemala City, Guatemala');
    const [temperature, setTemperature] = useState(27);

    useEffect(() => {}, [temperature]);

    return(
        <>
            <div className='main-widget-container'>
                <div className='main-widget-background'>
                    <Temperature temperature={temperature} city={city}/>
                    <img className='main-widget-mountain' src={bgImage}></img>                    
                </div>
            </div>
        </>
    );
};

export default MainWidget;