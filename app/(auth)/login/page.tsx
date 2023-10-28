import LoginForm from '@/app/components/login/LoginForm';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className="flex h-screen w-full flex-row p-12">
      <div className="flex w-full items-center justify-center rounded-lg bg-[#0F2972] max-lg:hidden">
        <Image
          src="/assets/images/login-bg.svg"
          alt="background image"
          height={500}
          width={500}
          className=" object-contain"
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
