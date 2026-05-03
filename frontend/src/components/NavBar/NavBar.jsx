import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-black p-3 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold hover:text-amber-200">
                    Home
                </Link>
                {/* Navbar toggler for mobile */}
                {/* <button
                    className="text-white lg:hidden"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="fas fa-bars"></span>
                </button> */}
                <div className="hidden lg:flex flex-col lg:flex-row" id="navbarNav">
                    <ul className="flex flex-col lg:flex-row items-center">
                        <li className="my-2 lg:my-0 lg:ml-6">
                            <Link to="/all-students" className="text-white hover:text-pink-400 text-2xl">
                                View All Students
                            </Link>
                        </li>
                        <li className="my-2 lg:my-0 lg:ml-6 ">
                            <Link to="/add" className="text-white hover:text-pink-400 text-2xl">
                                Create Student
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;