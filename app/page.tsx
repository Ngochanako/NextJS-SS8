'use client'
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function page() {
  const { isSignedIn, signOut } = useAuth();
  const router = useRouter();

  const handleAuthAction = async() => {
    if (isSignedIn) {
     await signOut();
    } 
    router.push('/sign-in');    
  };

  return (
    <div>
      <button
        className="bg-black text-white rounded-[5px] p-[10px]"
        onClick={handleAuthAction}
      >
        {isSignedIn ? 'Đăng xuất' : 'Đăng nhập'}
      </button>
    </div>
  );
}

