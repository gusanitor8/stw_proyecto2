import './Temperature.css'

function Temperature(props){
    return(
        <>
            <div className='temperature-container'>
                <h1 className='temperature-current'>{props.temperature}°</h1>
                <h5 className='temperature-city'>{props.city}</h5>
            </div>
        </>
    );
};

export default Temperature;