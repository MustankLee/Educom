import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { MdShoppingBag } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs"
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import { RiEarthFill } from "react-icons/ri"
import { GiTwoCoins } from "react-icons/gi";
import { HiDocumentReport } from "react-icons/hi"

export const DataNav = [
    {
        "icon": <ImHome/>,
        "name": "Beranda",
        "to": "/*"
    },
    {
        "icon": <MdShoppingBag/>,
        "name": "Produk",
        "to": "/one"
    },
    {
        "icon": <BsFillPersonBadgeFill/>,
        "name": "Customer",
        "to": "/two"
    },
    {
        "icon": <GiShop/>,
        "name": "Product Detail",
        "to": "/three"
    },
    {
        "icon": <RiEarthFill/>,
        "name": "Analisis Region",
        "to": "/four"
    },
    {
        "icon": <GiTwoCoins/>,
        "name": "Profit",
        "to": "/five"
    },
    {
        "icon": <MdDashboardCustomize/>,
        "name": "Informasi",
        "to": "/six"
    },
    {
        "icon": <BsPencilFill/>,
        "name": "Kreator",
        "to": "/kreator"
    },
]