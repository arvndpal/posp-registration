'use client';

import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <section className="background-sidebar light-border custom-scrollbar  sticky left-0 top-0    flex h-screen flex-col justify-between overflow-y-auto border-r py-6 pt-36 shadow-light-300 max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-1">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          //   if (item.route === '/profile') {
          //     item.route = `${item.route}/${userId}`;
          //   }

          return (
            <Link
              href={item.route}
              key={item.label}
              className={`${
                isActive
                  ? 'border-r-slate-100  bg-[#263E80] text-light-900'
                  : 'text-light-700'
              }  flex h-12 items-center justify-start gap-2  px-4 hover:bg-[#263E80] `}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`invert ${isActive ? '' : 'text-light-900'}`}
              />
              <p
                className={`${
                  isActive ? 'base-bold' : 'base-medium'
                } pt-0 max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSidebar;
