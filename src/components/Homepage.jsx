import React, { Suspense } from 'react'
import {Hero} from './Hero'
import { Button } from './ReusableComponents/Button'
import { Card } from './ReusableComponents/Card'


const fetchIssues = async () => { 
  const result = await fetch("./data.json");
  return result.json(); 
}




export const Homepage = () => {

   
 
  const fetchPromise = fetchIssues();



  return (
    <div>

       <Hero/>
       <Button/>
       <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>
}>
        <Card fetchPromise ={fetchPromise}/>

       </Suspense>
       
       



    </div>
  )
}
