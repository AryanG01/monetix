import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';

const Header = () => {
  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href="/">
          <Image src={"/logo.png"} alt="Monetix Logo" height={60} width={200} className="h-20 w-auto object-contain"
          />
        </Link>
        <div className='flex items-center space-x-4'>
          <SignedIn>
            <Link href={"/dashboard"} className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className='hidden md:inline'>Dashboard</span>
              </Button>
            </Link>

            <Link href={"/transaction/create"} className='flex items-center gap-2'>
              <Button>
                <PenBox size={18} />
                <span className='hidden md:inline'>Create Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant="outline">Login</Button>
            </SignInButton>
            <SignUpButton>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
              appearance={{ 
                elements: { 
                  avatarBox: 'h-10 w-10' 
                } 
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  )
}

export default Header