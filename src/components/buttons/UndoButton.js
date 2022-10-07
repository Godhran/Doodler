import ButtonContainer from "./ButtonContainer";
import Colors from "../../styles/colors";

const containerSize = 50;

const fill = Colors.light

const iconStyle={
    fill
}

const UndoButton = ({onPressUndo})=>{
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='ui-button' xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${containerSize} ${containerSize}`}  onClick={onPressUndo}>
                    <ButtonContainer containerSize={containerSize}/>  
        
<path d="M26,12.8V9.7l-10.2,6l10.2,6v-3.3c3.7,0.7,6.5,3.9,6.5,7.8c0,4.4-3.6,8-7.9,8s-8-3.6-8-8c0-1.2,0.2-2.3,0.7-3.3l-5-2.3
	c-0.8,1.8-1.2,3.7-1.2,5.6c0,7.4,6.1,13.5,13.5,13.5S38,33.6,38,26.2C38,19.3,32.8,13.5,26,12.8z" {...iconStyle}/>
    </svg>)
}

export default UndoButton;