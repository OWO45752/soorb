import React from "react";

import { Card, Col, Image, Row } from "antd";
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
const CardX = (props) => <Col span={6}>
    <Card
        hoverable
        style={{ width: 240 }}
        cover={<Image alt="OWO" src={props.p.image} />}
    >
        <Meta title={props.p.title} description={props.p.description} />
    </Card>
</Col>;

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
        <Row>
            {data.map((e) => <CardX p={e} />)}
        </Row>
    );
};

export default FetchAPI;
