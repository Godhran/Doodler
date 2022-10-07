import { useState } from "react";
import BrushSizeButton from "./buttons/BrushSizeButton";
import ExportButton from "./buttons/ExportButton";
import ShareButton from "./buttons/ShareButton";
import ToggleEraseButton from "./buttons/ToggleEraseButton";
import UndoButton from "./buttons/UndoButton";
import ClearButton from "./buttons/ClearButton";
import ColorToggleButton from "./buttons/ColorToggleButton";
import Colors from "../styles/colors";
import OpenButton from "./buttons/OpenButton";
import CloseButton from "./buttons/CloseButton";


const circleSizes=[5,10,15]
const strokeWidth = 3;
const containerSize = 50;
const buttonContainerSize = 50-strokeWidth;
const buttonPositionXY = strokeWidth/2;

const DrawingControls = ({brushSize,brushSizes, onChangeBrushSize, onPressUndo,onPressClear,onPressShare,handleExport,onPressToggleColor,color}) =>{
    const [controlsOpen, setControlsOpen] = useState(false)

    const handleControlVisibility = (value) =>{
        setControlsOpen(value)
    }

    return (
        <div style={{position:'absolute',left:0,top:0, width:60,  borderBottomRightRadius:25, padding:7.5, backgroundColor:`${Colors.grey}80`}}>
            {!controlsOpen&&<OpenButton onPressOpen={()=>{handleControlVisibility(true)}}/>}
            {controlsOpen&&
            <>
            <BrushSizeButton brushSize={brushSize} brushSizes={brushSizes} onChangeBrushSize={onChangeBrushSize}/>
            <ColorToggleButton onPressToggleColor={onPressToggleColor} color={color}/>
            {/* <ToggleEraseButton isErasing={isErasing} onToggleErase={onToggleErase}/> */}
            <UndoButton onPressUndo={onPressUndo}/>
            <ClearButton onPressClear={onPressClear}/>

            <ExportButton onPressExport={handleExport}/>
            {/* <ShareButton onPressShare={onPressShare}/> */}
            </>}
            {controlsOpen&&<CloseButton onPressClose={()=>{handleControlVisibility(false)}}/>}
        </div>
    );
}

export default DrawingControls;