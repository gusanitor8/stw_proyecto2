import React from "react";
import './UvWidget.css';
import Temperature from "./Temperature";

function UvWidget({uvIndex}) {
    const meterStyle = {
        transform: `rotate(${(uvIndex / 10) * 180}deg)`,
      };

    return (
    <div className="uv-widget-container">
        <div class="gauge">
        <div class="gauge__body">
            <div class="gauge__fill" style={meterStyle}></div>
            <div class="gauge__cover"></div>
        </div>
        </div>
        <p>UV Index: {uvIndex}</p>
        </div>
    );
}

export default UvWidget;