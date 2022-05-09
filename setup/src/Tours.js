import React, { useState } from 'react'


const Tours = ({tours,removeTour}) => {
  const [read, setread] = useState(false)
  return (
    <div>
      {
        tours.map((tour)=>{
          return (
            <article className='single-tour'>
            <img src = {tour.image} alt = {tour.name}/>
            <footer>
            <div className='tour-info'>
            <h4>{tour.name}</h4>
            <h4 className='tour-price'>${tour.price}</h4>
            </div>
            <p>
            {read? // checking if statement
              tour.info : // display full info
              tour.info.substring(0,200) // take string upto 200 characters from list
            } 
            <button className={read?
              'read-btn-less':
              'read-btn-more'} 
              onClick={()=>setread(!read)}//!read is given toggle between read more and read less
              >
              {
                read? 'Read less':'Read More'
              }</button>
            </p>
            <button onClick= {()=> removeTour(tour.id)} className='delete-btn'>Not interested</button>
            </footer>
            </article>
          );
        })
      }
    </div>
  )

};
export default Tours;
