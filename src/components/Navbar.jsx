import React from 'react';
import logo from '../assets/logo/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { RiGraduationCapLine, RiHome3Fill } from 'react-icons/ri';
import { GoProjectSymlink } from 'react-icons/go';
import { FaCogs } from 'react-icons/fa';
import { LuUserSearch } from 'react-icons/lu';
import { MdContactPage } from 'react-icons/md';
const Navbar = () => {
    const links = <>
        <li className='mx-2 text-black md:text-white font-semibold'><NavLink to='/' className='flex items-center gap-2'><RiHome3Fill /> Home</NavLink></li>
        <li className='mx-2  text-black md:text-white font-semibold'><NavLink to='/aboutMe' className='flex items-center gap-2'><LuUserSearch /> About Me</NavLink></li>  
        <li className='mx-2  text-black md:text-white font-semibold'><NavLink to='/skills' className='flex items-center gap-2'><FaCogs /> Skills</NavLink></li>
        <li className='mx-2  text-black md:text-white font-semibold'><NavLink to='/projects' className='flex items-center gap-2'><GoProjectSymlink /> Projects</NavLink></li>
        <li className='mx-2  text-black md:text-white font-semibold'><NavLink to='/education' className='flex items-center gap-2'><RiGraduationCapLine /> Education</NavLink></li>
        <li className='mx-2  text-black md:text-white font-semibold'><NavLink to='/contactInfo' className='flex items-center gap-2'><MdContactPage /> Contact</NavLink></li>
        
    </>
    return (
        <div className="navbar bg-purple-600 fixed mb-32 z-10 w-11/12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn text-xl md:block hidden"><img className='w-12' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='../../public/portfolio.pdf' download className="btn">Get Resume</a>
            </div>
        </div>
    );
};

export default Navbar;