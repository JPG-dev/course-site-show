"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link'
import NextLogo from '../../public/next.svg';
import Logo from '../../public/cropped-logo.png';
import CustomModal from "@/components/CustomModal";
import SignUpAndLogin from "@/components/SignUpAndLogin";

interface Props {
  loggedIn?: boolean;
}

const Header = ({ loggedIn }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  }, [isModalOpen])

  let navLinksClassname = "absolute overflow-hidden top-full left-0 right-0 px-4 bg-dark-600 shadow-2xl duration-500 bg-purple-500";
  navLinksClassname = !isHamburgerOpen ? navLinksClassname + " hidden" : navLinksClassname

  return (
    <>
      <CustomModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <SignUpAndLogin />
      </CustomModal>
      <header className="absolute inset-x-0 z-10">

        <div className='container mx-auto'>
          <div className='flex items-center justify-between py-2 px-4 lg:px-4'>
            <Link href="/">
              <Image src={Logo} alt="logo" width={125} height={125} style={{ filter: 'brightness(105)' }} />
            </Link>
            <nav className="space-x-10 hidden lg:flex items-center">
              <Link href={"about"}>About Us</Link>
              {loggedIn ? null : <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sign up
              </button>}
              {loggedIn ? <div id="avatar" className='relative h-10 w-10 bg-white text-black rounded-full cursor-pointer'>
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black'>AJ</span>
              </div> : null}
            </nav>

            <nav className="lg:hidden">
              <svg onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} className='cursor-pointer' width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 17.9175C0.75 18.792 1.45888 19.5009 2.33333 19.5009H27.6667C28.5411 19.5009 29.25 18.792 29.25 17.9175C29.25 17.0431 28.5411 16.3342 27.6667 16.3342H2.33333C1.45888 16.3342 0.75 17.0431 0.75 17.9175ZM0.75 9.99915C0.75 10.8736 1.45888 11.5825 2.33333 11.5825H27.6667C28.5411 11.5825 29.25 10.8736 29.25 9.99915C29.25 9.1247 28.5411 8.41581 27.6667 8.41581H2.33333C1.45888 8.41581 0.75 9.1247 0.75 9.99915ZM2.33333 0.5C1.45888 0.5 0.75 1.20888 0.75 2.08333C0.75 2.95778 1.45888 3.66667 2.33333 3.66667H27.6667C28.5411 3.66667 29.25 2.95778 29.25 2.08333C29.25 1.20888 28.5411 0.5 27.6667 0.5H2.33333Z" fill="#E5E5E5"></path></svg>


              <div className={navLinksClassname}>
                <div className="group cursor-pointer">
                <Link className='text-white p-4 block group-hover:text-orange duration-500' href={"about"}>About Us</Link>
                </div>
                <div className="p-4">
                  <button onClick={() => setIsModalOpen(true)} className="button whitespace-nowrap duration-500 inline-flex items-center justify-center bg-purple font-bold hover:bg-purple-500 hover:border-purple-500">Sign up</button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}


export default Header