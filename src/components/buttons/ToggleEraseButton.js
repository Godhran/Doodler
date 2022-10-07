import ButtonContainer from "./ButtonContainer";

const containerSize = 50;

const iconStyle={
    fill:'#FFFFFF'
}

const ToggleEraseButton = ({isErasing,onToggleErase})=>{
    console.log({isErasing})
    return(<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${containerSize} ${containerSize}`}  onClick={onToggleErase}>
            <ButtonContainer containerSize={containerSize}/>  
            {isErasing?
		<g  {...iconStyle}>
        <path d="M32.2,36.9h-6.9l4.9-4.9l-12-12c-0.2-0.2-0.4-0.2-0.6,0l-6.1,6.1c-1.4,1.4-1.4,3.5,0,4.9l7.4,7.4c0.7,0.7,1.5,1,2.4,1
				c0,0,0,0,0,0h10.9c0.7,0,1.3-0.6,1.3-1.3C33.5,37.4,32.9,36.9,32.2,36.9z"/>
			<path d="M39,36.9h-2.2c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3H39c0.7,0,1.3-0.6,1.3-1.3S39.7,36.9,39,36.9z"/>
			<path d="M36.8,33.8c0-0.7-0.6-1.3-1.3-1.3h-2.2c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3h2.2C36.3,35.1,36.8,34.5,36.8,33.8z"/>
			<path d="M31.7,29.9c0.2,0.2,0.4,0.2,0.6,0l6.1-6.1c1.4-1.4,1.4-3.6,0-4.9L31,11.4c-1.4-1.4-3.5-1.4-4.9,0L20,17.6
				c-0.2,0.2-0.2,0.4,0,0.6L31.7,29.9z"/>
    </g>:
    
<path d="M40.2,11.1c-0.2-0.2-0.4-0.3-0.7-0.3c-2.1,0-7.5,3.9-12.9,9.2c-2.2,2.2-4.2,4.4-5.7,6.5c-0.2-0.1-0.4-0.1-0.6-0.1
	c-0.4,0-0.8,0.2-1.1,0.5c-0.6,0.6-0.6,1.5-0.1,2.1c-0.4,0.7-0.9,1.4-1.2,2.1c-1.4-0.5-3.1,0-4.3,1.2c-2.3,2.5,0.5,4.5-2.8,6.4
	c-1.8,1,5.9,1.5,8.4-1.2c1.1-1.2,1.4-2.7,1-4c0.6-0.3,1.3-0.7,2.1-1.2c0.3,0.2,0.6,0.4,1,0.4c0.4,0,0.8-0.2,1.1-0.5
	c0.5-0.5,0.6-1.1,0.3-1.7c2-1.5,4.2-3.5,6.5-5.7C37.5,18.4,41.5,12.4,40.2,11.1z" {...iconStyle}/>}
    </svg>)
}

export default ToggleEraseButton;