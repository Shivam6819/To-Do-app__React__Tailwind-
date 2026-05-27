import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";
function Task({tasks , setTasks}){
    let[completed,setcompleted]=useState([])
    
    return(
        <div>
            {tasks.map((val,i)=>(

                <div key={i} className="border-2 border-yellow-300 rounded-xl mx-2 my-2 
                    text-yellow-300 p-2 group">
                   <div className="flex justify-between cursor-pointer ">
                        <h1 className={`font-bold  ${completed.includes(val.id) ? "line-through":""}`} 
                        onClick={()=>{setcompleted(completed.includes(val.id) ? 
                            completed.filter(id => id !== val.id ): [...completed,val.id]);
                        }}>{`${i+1}.${val.title}`}</h1>
                        
                        <FontAwesomeIcon  className="text-xl  cursor-pointer" onClick={()=>{
                            setTasks(tasks.filter(task =>task.id!==val.id))
                        }}  icon={faTrash} />

                        
                    </div>
                    <div className="hidden cursor-pointer group-hover:block" >
                        {val.detail}
                    </div>
                    
               </div>
                
            ))}
        </div>
    );
    
}
export default Task;

