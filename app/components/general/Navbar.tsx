'use client';

import { buttonVariants} from '@/components/ui/button';
import Link from 'next/link';
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components"
import { useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

export  function Navbar() {
  const {getUser} = useKindeBrowserClient();
  const user =  getUser()

  return (
    <nav className='py-5 flex items-center justify-between'>
      <div className='flex items-center gap-6'>
        <Link href='/'>
          <h1 className='text-3xl font-semibold'>
            Blog <span className='text-blue-500'>Hakob</span>
          </h1>
        </Link>

        <div className='hidden sm:flex items-center gap-6'>
          <Link
            href='/'
            className='text-sm font-medium hover:text-blue-500 transform-fill'
          >
            Home
          </Link>
          <Link
            href='/dashboard'
            className='text-sm font-medium hover:text-blue-500 transform-colors'
          >
            Dashboard
          </Link>
        </div>
      </div>
      {user ?
          (<div className="flex items-center gap-6">
            <p>{user?.given_name}</p>
            <LogoutLink className={buttonVariants({variant: 'secondary'})}>Logout</LogoutLink>
          </div>
          ): (
              <div className='flex items-center gap-4'>
            <LoginLink className={buttonVariants()}>Login</LoginLink>
            <RegisterLink className={buttonVariants({variant: 'secondary'})}>Sign up</RegisterLink>
          </div>)
      }

    </nav>
  );
}
