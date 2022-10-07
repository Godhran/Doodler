import ButtonContainer from "./ButtonContainer";
import Colors from "../../styles/colors";

const containerSize = 50;

const fill = Colors.light

const iconStyle={
    fill
}

const ClearButton = ({onPressClear})=>{
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='ui-button' xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${containerSize} ${containerSize}`}  onClick={onPressClear}>
                    <ButtonContainer containerSize={containerSize}/>  
                    <g  {...iconStyle}>
        
<path d="M25.1,41.2c9.1,0,16.5-7.4,16.5-16.5c0-9.1-7.4-16.5-16.5-16.5C16,8.2,8.6,15.6,8.6,24.7
	C8.6,33.8,16,41.2,25.1,41.2z M17.5,17c0.8-0.8,2.1-0.8,2.9,0l4.7,4.7l4.7-4.7c0.8-0.8,2.1-0.8,2.9,0c0.8,0.8,0.8,2.1,0,2.9L28,24.7
	l4.7,4.7c0.8,0.8,0.8,2.1,0,2.9c-0.8,0.8-2.1,0.8-2.9,0l-4.7-4.7l-4.7,4.7c-0.8,0.8-2.1,0.8-2.9,0c-0.8-0.8-0.8-2.1,0-2.9l4.7-4.7
	L17.5,20C16.7,19.2,16.7,17.9,17.5,17z"/>
    </g>
    </svg>)
}

export default ClearButton;