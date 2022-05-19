import React from 'react';
import doctorsmall from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section
      className="flex justify-center items-center"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className=" flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctorsmall} alt="doctor" />
      </div>
      <div className=" flex-1 p-7">
        <h3 className=" text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make an Appointment Today</h2>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          repudiandae blanditiis magnam, deserunt ducimus, eos aliquam autem
          illo natus omnis maxime porro, doloremque nemo quod delectus!
          Recusandae voluptatem quis eligendi, nostrum, tempora culpa laboriosam
          voluptatum repudiandae animi optio, temporibus odio.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
