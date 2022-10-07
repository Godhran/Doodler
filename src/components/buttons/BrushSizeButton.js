import Colors from "../../styles/colors";
import ButtonContainer from "./ButtonContainer";

const circleSizes=[5,10,15]

const containerSize = 50;

const fill = Colors.light

const iconStyle={
    fill
}

const BrushSizeButton = ({brushSize, brushSizes, onChangeBrushSize})=>{
    console.log(brushSize, brushSizes[0]);
    return(<svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='ui-button' xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${containerSize} ${containerSize}`} onClick={onChangeBrushSize}>
            <ButtonContainer containerSize={containerSize}/>  
            <g  {...iconStyle}>
            {brushSize ===brushSizes[0]&&
            <g>
                <circle cx="25" cy="25" r={brushSizes[0]}/>
            </g>
            }
            {brushSize ===brushSizes[1]&&
            <g>
                <circle cx="25" cy="25" r={brushSizes[1]}/>
                <circle cx="25" cy="25" r={brushSizes[0]} stroke={fill} opacity='0.5' strokeWidth="2" fill="transparent"/>
            </g>
            }
            {brushSize ===brushSizes[2]&&
            <g>
                <circle cx="25" cy="25" r={brushSizes[2]}/>
                <circle cx="25" cy="25" r={brushSizes[1]} stroke={fill} opacity='0.5' strokeWidth="2" fill="transparent"/>
                <circle cx="25" cy="25" r={brushSizes[0]} stroke={fill} opacity='0.35' strokeWidth="2" fill="transparent"/>
            </g>
            }
            {brushSize ===brushSizes[3]&&
            <g>
                <circle cx="25" cy="25" r={brushSizes[3]}/>
                <circle cx="25" cy="25" r={brushSizes[2]} stroke={fill} opacity='0.5' strokeWidth="2" fill="transparent"/>
                <circle cx="25" cy="25" r={brushSizes[1]} stroke={fill} opacity='0.35' strokeWidth="2" fill="transparent"/>
                <circle cx="25" cy="25" r={brushSizes[0]} stroke={fill} opacity='0.25' strokeWidth="2" fill="transparent"/>
            </g>
            }
            {brushSize ===brushSizes[4]&&
            <g>
                <circle cx="25" cy="25" r={brushSizes[4]}/>
                <circle cx="25" cy="25" r={brushSizes[3]} stroke={fill} opacity='0.5' strokeWidth="2" fill="transparent"/>
                <circle cx="25" cy="25" r={brushSizes[2]} stroke={fill} opacity='0.35' strokeWidth="2" fill="transparent"/>
                <circle cx="25" cy="25" r={brushSizes[1]} stroke={fill} opacity='0.25' strokeWidth="2" fill="transparent"/>
                <circle cx="25" cy="25" r={brushSizes[0]} stroke={fill} opacity='0.15' strokeWidth="2" fill="transparent"/>
            </g>
            }
            </g>
</svg>)
}

export default BrushSizeButton;