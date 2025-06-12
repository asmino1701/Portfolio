import "../styles/header.scss";
import Hamburguer from "./HamburguerMenu";

export default function Header() {
    return (
        <header className="sticky top-0 left-0 w-full z-50 bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold sm:text-xl">Andrés Miño</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="hover:text-teal-950 sm:text-base">Home</a></li>
                        <li><a href="#projects" className="hover:text-teal-950 sm:text-base">Projects</a></li>
                        <li><a href="#about" className="hover:text-teal-950 sm:text-base">About Me</a></li>
                        <li><a href="#contact" className="hover:text-teal-950 sm:text-base">Contact</a></li>
                    </ul>
                </nav>
                <Hamburguer/>
            </div>
        </header>
    );
}