import React, { useState } from "react";

import nyancat from "../assets/nyancat.svg";
import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();
    const [t, setT] = useState(5);

    React.useEffect(() => {
        const i = setInterval(() => {
            setT((t) => t - 1);
        }, 1000);

        return () => { clearInterval(i); };
    }, []);

    React.useEffect(() => {
        if (t <= 0) navigate("/");
    }, [t]);

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
            <h1>Page not found 404</h1>
            <p>Weiterleitung zur Startseite in {t} Sekunden</p>
            <img src={nyancat} style={{
                maxWidth: "90vw",
                maxHeight: "80vh",
                objectFit: "cover",
                objectPosition: "center",
            }}
            />
        </div>
    );
};

export default NotFound;
