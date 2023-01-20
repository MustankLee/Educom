import React from "react";
import { NavLink } from "react-router-dom";
import { DataNav } from "./DataNav.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Educom from "../Assets/Educom.png";
import "./Navbar.css";
import { useState } from "react";
import { HiDocumentReport } from "react-icons/hi";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const clicked = () => {
    let temp = !show;
    console.log(show);
    setShow(temp);
  };

  return (
    <div className="absolute w-screen">
      <div className="flex justify-between pl-3 h-12 pr-8 items-center py-8 bg-slate-200 relative z-40">
        <NavLink to="/*">
          <img src={Educom} alt="icon" className="w-28" />
        </NavLink>
        <button
          onClick={clicked}
          className="border-blue-900 border-2 p-1 rounded-md text-blue-900 text-xl hover:bg-blue-900 hover:text-white tr"
        >
          {show ? <IoClose /> : <RxHamburgerMenu />}
        </button>
      </div>
      <nav
        className={
          show ? "flex h-screen w-1/5 absolute right-0 top-0 z-10" : "hidden"
        }
      >
        <div className="shadow-2xl bg-white w-full">
          <div className="h-12 my-4"></div>
          <div className="font-bold text-xl h-14 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Kelompok 5
          </div>
          <div className="mt-1 mx-3 mb-3 px-2">
            <ul className="">
              {DataNav.map((items, index) => {
                return (
                  <NavLink
                    key={index}
                    to={items.to}
                    className="rounded-md tr my-5 flex items-center px-3 py-2 bg-slate-100 shadow-md hover:bg-purple-100 tr"
                    onClick={clicked}
                  >
                    <div>{items.icon}</div>
                    <div className="ml-3">{items.name}</div>
                  </NavLink>
                );
              })}
              <a
                href="https://binusianorg-my.sharepoint.com/personal/rico_susanto_binus_ac_id/_layouts/15/guestaccess.aspx?docid=00cab38f4d8eb406c8bddf6475565d302&authkey=ARG4GHMM7gl9JA4N8HkjHus&e=EiUFHb"
                className="rounded-md tr my-5 flex items-center px-3 py-2 bg-slate-100 shadow-md hover:bg-purple-100 tr"
                target="_blank"
              >
                <div><HiDocumentReport/></div>
                <div className="ml-3">Laporan</div>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
