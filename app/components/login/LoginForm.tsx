'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { useState } from 'react';

const LoginForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [username, setUsername] = useState('');
  const handleClick = (value: string) => {
    setUsername(value);
    const reg = /^[0-9]+$/;
    // console.log(value, reg.test(value));
    if (reg.test(value)) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center p-32 max-xl:p-8">
      <div className="flex w-full items-center justify-center  ">
        <Image
          src="/assets/images/logo.png"
          height={100}
          width={200}
          alt="Logo"
        />
      </div>
      <div className="base-bold my-1  flex w-full justify-center text-[25px] font-semibold text-primary-500">
        {isRegister ? 'Sign Up' : 'Login'}
      </div>
      <div className="mt-3 flex w-full flex-col">
        <p className="text-primary-500">
          Username or Phone <sup className="text-[#ff0000]"> *</sup>
        </p>
        <div className=" flex min-h-[40px] grow items-center gap-3 rounded-[8px] bg-light-800 pl-4 ">
          <div className="text-[12px] text-light-400">
            {isPhone ? '+91' : '@'}{' '}
          </div>
          <Input
            className="no-focus border-l-light-800"
            value={username}
            onChange={(e) => handleClick(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-8 flex w-full">
        <Button
          value="Proceed"
          className="w-full bg-primary-500 text-light-900"
        >
          Proceed
        </Button>
      </div>
      <div className="mt-5 flex w-full">
        <Button
          onClick={() => setIsRegister(!isRegister)}
          value="Proceed"
          className="w-full  text-primary-500 hover:bg-light-800"
        >
          {isRegister ? 'Already registered? Login' : 'Register as a POSP'}
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
