"use client"
import { useState } from 'react';
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image";
import Profile from './components/Profile';
import CustomModal from "@/components/CustomModal";
import Logo from '../../../public/cropped-logo.png';

const Setting = () => {
    const [selectedTab, setSelectedTab] = useState<string>("profile")
    const [isOpen, setIsOpen] = useState(false);

    let containerHeight = selectedTab === "profile" ? '93%' : '25%';

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="flex min-h-screen flex-col items-center">
            <Header loggedIn={true} />
            <section className="container mx-auto px-8 flex items-center flex-col md:flex-row text-center pt-40 pb-20 absolute" style={{ position: "absolute", height: '100%', gap: '15px' }}>
                <div className="sidebar hidden md:block" style={{ height: '100%', backgroundColor: '#210606', width: '200px', padding: '20px', borderRadius: '10px' }}>
                    <div onClick={() => setSelectedTab("profile")} className={`rounded-md row cursor-pointer mx-auto p-2 ${selectedTab === 'profile' ? 'active' : ''}`} style={{ width: '90%', backgroundColor: `${selectedTab === 'profile' ? 'purple' : ''}` }}>Profile</div>
                    <div onClick={() => setSelectedTab("account")} className={`rounded-md row cursor-pointer mx-auto p-2 ${selectedTab === 'account' ? 'active' : ''}`} style={{ width: '90%', backgroundColor: `${selectedTab === 'account' ? 'purple' : ''}` }}>My Account</div>
                    <div onClick={() => setSelectedTab("password")} className={`rounded-md row cursor-pointer mx-auto p-2 ${selectedTab === 'password' ? 'active' : ''}`} style={{ width: '90%', backgroundColor: `${selectedTab === 'password' ? 'purple' : ''}` }}>Password</div>
                </div>
                

                <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} className='modal sidebar'>
                    <Image src={Logo} alt="logo" width={125} height={125} style={{ filter: 'brightness(105)' }} />
                    <div onClick={() => {
                        setSelectedTab("profile")
                        toggleSidebar()
                    }} className={`rounded-md row cursor-pointer mx-auto p-2 ${selectedTab === 'profile' ? 'active' : ''}`} style={{ width: '90%', backgroundColor: `${selectedTab === 'profile' ? 'purple' : ''}` }}>Profile</div>
                    <div onClick={() => {
                        setSelectedTab("account")
                        toggleSidebar()
                    }} className={`rounded-md row cursor-pointer mx-auto p-2 ${selectedTab === 'account' ? 'active' : ''}`} style={{ width: '90%', backgroundColor: `${selectedTab === 'account' ? 'purple' : ''}` }}>My Account</div>
                    <div onClick={() => {
                        setSelectedTab("password")
                        toggleSidebar()
                    }} className={`rounded-md row cursor-pointer mx-auto p-2 ${selectedTab === 'password' ? 'active' : ''}`} style={{ width: '90%', backgroundColor: `${selectedTab === 'password' ? 'purple' : ''}` }}>Password</div>
                </CustomModal>
                

                <button className="sidebar block md:hidden" onClick={() => toggleSidebar()}>
                    OPEN SIDEBAR
                </button>

                <div className="metadata-content" style={{ width: '100%', height: '100%' }}>
                    <div className='text-left' style={{ height: '7%' }}>
                        <div className='mb-2'>Settings</div>
                        <div className='text-2xl bold'>{selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}</div>
                    </div>


                    <div className='content' style={{ backgroundColor: '#210606', height: containerHeight, padding: '30px', borderRadius: '10px' }}>
                        {selectedTab === "profile" ? <Profile /> : null}
                        {selectedTab === "account" ? <>
                            <div className="text-left mb-5">
                                <label>EMAIL</label>
                                <div className="ui input">
                                    <input className='w-full p-2' placeholder="Input your email" name="email" id="email" type="text" value="jpgtv19@gmail.com" />
                                </div>
                            </div>

                            <div className="field">
                                <button className="ui button w-full p-2 hover:opacity-80" type="submit">Save</button>
                            </div>


                        </>
                            : null}

                        {selectedTab === "password" ? <>
                            <div className="text-left mb-5">
                                <label>NEW PASSWORD</label>
                                <div className="ui input">
                                    <input className='w-full p-2' placeholder="Password" name="password" id="password" type="password" />
                                </div>
                            </div>

                            <div className="field">
                                <button className="ui button w-full p-2 hover:opacity-80" type="submit">Save</button>
                            </div>


                        </> : null}

                    </div>

                </div>
            </section>
        </main>
    )
}

export default Setting