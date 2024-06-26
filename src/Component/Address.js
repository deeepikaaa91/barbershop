import React from 'react'
import MapContainer from './MapContainer'


function Address() {
  return (
    <div className='main6 '>
    <div className='location-img'>
      <MapContainer style={{width:100, height:100}}></MapContainer>
    </div>
    <div className='Address'>
    <div className='Add'>
     <label className='lab'>CONTACT</label>
     <div className='row'></div>
    </div>
    
    <div className='box'>
     <h1 className='a'>Address</h1>
     <label className='l'>123 Street W,</label>
     <label className='l'> Seattle WA 98127</label>
     <label className='l'>United States</label>
    </div>


    <div className='box1'>
    <h1 className='e'>Opening Hours</h1>
    <label className='l-1'>Monday - Friday</label>
    <label className='l-1'>9am - 6pm</label>
    </div>
    <div className='box3'>
    <label className='l-2'>Saturday and Sunday</label>
    <label className='l-2'>10am - 4pm</label>
    </div>

    </div>









    </div>
  )
}

export default Address