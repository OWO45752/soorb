import React from "react";

import { Card } from "antd";
const { Meta } = Card;

/**
 * @typedef {Object} Produk
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {string} category
 * @property {string} image
 * @property {Object} rating
 * @property {number} rating.rate
 * @property {number} rating.count
 */

/**
 *
 * @param {{p: Produk}} props
 * @returns
 */
const CardX = (props) => <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="OWO" src={props.p.image} />}
>
    <Meta title={props.p.title} description={props.p.description} />
</Card>;

const FetchAPI = () => {
    /**
     * @type {[Produk[], React.Dispatch<Produk[]>]} state
     */
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        (async() => {
            const res = await fetch("https://fakestoreapi.com/products");

            /** @type {Produk[]} */
            const data = await res.json();
            setData(data);
        })();
    }, []);

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: "1rem",
        }}
        >
            {data.map((e) => <CardX p={e} />)}
        </div>
    );
};

export default FetchAPI;
