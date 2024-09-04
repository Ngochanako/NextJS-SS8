'use client'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import React, { useEffect, useReducer } from 'react'

export default function page() {
    const {isSignedIn}=useAuth();
    const router=useRouter();
    useEffect(()=>{
        if(!isSignedIn){
            router.push('/sign-in');
        }
    },[])
  return (
    <div>
      <div>
        <p>abcdef</p>
      </div>
    </div>
  )
}
