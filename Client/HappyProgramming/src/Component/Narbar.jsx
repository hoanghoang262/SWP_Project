import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { userInfoState } from '../Recoil/Atom';
import logo from "./favicon.ico"
import {Buffer} from "buffer"
import convertBufferToImg from '../Util/convertBufferToImg';
const Narbar = () => {
    //set up for dropdowm menu
    const [anchorEl, setAnchorEl] = useState(null);
    const [path, setPath] = useState("/")
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleProfileButton = () => {
        naviga("/userProfile");
        handleClose();
    }
    const handleLogoutButton = () => {
        setUserInfo([]);
        naviga("/");
        handleClose();
    }


    //create state and jsx element
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    //chuyen doi avata tu buffer to img
    let avataSrc = null;
    if (userInfo.avata) {
        avataSrc = convertBufferToImg(userInfo.avata)
    }
    const naviga = useNavigate()
    const signInButton = <button onClick={() => naviga("/signIn")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Get started</button>
    const avata =
        <Avatar className="cursor-pointer"
            src={!userInfo.avata ? 'https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' : avataSrc} sx={{ cursor: "pointer", bgcolor: deepOrange[500], width: "45px", height: "45px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p className='text-2xl' >N</p>
        </Avatar>
    //drop manu
    const dropMenu = <>
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {avata}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleProfileButton}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogoutButton}>Logout</MenuItem>
            </Menu>
        </div>
    </>

    let service = <p>Services</p>
    let home = <p>Home</p>
    let about = <p>About</p>
    let contact = <p>Contact</p>
    let admin = <p>Admin control</p>

    const setCilentPath = () => {

        switch (window.location.pathname) {
            case "/":
                home = <p className=' text-blue-700'>Home</p>
                break;
            case "/about":
                about = <p className=' text-blue-500'>About</p>
                break;
            case "/contact":
                contact = <p className=' text-blue-500'>Contact</p>
                break;
            case "/service":
                service = <p className=' text-blue-500'>services</p>
                break;
        }
    }
    setCilentPath()
    return (
        <>
            <div className="h-20 w-full"></div>
            <nav className="shadow-2xl shadow-gray-400 bg-white h-20 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap justify-between items-center m-auto ">
                    {/* main web logo  */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Happy Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Happy Program</span>
                    </Link>
                    {/* button when mobile size */}
                    <div className="flex md:order-2">
                        {(userInfo == null || userInfo.length == 0) ? signInButton : dropMenu}
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    {/* Narbar routing */}
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" className="text-lg block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{home}</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-lg block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{about}</Link>
                            </li>
                            <li>
                                <Link to="/service" className="text-lg block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{service}</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-lg block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{contact}</Link>
                            </li>
                            {userInfo.role == "admin" ? <li>
                                <Link to="/admin" className="text-lg block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{admin}</Link>
                            </li> : null}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Narbar;