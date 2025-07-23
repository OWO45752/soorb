import React from "react";

import { InputNumber } from "antd";

const Calculate = (props) => {
    const onRadiusChange = (v) => {
        if (Number.isNaN(v)) return;
        props.setRadius(v);
    };

    const onHeightChange = (v) => {
        if (Number.isNaN(v)) return;
        props.setHeight(v);
    };

    return (
        <div>
            <h1>Calculate Volume of a Cylinder</h1>
            <p>Radius</p>
            <InputNumber onChange={(e) => onRadiusChange(Number(e))} value={props.radius} />
            <p>Height</p>
            <InputNumber onChange={(e) => onHeightChange(Number(e))} value={props.height} />
            <p>{`Volume: {result {${Math.PI * Math.pow(props.radius, 2) * props.height}}}`}</p>
        </div>
    );
};

export default Calculate;
