import ButtonContainer from "./ButtonContainer";
import Colors from "../../styles/colors";

const containerSize = 50;

const {light,grey} = Colors;

const fill = Colors.light

const iconStyle={
    fill
}
const ColorToggleButton = ({onPressToggleColor,color})=>{
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='ui-button' xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${containerSize} ${containerSize}`}  onClick={onPressToggleColor}>
                    <ButtonContainer containerSize={containerSize}/>  
        


                    {/* <polygon fill={color?'#FFFFFF':'#000000'} points="10.9,27.4 30.8,27.4 21.3,37.4 19,36.9 10.2,28.1 "/>
<polygon fill={color?'#FFFFFF':'#000000'} points="36,29.5 39.6,37.2 37.8,40.7 33.8,41 31.9,38 33,33 "/> */}
<g   {...iconStyle}>
    
<path d="M26.3,9c-0.2-0.5-0.7-0.8-1.2-0.8c-0.5,0-1,0.3-1.2,0.8c-3.3,7.3-9.3,16.6-9.3,21.7c0,5.8,4.7,10.5,10.5,10.5
	s10.5-4.7,10.5-10.5C35.6,25.6,29.7,16.2,26.3,9z M24.7,37.9c-3.9,0-7-3.2-7-7c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4
	c0,2.3,1.9,4.2,4.2,4.2c0.8,0,1.4,0.6,1.4,1.4C26.1,37.2,25.4,37.9,24.7,37.9z" fill={color?'#FFFFFF':'#000000'}/>
                    {/* <path d="M24.8,10.4c0-0.7-0.5-1.2-1.2-1.2c-0.7,0-1.2,0.5-1.2,1.2v2c-0.5,0.2-1,0.5-1.4,0.9L10,24.3
	c-1.4,1.4-1.4,3.7,0,5.1l7.9,7.9c1.4,1.4,3.7,1.4,5.1,0L34,26.2c1.4-1.4,1.4-3.7,0-5.1l-7.9-7.9c-0.4-0.4-0.9-0.7-1.4-0.9V10.4z
	 M11.7,26l10.7-10.7v2.3c0,0.7,0.5,1.2,1.2,1.2c0.7,0,1.2-0.5,1.2-1.2v-2.3l7.5,7.5c0.5,0.5,0.5,1.2,0,1.7l-1.6,1.6L11.7,26
	C11.7,26.1,11.7,26.1,11.7,26z M12.4,28.5h15.9l-7.1,7.1c-0.5,0.5-1.2,0.5-1.7,0L12.4,28.5z"/>
<path d="M36.9,28.7c-0.5-1-2-1-2.5,0l-3.2,6.1c-1.8,3.4,0.6,7.5,4.5,7.5s6.3-4.1,4.5-7.5L36.9,28.7z M33.3,35.9l2.3-4.4
	l2.3,4.4c0.9,1.8-0.3,3.9-2.3,3.9S32.4,37.6,33.3,35.9z" opacity={0.5}/> */}
</g>
    </svg>)
}

export default ColorToggleButton;