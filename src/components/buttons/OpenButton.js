// <!-- Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In  -->
// <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px"
// 	 height="50px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
// <style type="text/css">
// 	.st0{fill:#751F1F;}
// </style>
// <defs>
// </defs>
// <rect class="st0" width="50" height="50"/>
// <g>
// 	<g>
// 		<g>
		// 	<path d="M32.7,16.3L26.2,23c-0.6,0.6-1.5,0.6-2.1,0l-6.5-6.7c-0.8-0.8-0.7-2,0-2.8l0,0c0.8-0.8,2-0.7,2.8,0l4.4,4.5
		// 		c0.2,0.2,0.6,0.2,0.8,0l4.4-4.5c0.8-0.8,2-0.8,2.8,0l0,0C33.5,14.3,33.5,15.5,32.7,16.3z"/>
		// </g>
		// <g>
		// 	<path d="M40.5,22L26.2,36.6c-0.6,0.6-1.5,0.6-2.1,0L9.7,22c-1.5-1.6-1.5-4.1,0.1-5.6l0,0c1.6-1.5,4.1-1.5,5.6,0.1l9.3,9.5
		// 		c0.2,0.2,0.5,0.2,0.8,0l9.3-9.5c1.5-1.6,4-1.6,5.6-0.1l0,0C42,18,42,20.5,40.5,22z"/>
// 		</g>
// 	</g>
// </g>
// <g>
// 	<g>
// 		<g>
// 			<path d="M17.5,33.8l6.6-6.7c0.6-0.6,1.5-0.6,2.1,0l6.5,6.7c0.8,0.8,0.7,2,0,2.8l0,0c-0.8,0.8-2,0.7-2.8,0L25.5,32
// 				c-0.2-0.2-0.6-0.2-0.8,0l-4.4,4.5c-0.8,0.8-2,0.8-2.8,0l0,0C16.8,35.8,16.7,34.5,17.5,33.8z"/>
// 		</g>
// 		<g>
// 			<path d="M9.7,28l14.3-14.6c0.6-0.6,1.5-0.6,2.1,0L40.5,28c1.5,1.6,1.5,4.1-0.1,5.6l0,0c-1.6,1.5-4.1,1.5-5.6-0.1L25.5,24
// 				c-0.2-0.2-0.5-0.2-0.8,0l-9.3,9.5c-1.5,1.6-4,1.6-5.6,0.1l0,0C8.2,32.1,8.2,29.6,9.7,28z"/>
// 		</g>
// 	</g>
// </g>
// </svg>

import ButtonContainer from "./ButtonContainer";
import Colors from "../../styles/colors";
import props from "../../styles/props";

const containerSize = 50;

const fill = Colors.light

const iconStyle={
    fill
}

const OpenButton = ({onPressOpen})=>{
    return(
        <svg id={`open-button`} className='ui-button m-0' viewBox={`0 0 ${containerSize} ${containerSize}`}  onClick={onPressOpen} {...props.svg}>
                    <ButtonContainer containerSize={containerSize}/>  
        <g {...iconStyle}>
        <path d="M32.7,16.3L26.2,23c-0.6,0.6-1.5,0.6-2.1,0l-6.5-6.7c-0.8-0.8-0.7-2,0-2.8l0,0c0.8-0.8,2-0.7,2.8,0l4.4,4.5
				c0.2,0.2,0.6,0.2,0.8,0l4.4-4.5c0.8-0.8,2-0.8,2.8,0l0,0C33.5,14.3,33.5,15.5,32.7,16.3z" opacity={0.75}/>
			<path d="M40.5,22L26.2,36.6c-0.6,0.6-1.5,0.6-2.1,0L9.7,22c-1.5-1.6-1.5-4.1,0.1-5.6l0,0c1.6-1.5,4.1-1.5,5.6,0.1l9.3,9.5
				c0.2,0.2,0.5,0.2,0.8,0l9.3-9.5c1.5-1.6,4-1.6,5.6-0.1l0,0C42,18,42,20.5,40.5,22z"/>
        </g>
    </svg>)
}

export default OpenButton;