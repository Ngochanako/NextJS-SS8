import { SignUp } from '@clerk/nextjs'
import '../../globals.css'
export default function Page() {
  return(
  <div className='flex items-center justify-center min-h-[600px]'>
      <SignUp
            appearance={{
              elements: {
                headerTitle: 'text-[26px]',
                socialButtonsBlockButton__facebook:'hidden',
                socialButtonsBlockButton__google:'w-[320px]',

              },
            }}
          />
  </div> 
  )
}