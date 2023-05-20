import './MainWidget.css';
import mountain from '../images/snowy_mountain.svg';
function MainWidget(){
    return(
        <>
            <div className='main-widget-container'>
                <div className='main-widget-background'>
                    <img className='main-widget-mountain' src={mountain}>
                        
                    </img>
                </div>
            </div>
        </>
    );
};

export default MainWidget;