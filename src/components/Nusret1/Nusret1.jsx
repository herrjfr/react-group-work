import React from 'react'
import "./Nusret1.css"
import Asbaz from '../../assets/chefpow.png'
import Ust from '../../assets/ustyemek.png'
import Alt from '../../assets/altyemek.png'
import { BookmarkPlus, Clock, ShoppingCart } from 'lucide-react';

function Nusret1() {
  return (
    <section className='sec-nusret1'>
      <div className='enke-div'>
        <div className='sol-sek'>
          <img src={Asbaz} className='w-[430px] h-[580px]'/>
          <div className='tyu-sekil h-[580px]'>
            <img src={Ust} className='w-[280px] h-[330px]'/>
            <img src={Alt} className='w-[280px] h-[230px]'/>
          </div>
        </div>

        <div className='sag-cumle'>
          <h1>Fastest Food </h1>
          <h1>Delivery in City</h1>
          <p>Our visual designer lets you quickly and of drag a down  </p>
          <p>your way to customapps for both keep desktop.</p>
          <div className='eyni'><button className='flex justify-center items-center'><Clock size={15} /></button> <span> Delivery within 30 minutes </span></div>
          <div className='eyni'><button className='flex justify-center items-center'><BookmarkPlus size={15} /></button> <span> Best Offer & Prices </span></div>
          <div className='eyni'><button className='flex justify-center items-center'><ShoppingCart size={15} /></button> <span> Online Services Available </span></div>

        </div>
      </div>
    </section>
  )
}

export default Nusret1