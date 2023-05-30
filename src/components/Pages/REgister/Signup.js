import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const Signup = () => {
  const [accepted,setAccepted]=useState(false)
  const {register,handleSubmit}=useForm()
  const {createUser,verifyEmail,updateUser}=useContext(AuthContext)
   const handleSiginup=(data)=>{
    const email=data.email;
    const password=data.password;
    const name=data.name;
   const phoneNumber=data.phone


    // image upload

    const image=data.image[0]
    const formData=new FormData()
    
    formData.append('image',image)
    const url= "https://api.imgbb.com/1/upload?key=2af89869bbaf12026f9917fa111ed9c3"
    fetch(url,{
      method:'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(imgData=>{
      
      const photoURL=imgData.data.display_url
   
   
    // user create
    createUser(email,password)
    .then(result=>{
      const user=result.user;
      updateUser(name,photoURL,phoneNumber)
      .then(()=>{
        toast.success('Successfully created')
        verifyEmail()
        .then(()=>{
        
          toast.success('Check your email for verification')
        })
        .catch(err=>console.log(err))
      })
      .catch(err=>console.log(err))

      console.log(user)
    })
    .catch(error=>console.log(error))
   
    })}
    
    const handleAccept=e=>{

      setAccepted(e.target.checked)
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center mb-5 text-pink-600">Please Signup now!</h1>
          </div>
          <form onSubmit={handleSubmit(handleSiginup)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <input {...register('name')} type="text" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <input type="number" {...register('phone')} placeholder="phone" className="input input-bordered" />
              </div>
              <div className="form-control">
                <input type="file" {...register('image')} placeholder="image" className="input input-bordered" />
              </div>
              <div className="form-control">
                <input {...register('email')} type="email" placeholder="email" className="input input-bordered" />
              </div>
              
              <div className="form-control">
                <input type="password" {...register('password')} placeholder="password" className="input input-bordered" />
                <label className="label">
                  <p className='text-orange-500'>Already have account? <span className='ml-3 underline text-orange-900'><Link to='/login'>login</Link></span> </p>
                </label>
              </div>
              <div className="form-control">
  <label className="label cursor-pointer">
    <input type="checkbox" onClick={handleAccept}  className="checkbox checkbox-primary" />
    <span className="label-text text-xl mr-12" >Accept term & conditions</span> 
  </label>
</div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={!accepted}>Signup</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Signup;