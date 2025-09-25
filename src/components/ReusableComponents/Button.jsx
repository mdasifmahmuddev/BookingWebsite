import React, { useState } from 'react'


export const Button = () => {

  const [toggleStatus, setToggolestatus] = useState('All');
  console.log(toggleStatus);

  const btns = ["All", "Pending", "Submit", "Review"];


  return (

    <>


      <div className='flex flex-row justify-end'>

        {/* note  : this is not clear and important  */}

        {btns.map((btn, ind) => {
          console.log(btn);
          return (
            <button
              key={ind}
              onClick={() => setToggolestatus(btn)}

              className={`btn-design  
                 ${toggleStatus == btn &&
                "!bg-purple-500 !text-white"
                }
                
                ${ind == 0 && "!rounded-l-3xl"}
                 ${ind == btns.length-1 && "!rounded-r-3xl"}
                
                
                
                `}>{btn}</button>
          );
        })}





        {/* 
        <button 
         onClick={()=>setToggolestatus("All")}
        className={`rounded-l-2xl  hover:text-white  btn btn-xs border-none p-4 mt-2 font-bold text-purple-700 hover:bg-purple-300 cursor-pointer 
          ${toggleStatus == "All" && "bg-pink-700 text-white"}
          `
          
        }>
          
          
          All</button> */}


        {/* note: hew btn-design come from index.css */}
        {/* note : here we learn interesting thing which is 
           : in ClassName we can give JS or logic Condition 
       
       */}
        {/* <button 
       onClick={()=>setToggolestatus("pending")}
       className={`btn-design ${
        toggleStatus == "pending" && 
        "!bg-purple-500 !text-white"
        
        
        }`}>Pending</button> */}


        {/* <button
       onClick={()=>setToggolestatus("submit")}
       class="btn border-none hover:text-white  btn-xs p-4 mt-2 font-bold text-purple-700 hover:bg-purple-300 ">Submit</button>
    <button 
    onClick={()=>setToggolestatus("review")}
    
    className=" rounded-r-2xl btn  hover:text-white btn-xs border-none p-4 mt-2 font-bold text-purple-700 hover:bg-purple-300 ">Review</button>

 */}








      </div>

    </>

  )
}
