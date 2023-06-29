'use client'

import { useSession, signOut } from 'next-auth/react'

const dashboard = () => {
    const { data:session } = useSession()
  return (
    <div>
        <h1 className="bg-white text-black">Dashboard</h1>
        <p className="text red-500" text-lg>Hi {session?.user?.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export default dashboard