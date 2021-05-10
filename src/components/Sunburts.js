import React from 'react';
import Sunburst from 'react-sunburst-d3-v4';
import './Sunburst.css';
import data from '../data/sunburst'

const showToolTop = () => {
    <div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" />
}


const SunBurst = () => {

    return (
        <>
        <h1>React SunBurst</h1> 
        <Sunburst 
            data={data}
            scale="linear" 
            tooltipContent={showToolTop()} // eslint-disable-line
            tooltip
            tooltipPosition="right"
            keyId="anagraph"
            width="480"
            height="400"
        />
        </>
    )
}

export default SunBurst