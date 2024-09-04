
import { useAuth } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server'
import { useRouter } from 'next/router';
import React from 'react'

export default async function page() {
   
    const user= await currentUser();
  return (
    <div>
      Email:{user?.emailAddresses[0].emailAddress}
      <br />
      Họ và tên:{user?.firstName} {user?.lastName}
    </div>
  )
}
