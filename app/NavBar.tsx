'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const {status, data: session} = useSession()

  return (
    <div className='flex bg-slate-200 p-3 space-x-3'>
        <Link href="/" className='mr-5'>Next.js</Link>
        <Link href="/users">Users</Link>
        {status === 'loading' && <span>Loading...</span>}
        {status === 'authenticated' && (
          <>
            <span className='ml-auto'>{session.user!.name}</span>
            <Link href="/api/auth/signout">Logout</Link>
          </>
        )}
        {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}

export default NavBar