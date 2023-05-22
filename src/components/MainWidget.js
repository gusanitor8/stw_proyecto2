import './MainWidget.css';
import Temperature from './Temperature';
import mountain from '../images/snowy_mountain.svg';
import mountainDay from '../images/snowy_mountain_day.svg';
import { useEffect, useState } from 'react';


function MainWidget(props){
    const [bgImage, setBgImage] = useState(mountain);
    const [dynamicStyle, setDynamicStyle] = useState({});  
    const [classNameRain,setClassNameRain] = useState('main-widget-background');


    // Esto deberia ser con dia y noche, no con temperatura
    useEffect(() => {
        let updatedStyle = {};

        if(props.isNight){
            setBgImage(mountainDay);
            updatedStyle = {background: 'linear-gradient(to bottom, #3CAECC, #E5E5C4)'};
            setDynamicStyle(updatedStyle);

        } else {
            setBgImage(mountain);
            updatedStyle = {background: 'linear-gradient(to bottom, #1B052E, #5757AA)'};
            setDynamicStyle(updatedStyle);
        }
    }, [props.isNight]);


    useEffect(() => {        
        if(props.rain > 2){
            setClassNameRain('main-widget-background-rain');
            
        }
    },[props.rainRate]);

    useEffect(() => {
        let updatedStyle = {};
        console.log(props.weatherCode);
        if(props.weatherCode > 800 && props.weatherCode < 805){
            updatedStyle = {
                background: 'linear-gradient(to bottom, #3B4B66, #A9A9BF)',                
            };            
            setDynamicStyle(updatedStyle);
        }
        
    },[props.weatherCode]);

    return(
        <>
            <div className='main-widget-container'>
                <div className={classNameRain} style={dynamicStyle}>
                    <div className='temperature-component-container'>
                        <Temperature temperature={props.temperature} city={props.city}/>
                    </div>
                    <img className='main-widget-mountain' src={bgImage}></img>                    
                </div>
            </div>
        </>
    );
};

export default MainWidget;