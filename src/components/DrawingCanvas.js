import { useRef, useState,useEffect } from "react";
// import { ReactSketchCanvas } from "react-sketch-canvas";
import CanvasDraw from "react-canvas-draw";
import DrawingControls from "./DrawingControls";
import './../styles/canvas.css'
import Colors from "../styles/colors";
import clouds from "../data/images/clouds";
import { toast } from 'react-toastify';
import { saveAs } from 'file-saver';
const styles = {
    // border: '0.0625rem solid #9c9c9c',
    // borderRadius: '0.25rem',
    width:'100%',
    height:'100%',
    backgroundColor:'transparent'
    // width:'200px',

  };

const brushSizes = [12,9,6,3,1]


const DrawingCanvas = () =>{
    const [containerWidth,setContainerWidth] = useState(null)
    const [brushSize,setBrushSize] = useState(brushSizes[0])
    const [isErasing,setIsErasing] = useState(false)
    const [hasHistory,setHasHistory] = useState(false)
    const [image, setImage] = useState(null)
    const [strokeWhite,setStrokeWhite] = useState(true)
    const [hideUI, setHideUI] = useState(false)
    const exportCanvasRef = useRef(null)
    const canvasRef = useRef(null)
    const containerRef = useRef(null)
    
    const handleBrushSizeChange = ()=>{
        switch(brushSize){
            case brushSizes[0]: setBrushSize(brushSizes[1]);break;
            case brushSizes[1]: setBrushSize(brushSizes[2]);break;
            case brushSizes[2]: setBrushSize(brushSizes[3]);break;
            case brushSizes[3]: setBrushSize(brushSizes[4]);break;
            case brushSizes[4]: setBrushSize(brushSizes[0]);break;
        }
    }


    const handleToggleErase = ()=>{
        canvasRef.current.eraseMode(!isErasing)
        setIsErasing(!isErasing)
    }

    const handleUndoPress = ()=>{
    canvasRef.current.undo()
}

const handleShare = ()=>{
    console.log(canvasRef.current.getDataURL('.png', true))
}

const handleClear = ()=>{
    //@ts-ignore
canvasRef.current.clear()
}

const handleExport = ()=>{
    // canvasRef.current.savePNG()
    // toast("Doodle saved!")

    const canvasElement = canvasRef.current;
    // const img = canvasElement.toDataURL("image/png");
    // console.log(img);
    // 
    const base64 = canvasRef.current.getDataURL();
    saveAs(base64, "doodle.png");
    toast(`[◉"] *click* Snapshot saved!`);
}

const handleToggleColor = ()=>{
    setStrokeWhite(!strokeWhite)
}
useEffect(()=>{
    if(containerRef.current){
        setContainerWidth(containerRef.current.offsetWidth)
    }
},[containerRef])

useEffect(()=>{
    const randomImage = clouds[Math.floor(Math.random()*clouds.length)];
    console.log(randomImage)
    setImage(randomImage)
},[containerRef])

useEffect(()=>{
    if(canvasRef.current&&containerRef.current&&image){
        console.log(canvasRef.current)
    let averageColor = canvasRef.current.getAverageColor();
    console.log('ere')
    console.log({averageColor})}
},[image])

const props = {
    hideGrid:true,
    // canvasWidth:'100%',
    catenaryColor:'transparent',
    imgSrc:image
}

// const imgSrc='https://images.pexels.com/photos/266519/pexels-photo-266519.jpeg?auto=compress&cs=tinysrgb&w=1600',
    return (
        <div ref={containerRef} className='col-sm-12 col-md-9 p-0 mx-auto my-auto canvas-container overflow-hidden' style={{borderRadius:25}}>
            <div className='overflow-hidden position-relative' style={{borderRadius:25}}>
            {containerWidth&&image&&<CanvasDraw ref={canvasRef} brushColor={strokeWhite?'#FFFFFF':'#000000'} canvasWidth={containerWidth} canvasHeight={containerWidth} brushRadius={brushSize} lazyRadius={0} {...props}/>}
            </div>
            {!hideUI&&containerWidth&&
            <DrawingControls 
            brushSize={brushSize} 
            brushSizes={brushSizes} 
            onChangeBrushSize={handleBrushSizeChange} onPressUndo={handleUndoPress}  hasHistory={canvasRef?.current?.lines.length>0} handleExport={handleExport} isErasing={isErasing} onPressClear={handleClear} onPressShare={handleShare} onPressToggleColor={handleToggleColor} color={strokeWhite}/>}
        </div>
    );
}

export default DrawingCanvas;