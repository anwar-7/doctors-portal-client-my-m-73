import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt="Doctors Chair"
          className="max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            // footer={footer}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
