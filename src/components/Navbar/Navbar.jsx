import React from 'react';
import Logo from "../../assets/Logo_stgenetics.png";
import { IoSearchCircle } from "react-icons/io5";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";

const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Products", link: "productList" },
    { id: 3, name: "Dairy", link: "/#" },
    { id: 4, name: "Beef", link: "/#" },
    { id: 5, name: "Beef on dairy", link: "/#" },
    { id: 6, name: "Careers", link: "/#" },
];

const DropdownLinks = [
    { id: 1, name: "Dairy Contact Us", link: "/#" },
    { id: 2, name: "Dairy Team", link: "/#" },
    { id: 3, name: "Beef Contact Us", link: "/#" },
    { id: 4, name: "Beef Team", link: "/#" },
];

const Navbar = ({ handleOrderPopup, cartItems = 0 }) => {
    return (
        <div className="shadow-md bg-white dark:text-white duration-200 relative z-40">
            <div className="bg-primary/20">
                <div className="container flex justify-between items-center py-2">
                    <div>
                        <a href="/">
                            <img src={Logo} alt="Logo" className="w-38" />
                        </a>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="search"
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-blue-900 px-2 py-1 focus:outline-none focus:border-1 focus:border-pink-600"
                            />
                            <IoSearchCircle className="text-blue-900 group-hover:text-pink-600 absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>
                        <button
                            onClick={handleOrderPopup}
                            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-300">
                                Order
                            </span>
                            <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
                            {cartItems > 0 && (
                                <span className="bg-white text-primary font-semibold text-xs rounded-full px-2 py-1">
                                    {cartItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* lower Navbar */}
            <div className="flex justify-center">
                <ul className="sm:flex hidden items-center gap-4">
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link} className="inline-block px-4 text-black hover:text-primary duration-200">
                                {data.name}
                            </a>
                        </li>
                    ))}
                    {/* Dropdown and links */}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px] py-2">
                            Contact
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
