"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import ProfilePic from '../../public/profilePicImage.jpeg'

const MultiplePathways = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1)

    return (
        <section className="py-8 px-8 lg:px-0 multiple-pathways">
            <div className="container mx-auto">
                <h2 className="text-3xl font-extrabold text-center">REMOTE PROGRAMS BUILT FOR EVERYONE</h2>
                <div className="text-paragraph mx-auto md:w-2/3 text-center py-8 px-0">Get inspired by diverse career trajectories from alumni members. Launch the next phase of your career in the world of venture capital and startups.</div>
            </div>
            <div className="border grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-9 my-12">
                <div className="lg:col-span-2 xl:col-span-4 grid grid-rows-4 text-white">
                    <div className={`group cursor-pointer p-8 flex items-center bg-coal ${selectedTab === 1 ? '' : 'opacity-70'}`} onClick={() => setSelectedTab(1)}>
                        <div className="flex items-center font-bold space-x-4 xl:space-x-8">
                            <div className="text-xl md:text-32px xl:text-48px duration-500">01</div>
                            <div className="text-xl md:text-28px xl:text-32px uppercase duration-500">JOIN a vc firm</div>
                        </div>
                    </div>


                    <div className={`group cursor-pointer p-8 flex items-center bg-gray ${selectedTab === 2 ? '' : 'opacity-70'}`} onClick={() => setSelectedTab(2)}>
                        <div className="flex items-center font-bold space-x-4 xl:space-x-8">
                            <div className="text-xl md:text-32px xl:text-48px duration-500">02</div>
                            <div className="text-xl md:text-28px xl:text-32px uppercase duration-500">build a startup</div>
                        </div>
                    </div>


                    <div className={`group cursor-pointer p-8 flex items-center bg-teal ${selectedTab === 3 ? '' : 'opacity-70'}`} onClick={() => setSelectedTab(3)}>
                        <div className="flex items-center font-bold space-x-4 xl:space-x-8">
                            <div className="text-xl md:text-32px xl:text-48px  duration-500">03</div>
                            <div className="text-xl md:text-28px xl:text-32px uppercase duration-500">angel invest</div>
                        </div>
                    </div>


                    <div className={`group cursor-pointer p-8 flex items-center bg-darker-teal ${selectedTab === 4 ? '' : 'opacity-70'}`} onClick={() => setSelectedTab(4)}>
                        <div className="flex items-center font-bold space-x-4 xl:space-x-8">
                            <div className="text-xl md:text-32px xl:text-48px duration-500">04</div>
                            <div className="text-xl md:text-28px xl:text-32px uppercase duration-500">JOIN A GROWTH COMPANY</div>
                        </div>
                    </div>
                </div>


                <div className="lg:col-span-3 xl:col-span-5 border">
                    <div className="h-full">
                        <div className={`fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 lg:space-x-4 lg:space-y-0 justify-around p-4 h-full animate-fade-in-right-little ${selectedTab === 1 ? 'block' : 'hidden'}`}>
                            <div className="lg:self-center">
                                <div className="flex flex-col items-center">
                                    <Image src={ProfilePic} width="200" height="200" alt="First Name" className="rounded-full" />
                                    <div className=" lg:text-base mt-4 flex items-center">Kevin Williams</div>
                                    <div className=" text-sm text-center">Junior Analyst</div>
                                    <div className="text-sm text-center">Stacks Ventures</div>
                                </div>
                            </div>
                            <div className="lg:self-center">
                                <div className="flex flex-col items-center">
                                    <Image src={ProfilePic} width="200" height="200" alt="First Name" className="rounded-full" />
                                    <div className=" lg:text-base mt-4 flex items-center">Chelsey Pua</div>
                                    <div className=" text-sm text-center">Investment Analyst</div>
                                    <div className="text-sm text-center">Insignia Ventures Partners</div>
                                </div>
                            </div>
                            <div className="lg:self-center">
                                <div className="flex flex-col items-center">
                                    <Image src={ProfilePic} width="200" height="200" alt="First Name" className="rounded-full" />
                                    <div className=" lg:text-base mt-4 flex items-center">Yang En Tan</div>
                                    <div className=" text-sm text-center">Investments</div>
                                    <div className="text-sm text-center">Insignia Ventures Partners</div>
                                </div>
                            </div>
                        </div>



                        <div className={`fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-y-4 lg:space-x-4 lg:space-y-0 justify-around p-4 h-full animate-fade-in-right-little ${selectedTab === 2 ? 'block' : 'hidden'}`}>
                            <div className="lg:self-center">
                                <div className="flex flex-col items-center">
                                <Image src={ProfilePic} width="200" height="200" alt="First Name" className="rounded-full" />
                                    <div className=" lg:text-base mt-4 flex items-center">Robert Tan</div>
                                    <div className=" text-sm text-center">Co-founder</div>
                                    <div className="text-sm text-center">Joybox</div>
                                </div>
                            </div>
                            <div className="lg:self-center">
                                <div className="flex flex-col items-center">
                                <Image src={ProfilePic} width="200" height="200" alt="First Name" className="rounded-full" />
                                    <div className=" lg:text-base mt-4 flex items-center">Sara Sofyan</div>
                                    <div className=" text-sm text-center">Co-founder and CEO</div>
                                    <div className="text-sm text-center">Wifkain</div>
                                </div>
                            </div>
                        </div>


                        <div className={`fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-y-4 lg:space-x-4 lg:space-y-0 justify-around p-4 h-full animate-fade-in-right-little ${selectedTab === 3 ? 'block' : 'hidden'}`}>
                            <div className="lg:self-center">
                                <div className="flex flex-col items-center">
                                <Image src={ProfilePic} width="200" height="200" alt="First Name" className="rounded-full" />
                                    <div className=" lg:text-base mt-4 flex items-center">Kartik Jain</div>
                                    <div className=" text-sm text-center">Manager</div>
                                    <div className="text-sm text-center">Alpha Venture DAO</div>
                                </div>
                            </div>
                            <div className="lg:self-center">
                                <div className="flex flex-col items-center">
                                <Image src={ProfilePic} width="200" height="200" alt="First Name" className="rounded-full" />
                                    <div className=" lg:text-base mt-4 flex items-center">Hester Spiegel</div>
                                    <div className=" text-sm text-center">Co-Founder</div>
                                    <div className="text-sm text-center">Epic Angels</div>
                                </div>
                            </div>
                        </div>


                        <div className={`fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-y-4 lg:space-x-4 lg:space-y-0 justify-around p-4 h-full animate-fade-in-right-little ${selectedTab === 4 ? 'block' : 'hidden'}`}>
                            <div className="lg:self-center">
                                <div className="flex flex-col items-center">
                                <Image src={ProfilePic} width="200" height="200" alt="First Name" className="rounded-full" />
                                    <div className=" lg:text-base mt-4 flex items-center">Alexandra Tan
                                    </div>
                                    <div className=" text-sm text-center">CEO Office</div>
                                    <div className="text-sm text-center">Aspire</div>
                                </div>
                            </div>
                            <div className="lg:self-center">
                                <div className="flex flex-col items-center">
                                <Image src={ProfilePic} width="200" height="200" alt="First Name" className="rounded-full" />
                                    <div className=" lg:text-base mt-4 flex items-center">Jui Takle</div>
                                    <div className="text-sm text-center">Strategic Development</div>
                                    <div className="text-sm text-center">Tonik</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MultiplePathways