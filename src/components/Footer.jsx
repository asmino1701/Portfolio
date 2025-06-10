import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="flex w-full container mx-auto text-center items-center justify-center">
                <p className="text-sm">© {new Date().getFullYear()} Andrés Miño Portfolio. All rights reserved.</p>
            </div> 
        </footer>
    );
}