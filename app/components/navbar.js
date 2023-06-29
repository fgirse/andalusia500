"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { archidaught } from '../../utils/fonts';




export default function Navbar()  {
  const navigation = [
    "Philosophie",
    "Geschichte",
    "Rechtliches",
    "Kontakt"  ];


const { data: session } = useSession();

const [providers, setProviders] = useState(null);
const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    
<nav className="h-20 bg-gray-700 flex-between w-[100vw] mb-16 lg:mb-1 pt-3">
    <div className={archidaught.className}>
          <Disclosure>
          {({ open }) => (
            <>
          <div className="flex flex-wrap items-center justify-around w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-xs sm:text-sm md:text-xl lg:text-2xl font-medium  text-gray-50 dark:text-gray-100">
                    <span>
                      <Image
                        src="/assets/images/LogoWA.svg"
                        alt="Logo-WA-SI"
                        width="120"
                        height="60"
                        className="ml-[1rem] w-32 lg:w-40 lg:ml-[3rem]"
                      />
                    </span>
                    <span></span>
                  </span>
                </Link>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 mx-auto text-gray-300 rounded-md lg:hidden hover:text-yellow-500 focus:text-gray-300 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-slate-600 flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/" className="w-full px-4 py-2 -ml-2 font-archidaught text-amber-500 rounded-md dark:text-gray-300 hover:text-gray-100 hover:bg-amber-600 focus:text-white focus:bg-amber-200 dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                      </Link>
                    ))}
                         <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-amber-200 rounded-md lg:ml-5">        
                        email senden
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
          
        </Disclosure>
        </div>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-archidaught text-gray-100 no-underline rounded-md dark:text-gray-200 hover:text-50 hover:bg-orange-500 focus:text-gray-50 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="/" className="px-6 py-2 text-white bg-amber-600 hover:bg-amber-600/60 rounded-md md:ml-5">
              email senden
          </Link>

          <ThemeChanger />
        </div>
      
      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Login
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>


    </nav>
    
  );
}

