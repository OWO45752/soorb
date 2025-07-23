import React from "react";

import nyancat from "../assets/nyancat.svg";

const NotFound = () => {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            maxHeight: "90vh",
            maxWidth: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
        >
            <h1>No Found Naja UwU</h1>
            <img src={nyancat} style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                objectFit: "cover",
                objectPosition: "center",
            }}
            />
        </div>
    );
};

export default NotFound;
