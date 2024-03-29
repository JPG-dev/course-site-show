"use client"
import { useRef } from 'react';

interface Props {
  setSelectedTab: (value: string) => void
}

const SignUp = ({ setSelectedTab }: Props) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignUp = () => {
    // Implement your sign-up logic here
  };

  return (
    <>
    <h2 className='text-3xl font-extrabold text-center mb-5'>Create an account</h2>
        <div className="grid gap-5">
        <div>
        <p>Email <span>*</span></p>
        <input type="email" placeholder="Email" ref={emailRef} />
        </div>
        <div>
        <p>Password <span>*</span></p>
        <input type="password" placeholder="Password" ref={passwordRef} />
        </div>
        </div>
        <button className='w-full p-2 mt-6' onClick={handleSignUp}>Sign Up</button>
        <p className='text-center mt-4'>Already have an account? <span className='font-extrabold cursor-pointer' onClick={() => setSelectedTab('login')}>Log In</span></p>
    </>
  );
};

export default SignUp;