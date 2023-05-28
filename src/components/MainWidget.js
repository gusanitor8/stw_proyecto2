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
            setBgImage(mountain);
            updatedStyle = {background: 'linear-gradient(to bottom, #1B052E, #5757AA)'};
            setDynamicStyle(updatedStyle);

        } else {            
            setBgImage(mountainDay);
            updatedStyle = {background: 'linear-gradient(to bottom, #3CAECC, #E5E5C4)'};
            setDynamicStyle(updatedStyle);
        }
    }, [props.isNight]);


    useEffect(() => {        
        console.log('lluevia: ', props.rainRate);
        if(props.description.toLowerCase().includes('rain') || props.rainRate > 0){
            setClassNameRain('main-widget-background-rain');            
        }
        else if (props.rainRate === 0 || props.rainRate === undefined){
            setClassNameRain('main-widget-background');
        }
    },[props.rainRate, props.description]);


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
                        <Temperature 
                            temperature={props.temperature} 
                            city={props.city}
                            description={props.description}/>
                    </div>
                    <img className='main-widget-mountain' src={bgImage}></img>                    
                </div>
            </div>
        </>
    );
};

export default MainWidget;