import React, { useState, useEffect, useRef } from "react";
import Clouds from './../../assets/images/clouds1.jpg'

const colors = ["black", "white", "red", "green", "blue", "yellow", "#ffff83"];

function fileToDataUri(field) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      resolve(reader.result);
    });

    reader.readAsDataURL(field);
  });
}

const renderCanva = (canvaRef, pencilColor, pencilSize, image) => {
  const canvasElement = canvaRef.current;
  const context = canvasElement.getContext("2d");

  // if an image is present,
  // the image passed as a parameter is drawn in the canvas
  if (image) {
    const imageWidth = image.width;
    const imageHeight = image.height;

    // rescaling the canvas element
    canvasElement.width = imageWidth;
    canvasElement.height = imageHeight;

    context.drawImage(image, 0, 0, imageWidth, imageHeight);
  }

  let isDrawing;

  canvasElement.onmousedown = (e) => {
    var rect = canvasElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    isDrawing = true;
    context.beginPath();
    context.lineWidth = pencilSize;
    context.strokeStyle = pencilColor;
    context.lineJoin = "round";
    context.lineCap = "round";
    context.moveTo(x, y);
  };

  canvasElement.onmousemove = (e) => {
    var rect = canvasElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (isDrawing) {
      context.lineTo(x, y);
      context.stroke();
    }
  };

  canvasElement.onmouseup = function () {
    isDrawing = false;
    context.closePath();
  };
};

const Canvas = (props) => {
  const [pencilSize, setPencilSize] = useState(0);
  const [pencilColor, setPencilColor] = useState("black");
  const [containerWidth,setContainerWidth] = useState(null)
  const containerRef = useRef(null)

  const canvaRef = useRef(null);

  useEffect(() => {
    if (canvaRef) {
        setContainerWidth(containerRef.current.offsetWidth)
        var background = new Image();
        background.src = "https://images.unsplash.com/photo-1601352209555-489a72668fda";

        // Make sure the image is loaded first otherwise nothing will draw.
        background.onload = function(){
            renderCanva(canvaRef, pencilColor, pencilSize,background);
        }
    }
  }, [canvaRef, pencilColor, pencilSize]);

  // Button handlers

  const onClear = () => {
    const canvasElement = canvaRef.current;
    const context = canvasElement.getContext("2d");

    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
  };

  const onSave = () => {
    const canvasElement = canvaRef.current;
    // const img = canvasElement.toDataURL("image/png");
    // console.log(img);
    canvasElement.toBlob(function(blob) {
        saveAs(blob, "pretty image.png");
    });
  };

  // Syles

  const styleCanva = {
    border: "1px solid black",
    marginLeft: "4rem"
  };

  const style = {
    marginTop: "5px"
  };

  return (
    <div ref={containerRef} className='overflow-hidden col-sm-12 col-md-9 p-0 mx-auto my-auto canvas-container' style={{borderRadius:25}}>
        {containerWidth&&<canvas
            ref={canvaRef}
            id="canvas"
            width={containerWidth}
            height={containerWidth}
            style={styleCanva}
        ></canvas>}
      </div>
  );
};

export default Canvas;
