"use client"
import { useState } from 'react';
import SignUp from './SignUpAndLogin/SignUp';
import Login from './SignUpAndLogin/Login';

const CustomModal = () => {
  const [selectedTab, setSelectedTab] = useState("signUp")
  return (
    <>
      {
        selectedTab === "signUp" ? <SignUp setSelectedTab={setSelectedTab} /> : <Login setSelectedTab={setSelectedTab} />
      }
    </>
  );
};

export default CustomModal;