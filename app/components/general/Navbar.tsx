import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Navbar() {
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
      <div className='flex items-center gap-4'>
        <Button>Login</Button>
        <Button variant='secondary'>Sign up</Button>
      </div>
    </nav>
  );
}
