import React, { use } from 'react'
 

export const Card = ({fetchPromise}) => {

  const initialData = use(fetchPromise);
  
    
  
   
   

  return (
    <div className='grid grid-cols-3 gap-4 p-4 m-4'>


    {initialData.map((data,index)=>{
       
      return (
                   
        <div

        key={index}
        
        
        className="card bg-base-100 w-100 shadow-sm     ">
<div className='flex justify-start p-4'>
      <figure>
    <img className='h-[50px] w-[50px] rounded-2xl '
      src={data.userImg}
      alt="Shoes" />
  </figure>


</div>
  <div className="card-body">
    <h2 className="card-title">
      {data.requestedBy}
    </h2>

      <div className='flex justify-between items-center'>  
            <div className='font-bold text-2xl whitespace-nowrap '> <h1>{data.subject}</h1> </div>
           <div className='flex   gap-2'> 
            <div className="badge badge-secondary">Email</div>
               <div className="badge badge-secondary">Email</div>
           </div>
            
      </div>


    <p> {data.description}
</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>




      );
      
    })
    
    
    
    }












    </div>
  )
}
