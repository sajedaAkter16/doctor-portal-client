import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { toast } from 'react-toastify';

const BookingModal = ({treatment,selectedDay,setTreatment}) => {
  const {user}=useContext(AuthContext)
    const {name,slots}=treatment;
    const date=format(selectedDay, 'PPP')


    const handleBooking=(e)=>{
      e.preventDefault()
      const form=e.target
      const patient=form.UserName.value || user.displayName
      const email=form.UserEmail.value || user.email;
      const phone=form.phone.value
      const treatment=name
      const appointmentDate=date
      const  slot=form.slot.value
      const booking={
        patient,
        email,
        phone,
        treatment,
        appointmentDate,
        slot

      }

      // fetch('http://localhost:5000/booking',{
      //   method:"POST",
      //   headers:{
      //     'content-type':'json/application'
      //   },
      //   body:booking
      // })
      // .then(res=>res.json())
      // .then(data=>{
      //   toast.success('Booking Confirm')
      //   console.log(data)
      // })
     
      setTreatment(null)
    }
    return (
       
        <div>

<input type="checkbox" id="bookingModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
   <div className='my-5'>
   <h3 className="text-2xl font-bold">{name}</h3>
   </div>
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleBooking} className="card-body">
     
        <div className="form-control">
          <input type="text" name='UserName' placeholder="Your Name" defaultValue={user.displayName} readOnly className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="email" name='UserEmail' placeholder="Your email" defaultValue={user.email} readOnly className="input input-bordered" />
          
        </div>
        <div className="form-control">
        <input  className="input input-bordered" name='phone' placeholder="Enter your phone"/>
        </div>
        <div className="form-control">
        <input  className="input input-bordered" name='date' readOnly value={date}/>
        </div>
        <div className="form-control">
        <select className="select select-bordered w-full " name='slot'>
          <option>Select your slot</option>
        {
          slots.map((slot,i)=>
           <>
            <option key={i}>{slot}</option>
           </>
            )
        }
</select>         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Book</button>
        </div>
      </form>
    </div>
  </div>
 
</div>
        </div>
    );
};

export default BookingModal;