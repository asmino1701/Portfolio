import "../styles/header.scss";
import { route } from "../data/routes/route";
import React from "react";
import HamburguerMenu from "./HamburguerMenu";

export default function Header() {
return (
<header className="sticky top-0 left-0 w-full z-50 bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold sm:text-xl">Andrés Miño</h1>
        <nav>
            <ul className="flex space-x-4 hidden lg:flex">
                {route.map(({ href, title }, index) => (
                <li key={index}>
                    <a href={href} className="hover:text-teal-950 sm:text-base">
                        {title}
                    </a>
                </li>
                ))}
            </ul>
             <HamburguerMenu /> 
        </nav>
    </div>
</header>
);
}

