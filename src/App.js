import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './App.css';
import Task from './task.jsx';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';



function App() {
    const[tasks, setTasks]=useState([])
    const[title,setTitle]=useState("")
    const[detail,setDetail]=useState("No Detail")

  const addTask = () => {
    if(title ===""||detail==="") return;

    
    
    const exists = tasks.find((task)=>
      task.title===title|| 
    ( detail !== "No Detail"  &&  task.detail===detail));
    if(exists)return;

     
    const newTask={
      id: Date.now(),
      title:title,
      detail:detail
    };

    setTasks([...tasks, newTask])

    setTitle("");
    setDetail("No Detail");
  
  };

  // tost-notification
  function notification(){

    const titlecheck=tasks.find((task)=> task.title === title);
   
    if(title!==""){
      if(!titlecheck){
        if(detail===""){
          toast.success("Task Added",3000)
         }
        else{
          toast.success("Task Added",3000)
        }
      }
      else{
          toast.warn("Task already exist",3000)
      }
    }
    else{
      toast.error("Requireds Unfilled",3000);
    }
  }


  return (
    <div className="min-h-screen flex flex-col">
      <div className=''>
        <h1 className='bg-black text-yellow-300 text-4xl font-bold text-center
       py-5 mx-10 mt-5 border-2 border-yellow-300 rounded-xl'>To-Do App</h1>
      </div>

      {/* this is main */}
      <div className='flex flex-col items-center mx-10 mt-4 gap-8 md:gap-3 md:flex md:flex-row md:items-start flex-1 '>

        {/* 1st half */}
        <div className='flex flex-col w-full  md:w-1/2 '>
          <div>
            <h1 className=' text-yellow-300 text-center text-2xl 
              font-bold border-yellow-300 border-2 rounded-xl px-4 py-3  '>To-Do List</h1>
          </div>
          <div className='flex flex-col border-2 border-yellow-300 rounded-xl mt-4 '>
            <Task tasks={tasks} setTasks={setTasks}/>
            

          </div>
        </div>
        {/* 2nd half */}
        <div className='w-full md:w-1/2'>
          <div>
            <h1 className=' text-yellow-300 text-center text-2xl 
              font-bold border-yellow-300 border-2 rounded-xl px-4 py-3  '>Add Task's</h1>
          </div>

          {/* user input */}
          <div className='flex flex-col justify-center items-center gap-5 mt-4 
          rounded-xl border-2 border-yellow-300 py-10 px-10 '>

            <input type='text' name='title' placeholder='Title' 
            className='bg-black border-5 border-white rounded text-yellow-300 
             ring-2 ring-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400
             px-5 py-2 w-1/2' onChange={(e)=>{setTitle(e.target.value)}} />

             <textarea placeholder='Detail' className='bg-black border-5 border-white rounded text-yellow-300 
             ring-2 ring-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400
             px-5 py-2  md:w-full' onChange={(e)=>{setDetail(e.target.value)}}/>

             <button type='submit' onClick={()=>{addTask(); notification()}}
              className='bg-yellow-300 text-black font-bold rounded px-4 py-2 '>+ ADD</button>
              <ToastContainer/>
          </div>

        </div>
      </div>

      <footer className=' w-full flex  justify-center items-center bg-yellow-300 text-black 
         px-5 py-5 gap-4 '>
          
        <div>&#9400; Shivam Verma | ❤ 2026 </div>
         <div className='border-black border-2 h-4'></div>
        <div className='flex text-2xl gap-2'>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />

        </div>
      </footer>
      
    </div>
  );
}
export default App;
