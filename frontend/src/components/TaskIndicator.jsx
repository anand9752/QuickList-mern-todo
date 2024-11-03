import React from 'react';
import { NavLink } from 'react-router-dom';
import './loginButton.css'

function TaskIndicator() {
    return ( 
        <div className=' flex-grow'>
            <nav>
                <ul className='flex gap-3 justify-between p-3 bg-slate-400 rounded-lg shadow-2xl'>
                    <li>
                        <NavLink to="/" className='button-15'>All Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/active" className='button-15'>Active</NavLink>
                    </li>
                    <li>
                        <NavLink to="/completed" className='button-15'>Completed</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default TaskIndicator;