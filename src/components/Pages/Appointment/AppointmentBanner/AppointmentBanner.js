import React, { useState } from 'react';
import chair from './../../../../assets/images/chair.png'

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({selectedDay,setSelectedDay}) => {

    return (
        <div className="hero   bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div className='mr-12'>
          <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}

    />
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;