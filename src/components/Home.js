import React from 'react'
import Review from './Review'

function Home() {
  return (
   <main>
    <section className='container'>
        <div className='title'>
         <h2> Review Blog App</h2>
         <div  className='underline'>
            <Review />
            
            </div>  
        </div>
        
    </section>



   </main>
  )
}

export default Home