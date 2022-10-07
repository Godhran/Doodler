import Colors from "../../styles/colors";


const strokeWidth = 3;
const roundedEdgeRadius = 17.5;

const fill=Colors.light;

const style={
    stroke:fill,
    fill:`${fill}20`,
    strokeWidth
}

const ButtonContainer = ({containerSize})=>{
const buttonContainerSize = containerSize-strokeWidth;
const buttonPositionXY = strokeWidth/2;
    return(
        <rect x={buttonPositionXY} y={buttonPositionXY} width={buttonContainerSize} height={buttonContainerSize} rx={roundedEdgeRadius} {...style} />
    )
}

export default ButtonContainer;