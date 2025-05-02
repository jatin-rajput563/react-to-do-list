import React, { useState } from 'react';
import NotePencil from '../assets/images/svg/NotePencil.svg';

const List = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        const trimmedInput = input.trim();
        if (trimmedInput === '') return; // ignore blank input

        setTasks([...tasks, { text: trimmedInput, done: false }]);
        setInput('');
    };

    const toggleDone = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].done = !updatedTasks[index].done;
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen bg-[#2C2C2C] flex flex-col items-center">
            <div className="max-w-[1440px] w-full px-4">
                <div className='flex items-center gap-[46px] justify-center mt-10'>
                    <div className="w-[50px] h-1 bg-white"></div>
                    <h1 className='font-normal text-[64px] leading-[100%] text-white family'>TO DO NOW</h1>
                    <div className="w-[50px] h-1 bg-white"></div>
                </div>
                <div className='flex gap-[32px] items-center justify-center mt-[14px]'>
                    <div className="w-[240px] h-1 bg-white"></div>
                    <img src={NotePencil} alt="" />
                    <div className="w-[240px] h-1 bg-white"></div>
                </div>
                <div className="justify-center flex bg-white max-w-[837px] py-2 px-3 rounded-[30px] mt-[80px] mx-auto">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='font-normal text-[16px] leading-[100%] family w-full border-0 outline-0 pl-2'
                        placeholder='Add your task here...'
                    />
                    <button
                        onClick={addTask}
                        className='py-[9px] px-[38px] bg-[#2C2C2C] text-white rounded-[30px] whitespace-nowrap family text-[16px] font-normal leading-[100%] hover:bg-white hover:text-[#2C2C2C] border-[#2C2C2C] border cursor-pointer transition-all duration-200 '
                    >
                        Add task
                    </button>
                </div>

                <div className="w-full bg-white max-w-[800px] flex  mx-auto h-1 mt-[34px] mb-8"></div>

                <div className="max-w-[837px] mx-auto w-full">
                    {tasks.length === 0 ? (
                        <p className="text-center text-white">No tasks</p>
                    ) : (
                        <ul className="space-y-3">
                            {tasks.map((task, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center bg-white rounded-[20px] px-4 py-2"
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={task.done}
                                            onChange={() => toggleDone(index)}
                                            className="mr-3"
                                        />
                                        <span
                                            className={`text-[#2C2C2C] ${task.done ? 'line-through text-gray-400' : ''
                                                }`}
                                        >
                                            {task.text}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => removeTask(index)}
                                        className="text-red-500 hover:text-red-700 cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default List;
