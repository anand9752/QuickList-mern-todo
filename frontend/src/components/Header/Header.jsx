import React from 'react';
import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import TokenContext from '../../context/TokenContext.js';
import "./header.css"
import imgg from'./to-do-list.png'
function Header() {
    const token = localStorage.getItem("authToken");
    const { user } = useContext(TokenContext);
    console.log("user", user);
    const logout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    }

    return (
        <div>
            <nav className='header bg-slate-200 flex justify-between items-center'>
            <div className="logo w-full sm:w-48 flex flex-row justify-start sm:justify-evenly pl-4 sm:pl-8">
  <div className="flex justify-center items-center">
    <NavLink to="/" className="flex items-center space-x-2">
      {/* Responsive Image */}
      <img src={imgg} alt="Logo" className="w-8 sm:w-12 hidden sm:inline-block" />
      <span className="text-lg sm:text-xl font-extrabold">QuickList</span>
    </NavLink>
  </div>
</div>

                <div className='flex justify-between'>
                    {
                        token ? (
                            <div className='flex items-center justify-center'>
                                <p className='mr-5'>welcome, <span className=' text-xl text-blue-800 capitalize'>{user.name}</span></p>
                                <button onClick={logout} className="logout mr-4">Logout</button>
                            </div>
                        ) : (
                            <ul className='flex justify-end gap-3 w-3/4 pr-6'>
                                <li>
                                    <NavLink to="/login" className='button-89'>Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register" className='button-89'>Register</NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;