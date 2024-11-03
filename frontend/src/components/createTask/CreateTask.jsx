import React, { useState } from 'react';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from "../../Axios/axios.js"
import "./createTask.css"
function CreateTask() {
    const { dispatch } = useContext(TaskContext)
    const {userToken} = useContext(TokenContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // const [toast, setToast] = useState();
    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/task/addTask", {title, description},{
              headers: {
                Authorization: `Bearer ${userToken}`
              }
            })
            //setToast(res.data)
            // showToast();
          } catch (error) {
            console.log(error);
          }
        dispatch({
            type: "ADD_TASK",
            title,
            description
        })
        setTitle("")
        setDescription("")
    }

    // const showToast = () => {
    //     const toast = document.getElementById('toast');
    //     toast.style.display = "block"
    //     setTimeout(hideToast,2000)
    // }
    // const hideToast = () => {
    //     const toast = document.getElementById('toast');
    //     toast.style.display = "none"
    // }
    return (
        <div className="addContainer md:w-1/3 md:mx-auto mx-3 mt-3 flex justify-center">
            <div className='w-11/12'>
                <form onSubmit={handleAdd}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
    type="text"
    name="title"
    id="title"
    value={title}
    required
    onChange={(e) => setTitle(e.target.value)}
    className="w-full p-2.5 text-sm rounded-lg border border-transparent shadow-md transition-all duration-300 ease-in-out
               bg-gradient-to-r from-purple-500 to-indigo-500 text-white placeholder-gray-300 
               focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 focus:border-indigo-400
               hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500"
/>

                    </div>
                    <div className='my-3'>
                        <label htmlFor="description">Description</label>
                        <textarea
    rows={5}
    name="description"
    id="description"
    value={description}
    required
    onChange={(e) => setDescription(e.target.value)}
    style={{ resize: "none" }}
    className="w-full p-2.5 text-sm rounded-lg border border-transparent shadow-md transition-all duration-300 ease-in-out
               bg-gradient-to-r from-purple-500 to-indigo-500 text-white placeholder-gray-300 
               focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 focus:border-indigo-400
               hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500"
/>

                    </div>
                    <div className='flex justify-center'>
                        <button
                            type='submit'
                            className=' bg-blue-700 rounded-md text-white px-5 py-1 '
                        >Add</button>
                    </div>
                </form>
                <div className="toast bg-green-600 text-white p-3 rounded-xl shadow-2xl text-center absolute bottom-4 left-1/2 -translate-x-1/2" id='toast'>
                    <p>This is test</p>
                </div>
            </div>
        </div>
    );
}

export default CreateTask;