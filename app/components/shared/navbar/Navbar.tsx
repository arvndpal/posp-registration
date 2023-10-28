import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full gap-5 bg-light-850 p-2 shadow-md   sm:px-12">
      <Link href={'/posp-details'} className="flex items-center gap-1">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={150}
          height={10}
          className="h-[50px] w-[120px] object-cover"
        />
        {/* <p>
          <span className=" max-sm:hidden">POSP </span>{' '}
          <span className="text-primary-500 max-sm:hidden">Overflow</span>
        </p> */}
      </Link>
      <div className=" gap-5">{/* <MobileNav /> */}</div>
    </nav>
  );
};

export default Navbar;
