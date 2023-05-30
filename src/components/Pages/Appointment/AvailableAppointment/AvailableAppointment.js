import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions/AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selectedDay}) => {
    const [appointments,setAppointment]=useState([]);
    const [treatment,setTreatment]=useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/appointmentOptions')
        .then(res=>res.json())
        .then(data=>setAppointment(data))
    },[])
    return (
        <div className='w-3/4 mx-auto'>
         <p className='text-2xl text-center my-6'>You selected {format(selectedDay, 'PPP')}.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                
            {
                appointments.map(appointment=>
                    <AppointmentOptions
                     key={appointment._id}
                     appointment={appointment}
                    setTreatment={setTreatment}/>
                    
                     )
            }
            </div>
{   
treatment &&
<BookingModal treatment={treatment}
selectedDay={selectedDay}
setTreatment={setTreatment}
/>
}        </div>
    );
};

export default AvailableAppointment;