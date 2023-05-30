import React from 'react';

const AppointmentOptions = ({appointment,setTreatment}) => {
    const {slots,name}=appointment
    return (
        <div className="card w-96 my-2 mr-3 bg-indigo-200 shadow-2xl">
     
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{name}</h2>
          <p>{slots.length > 0 ? slots[0]:'try another day'}</p>
        <p className='text-xl'>{slots.length} {slots.length>1?'spaces':'space'}</p>
        <label
          htmlFor="bookingModal"
          onClick={()=>setTreatment(appointment) } 
           className="btn bg-indigo-700 w-44 p-3 text-white rounded-lg mt-3">Book Now</label>

        </div>
      </div>
    );
};

export default AppointmentOptions;