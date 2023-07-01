'use client'

'use client'

import { useSession, signOut } from 'next-auth/react'

const dashboard = () => {
    const { data:session } = useSession()
  return (
    <div className='flex  justify-center items-center' >
        <h1></h1>
        <p className='text-mono text-gray-300' >login as: {" "} {session?.user?.email}{""}</p>
        <button className='rounded-xl text-white border border-amber-400   hover:border-amber-600 px-2 py-1' onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export default dashboard