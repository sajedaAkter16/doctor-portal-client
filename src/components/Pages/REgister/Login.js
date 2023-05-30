import React, { useContext } from 'react';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';



const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {signin}=useContext(AuthContext)
    const location=useLocation()
   const navigate=useNavigate()
   const from=location.state?.from?.pathname || '/'
   
    const handleSignin = data =>{
        
        // handle to signup by using
        signin(data.email,data.password)
            .then(result=>{
                toast.success('Successfully login')
                console.log(result.user);
                navigate(from,{replace:true})
            })
            .catch(error=>console.log(error))
        


  };
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-pink-700 mb-5">Please Login now!</h1>
          </div>
          <form onSubmit={handleSubmit(handleSignin)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <input {...register('email')} type="email" placeholder="email" className="input input-bordered" />
              </div>
              
              <div className="form-control">
                <input type="password" {...register('password')} placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;