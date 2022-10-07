import ButtonContainer from "./ButtonContainer";
import Colors from "../../styles/colors";

const containerSize = 50;

const fill = Colors.light

const iconStyle={
    fill
}

const CloseButton = ({onPressClose})=>{
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='ui-button m-0' xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${containerSize} ${containerSize}`}  onClick={onPressClose}>
                    <ButtonContainer containerSize={containerSize}/>  
        <g {...iconStyle}>
 			<path d="M17.5,33.8l6.6-6.7c0.6-0.6,1.5-0.6,2.1,0l6.5,6.7c0.8,0.8,0.7,2,0,2.8l0,0c-0.8,0.8-2,0.7-2.8,0L25.5,32
 				c-0.2-0.2-0.6-0.2-0.8,0l-4.4,4.5c-0.8,0.8-2,0.8-2.8,0l0,0C16.8,35.8,16.7,34.5,17.5,33.8z" opacity={0.75}/>
 			<path d="M9.7,28l14.3-14.6c0.6-0.6,1.5-0.6,2.1,0L40.5,28c1.5,1.6,1.5,4.1-0.1,5.6l0,0c-1.6,1.5-4.1,1.5-5.6-0.1L25.5,24
 				c-0.2-0.2-0.5-0.2-0.8,0l-9.3,9.5c-1.5,1.6-4,1.6-5.6,0.1l0,0C8.2,32.1,8.2,29.6,9.7,28z"/>
        </g>
    </svg>)
}

export default CloseButton;