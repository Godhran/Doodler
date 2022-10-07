import Colors from "../../styles/colors";
import ButtonContainer from "./ButtonContainer";

const containerSize = 50;

const fill = Colors.light

const iconStyle={
    fill
}

const ShareButton = ({onPressShare})=>{
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='ui-button' xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${containerSize} ${containerSize}`}  onClick={onPressShare}>
                    <ButtonContainer containerSize={containerSize}/>  
        <g  {...iconStyle}>
		<path d="M33,30.8c-1,0-2,0.3-2.8,0.8L22.2,26c0.1-0.5,0.2-0.9,0.2-1.4c0-0.5-0.1-1-0.2-1.4l7.9-5.5c0.8,0.6,1.9,1,3,1
			c2.9,0,5.2-2.3,5.2-5.2S35.9,8.2,33,8.2s-5.2,2.3-5.2,5.2c0,0.4,0,0.7,0.1,1.1l-8.1,5.6c-0.8-0.5-1.7-0.8-2.7-0.8
			c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2c1,0,1.9-0.3,2.7-0.8l8.2,5.7c-0.1,0.4-0.2,0.9-0.2,1.4c0,2.9,2.3,5.2,5.2,5.2
			s5.2-2.3,5.2-5.2S35.9,30.8,33,30.8z"/>
        </g>
    </svg>)
}

export default ShareButton;