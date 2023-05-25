import React from "react";
import './UvWidget.css';

function UvWidget({uvIndex}) {
    return (
        <div className="uv-widget-container">
            <p>UV Index: {uvIndex}</p>
        </div>
    );
}

export default UvWidget;