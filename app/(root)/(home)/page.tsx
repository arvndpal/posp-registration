import { redirect } from 'next/navigation';
import React from 'react';

const page = () => {
  redirect('/profile');
  return (
    <div>
      <div>Home Page</div>
    </div>
  );
};

export default page;
