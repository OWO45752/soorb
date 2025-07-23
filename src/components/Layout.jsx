//@ts-check

import React from "react";

import "katex/dist/katex.min.css";

import { NavLink, Outlet } from "react-router";

import { Menu } from "antd";

import { HomeOutlined } from "@ant-design/icons";

/**
 * @typedef {Required<import("antd").MenuProps>['items'][number]} MenuItem
 */

/** @type {MenuItem[]} */
const menuItems = [
    {
        label: <NavLink to="/">Home</NavLink>,
        key: "home",
        icon: <HomeOutlined />,
    },
    {
        label: <NavLink to="/calculate">Calculate</NavLink>,
        key: "cal",
        icon: <HomeOutlined />,
    },
    {
        label: <NavLink to="/fetch">FetchAPI</NavLink>,
        key: "fet",
        icon: <HomeOutlined />,
    },
    {
        label: <NavLink to="/sdvrjk,,mnsghtykiuhdfhfty4uryjrgtkuj,ghfg4tyuytkuj,mghgnfffytuyjtkghmgfbdawyeutryiktuj,lnhmgnfbgetyeurjyktiujh">NotFound</NavLink>,
        key: "notf",
        icon: <HomeOutlined />,
    },
];

const Layout = () => {
    const [currentMenu, setCurrentMenu] = React.useState("home");

    return (
        <>
            <Menu onClick={(e) => setCurrentMenu(e.key)} selectedKeys={[currentMenu]} mode="horizontal" items={menuItems} />

            <Outlet />
        </>
    );
};

export default Layout;
