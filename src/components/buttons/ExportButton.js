import Colors from "../../styles/colors";
import ButtonContainer from "./ButtonContainer";
const containerSize = 50;

const fill = Colors.light

const iconStyle={
    fill
}

const ExportButton = ({onPressExport})=>{
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='ui-button' xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${containerSize} ${containerSize}`}  onClick={onPressExport}>
                    <ButtonContainer containerSize={containerSize}/>  
        <g  {...iconStyle}>
            
<path d="M36.6,18L32,13.5c-0.3-0.3-0.8-0.5-1.3-0.5H30v6.8c0,0.5-0.4,0.8-0.8,0.8h-11c-0.5,0-0.8-0.4-0.8-0.8v-6.8h-2.4
	c-1,0-1.8,0.8-1.8,1.8v19.8c0,1,0.8,1.8,1.8,1.8h20.3c1,0,1.8-0.8,1.8-1.8V19.3C37.1,18.8,36.9,18.4,36.6,18z"/>
<path d="M26.4,18.9h1.4c0.3,0,0.5-0.2,0.5-0.5v-3.8c0-0.3-0.2-0.5-0.5-0.5h-1.4c-0.3,0-0.5,0.2-0.5,0.5v3.8
	C25.9,18.7,26.2,18.9,26.4,18.9z"/>
        </g>
    </svg>)
}

export default ExportButton;