import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import{Pagination, Navigation}from'swiper';
import{Swiper,SwiperSlide}from'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const data=[
 {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'jkbhkk',
 },
 {
    avatar:AVTR2,
    name:'Shatta Wale',
    review:'jhvhj',
},
{
    avatar:AVTR3,
    name:"Kwame Despite",
    review:'bnkk',
},
{
  avatar:AVTR4,
  name:"Kwame Despite",
  review:'bnkk',
},
]

const Testimonials = () => {
  return (
    <section id = 'testimonials'>
    <h5>Review from clients</h5>
<h2>Testimonials</h2>
<Swiper className="container testimonials_container"

spaceBetween={40}
slidesPerView={1}
navigation
pagination={{clickable:true}}>
  {
     data.map(({avatar,name,review},index)=>{
        return(
           <SwiperSlide key={index}className="testimonial">
           <div className="client_avatar">
              <img src={avatar}/>
           </div>
           <h5 className='client_name'>{name}</h5>
           <small className='client_review'>{review}</small>
        </SwiperSlide>
        )
  })}
</Swiper>
    </section>
  )
}

export default Testimonials