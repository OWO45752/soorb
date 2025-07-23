import React from "react";

import { BlockMath } from "react-katex";

const Home = () => {
    return (
        <div>
            <h1>การคำนสวนปริมาตรทรงกระบอก</h1>
            <p>สูตรมีดังนี้</p>
            <BlockMath>
                {"\\text{ราคาหลังหักส่วนลด} = \\pi \\times \\text{รัศมี}^{2} \\times \\text{ความสูง}"}
            </BlockMath>
        </div>
    );
};

export default Home;
