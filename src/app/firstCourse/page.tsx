"use client"
import { useState } from 'react';
import Image from 'next/image';
import ProfilePic from '../../../public/profilePicImage.jpeg'; // Import the image file
import Header from '@/components/Header';
import MultipleChoice from "@/components/MultipleChoice";
import NumericalAnswer from "@/components/NumericalAnswer";
import Experience from "@/components/Experience";
import CustomModal from "@/components/CustomModal";
import Checkout from "@/components/Checkout";
import Video from "@/components/Video";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Header />
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Checkout />
      </CustomModal>
      {/* <div className="relative overflow-hidden"> */}
      <section className="container mx-auto px-8 lg:px-0 flex items-center text-center pt-40 pb-20">
        <div className="lg:w-3/4 mt-24 md:mt-0 mx-auto">
          <h1 className="text-5xl font-extrabold">
            {"We're excited to have you"}
          </h1>
          <p className="text-paragraph w-5/6 mx-auto py-8">
            Watch out short introduction to get you started into the program
          </p>

          <Video src="https://www.youtube.com/embed/M1hgkUvVlJA?si=rs3P7NW-Th8v73mJ" />
        </div>
      </section>

      <Experience />

      <section className="py-12">
        <div className="container mx-auto px-8 lg:px-0">
          <div className="text-3xl font-extrabold text-center">
            Know your mentors
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-x-9 gap-y-8 my-14">
            <div className="flex lg:block space-x-4 lg:space-x-0">
              <div className="basis-1/2">
                <Image src={ProfilePic} width="200" height="200" alt="First Name" className="w-full rounded-full" />
              </div>
              <div className="basis-1/2">
                <div className="text-gray-100 text-[20px] font-bold lg:mt-4">First Name</div>
                <div className="text-gray-200 text-base">Ex-Google/Stripe, launched Facebook in Asia, full-time startup investor/advisor</div>
              </div>
            </div>
            <div className="flex lg:block space-x-4 lg:space-x-0">
              <div className="basis-1/2"><Image width="200" height="200" src={ProfilePic} alt="First Name" className="w-full rounded-full" />
              </div>
              <div className="basis-1/2">
                <div className="text-gray-100 text-[20px] font-bold lg:mt-4">First Name</div>
                <div className="text-gray-200 text-base">Greater China Region Marketing Agency Founder, ex-Facebook, ex-Management Consultant</div>
              </div>
            </div>
            <div className="flex lg:block space-x-4 lg:space-x-0">
              <div className="basis-1/2"><Image width="200" height="200" src={ProfilePic} alt="First Name" className="w-full rounded-full" />
              </div>
              <div className="basis-1/2">
                <div className="text-gray-100 text-[20px] font-bold lg:mt-4">First Name</div>
                <div className="text-gray-200 text-base">Ex Founder, BD leader at AWS Startup Ecosystem South East Asia</div>
              </div>
            </div>
            <div className="flex lg:block space-x-4 lg:space-x-0">
              <div className="basis-1/2">
                <Image width="200" height="200" src={ProfilePic} alt="First Name" className="w-full rounded-full" />
              </div>
              <div className="basis-1/2">
                <div className="text-gray-100 text-[20px] font-bold lg:mt-4">First Name</div>
                <div className="text-gray-200 text-base">Chief of Staff to CEO &amp; Director of Corporate Strategy, Lazada Singapore</div>
              </div>
            </div>
            <div className="flex lg:block space-x-4 lg:space-x-0"><div className="basis-1/2"><Image width="200" height="200" src={ProfilePic} alt="First Name" className="w-full rounded-full" />
            </div>
              <div className="basis-1/2">
                <div className="text-gray-100 text-[20px] font-bold lg:mt-4">First Name</div>
                <div className="text-gray-200 text-base">Bank of Singapore Private Banker, Fintech startup investor</div>
              </div>
            </div>
            <div className="flex lg:block space-x-4 lg:space-x-0">
              <div className="basis-1/2">
                <Image width="200" height="200" src={ProfilePic} alt="First Name" className="w-full rounded-full" />
              </div>
              <div className="basis-1/2">
                <div className="text-gray-100 text-[20px] font-bold lg:mt-4">First Name</div>
                <div className="text-gray-200 text-base">ex-M&amp;A &amp; Finance management consultant, EdTech entrepreneur</div>
              </div>
            </div>
            <div className="flex lg:block space-x-4 lg:space-x-0"><div className="basis-1/2">
              <Image width="200" height="200" src={ProfilePic} alt="First Name" className="w-full rounded-full" />
            </div>
              <div className="basis-1/2">
                <div className="text-gray-100 text-[20px] font-bold lg:mt-4">First Name</div>
                <div className="text-gray-200 text-base">Cofounder &amp; CEO at Wifkain</div>
              </div>
            </div>
            <div className="flex lg:block space-x-4 lg:space-x-0">
              <div className="basis-1/2">
                <Image width="200" height="200" src={ProfilePic} alt="First Name" className="w-full rounded-full" />
              </div>
              <div className="basis-1/2">
                <div className="text-gray-100 text-[20px] font-bold lg:mt-4">First Name</div>
                <div className="text-gray-200 text-base">Group Head at Lazada, ex-GM of OFO</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-8 px-8 lg:px-0 w-full">
        <div className="container mx-auto">
          <div className="text-3xl font-extrabold text-center mb-4">
            Lets try out your personality
          </div>
          <MultipleChoice backgroundColor="#331033" questions={[
            { id: 1, text: 'What is 2+2', options: ['4', '5', '6'], answer: "4" },
            { id: 2, text: 'What is 4*4', options: ['14', '16', '19'], answer: "16" },
            { id: 3, text: 'What is 90+1', options: ['39', '01', '91'], answer: "91" }
          ]} />
        </div>
      </section>


      <section className="py-8 px-8 lg:px-0 w-full">
        <div className="container mx-auto">
          <div className="text-3xl font-extrabold text-center mb-4">
            Numerical Answer
          </div>
          <NumericalAnswer backgroundColor="#331033" question="What's 3*3" answer="9" />
        </div>
      </section>

      <section>
        <div style={{ backgroundColor: '#481b47' }} id="pricing">
          <div className="container xl:mx-auto px-8 py-10 md:px-12 sm:py-20">
            <h2 className="text-center text-white font-bold text-4xl sm:text-5xl font-display mb-8">Start Learning Now</h2>
            <div className="flex justify-center items-center flex-col lg:flex-row">
              <div className="w-full lg:w-1/3">
                <div className="shadow-xl bg-white rounded-lg p-8 pt-10 relative lg:rounded-r-none bg-gray-200 mb-8 lg:mb-0">
                  <div className="font-bold font-display text-gray-700 text-center mb-2 uppercase">Basic Package</div>
                  <div className="flex items-center justify-center">
                    <div className="text-gray-600 text-xl mr-4 line-through">$149</div>
                    <div className="text-black-700 text-4xl flex items-start text-black font-bold">
                      <span className="text-2xl">$</span>127
                    </div>
                  </div>
                  <div className="my-6 text-gray-800">
                    <div className="flex mb-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                          </path>
                        </svg>
                      </div>
                      <div className="ml-2">Entire
                        <span className="font-bold">JavaScript Simplified - Beginner</span>course</div>
                    </div>
                    <div className="flex mb-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div className="ml-2">Over <span className="font-bold">13 hours</span>
                        of content across
                        <span className="font-bold">74 videos</span>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                          </path></svg></div>
                      <div className="ml-2">Before and after source code for all projects
                      </div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                      <div className="ml-2">Exclusive access to private Discord community</div>
                    </div>
                    <div className="flex mb-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div className="ml-2">All future updates</div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                        </path></svg>
                    </div>
                      <div className="ml-2">3 months of Quokka.js Pro</div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                      <div className="ml-2">Lifetime access</div>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(true)} data-podia-embed="link" className="w-full block text-center px-6 py-4 rounded font-bold bg-gray-400 hover:bg-gray-500 text-white" data-initialized="true">Buy Now</button>
                </div>
              </div>


              <div className="w-full lg:w-1/3">
                <div className="shadow-xl bg-white rounded-lg p-8 pt-10 relative lg:rounded-r-none bg-gray-100 mb-8 lg:mb-0">
                  <div className="bg-purple-800 text-blue-100 px-3 py-1 absolute text-sm top-0 left-0 ml-2 mt-2 rounded">Most Popular</div>
                  <div className="font-bold font-display text-gray-700 text-center mb-2 uppercase">Complete Package</div>
                  <div className="flex items-center justify-center">
                    <div className="text-gray-600 text-xl mr-4 line-through">$299</div>
                    <div className="text-black-700 text-4xl flex items-start text-black font-bold">
                      <span className="text-2xl">$</span>197</div>
                  </div><div className="my-6 text-gray-800">
                    <div className="flex mb-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div className="ml-2"
                      ><span className="font-bold">Everything in the Basic Package</span>
                      </div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                      <div className="ml-2">Entire
                        <span className="font-bold">JavaScript Simplified - Advanced</span> course</div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                      <div className="ml-2">Over <span className="font-bold">27 hours</span> of content across <span className="font-bold">140 videos</span>
                      </div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                      <div className="ml-2">Download all videos for <span className="font-bold">offline access</span></div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                      <div className="ml-2">Before and after source code for all projects</div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                      <div className="ml-2">Exclusive access to private Discord community</div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">All future updates</div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">3 months of Quokka.js Pro</div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">Lifetime access</div>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(true)} data-podia-embed="link" className="w-full block text-center px-6 py-4 rounded font-bold bg-gray-400 hover:bg-gray-500 text-white" data-initialized="true">Buy Now</button></div>
                  </div>

                  <div className="w-full lg:w-1/3">
                <div className="shadow-xl bg-white rounded-lg p-8 pt-10 relative"><div className="bg-purple-800 text-blue-100 px-3 py-1 absolute text-sm top-0 left-0 ml-2 mt-2 rounded">Best Value</div>
                  <div className="font-bold font-display text-gray-700 text-center mb-2 uppercase">Premium Package</div>
                  <div className="flex items-center justify-center">
                    <div className="text-gray-600 text-xl mr-4 line-through">$399</div>
                    <div className="text-black-700 text-4xl flex items-start text-black font-bold">
                      <span className="text-2xl">$</span>297</div>
                  </div>
                  <div className="my-6 text-gray-800">
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div className="ml-2"><span className="font-bold">Everything in the Complete Package</span>
                      </div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">Just under
                        <span className="font-bold">40 hours</span> of content across <span className="font-bold">150 videos</span>
                      </div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">
                        <span className="font-bold">Six large bonus projects</span>
                      </div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">Four interviews with successful self-taught developers on
                        <span className="font-bold">how to land your first job</span>
                      </div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">Download all videos for
                        <span className="font-bold">offline access</span>
                      </div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">Before and after source code for all projects</div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">Exclusive access to private Discord community</div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">All future updates</div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">3 months of Quokka.js Pro</div>
                    </div>
                    <div className="flex mb-3"><div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                      <div className="ml-2">Lifetime access</div>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(true)} data-podia-embed="link" className="w-full block text-center px-6 py-4 rounded font-bold bg-gray-400 hover:bg-gray-500 text-white" data-initialized="true">Buy Now</button></div></div>
            </div>
          </div>
        </div>
      </section>


      <div className="text-blue-100">
        <div className="container xl:mx-auto px-8 py-10 md:px-12 sm:py-20">
          <h2 className="font-bold text-4xl text-center font-display mb-12">Frequently Asked Questions</h2>
          <div>
            <div>
              <div className="text-blue-100 text-xl font-display font-bold mb-2">What do I need to know to take this course?</div>
              <div className="text-blue-300 ml-0 sm:ml-4 text-lg mb-8">Nothing! You really dont need to know anything about programming before taking this course. The only thing you should know is the basics of HTML since all of the projects in this course will be based on HTML.</div>
            </div>
            <div>
              <div className="text-blue-100 text-xl font-display font-bold mb-2">How do I access the course after purchasing it?</div>
              <div className="text-blue-300 ml-0 sm:ml-4 text-lg mb-8">Check your email after purchasing the course. You should receive an email with a link to the course. If you do not receive this email please send me a message at
                <a href="mailto:kyle@webdevsimplified.com" className="hover:text-blue-100 text-blue-300 border-b-2 font-bold border-blue-500 hover:border-blue-300">kyle@webdevsimplified.com</a>and I will help you work it out.</div>
            </div>
            <div>
              <div className="text-blue-100 text-xl font-display font-bold mb-2">Does this course cover React, Express, jQuery, etc?</div>
              <div className="text-blue-300 ml-0 sm:ml-4 text-lg mb-8">No. This course is focused 100% on learning JavaScript. This means that no major frameworks or libraries will be used. Smaller libraries will be used for specific projects and things like Parcel, and Jest will be used to explain testing and bundlers, but the focus of this course is solely on JavaScript. If you are interested in learning React check out
                <a href="https://courses.webdevsimplified.com/learn-react-today" target="_blank" rel="noreferrer" className="hover:text-blue-100 text-blue-300 border-b-2 font-bold border-blue-500 hover:border-blue-300">my complete React course</a>.
              </div>
            </div>
            <div>
              <div className="text-blue-100 text-xl font-display font-bold mb-2">When was this course recorded?</div>
              <div className="text-blue-300 ml-0 sm:ml-4 text-lg mb-8">This course was recorded in March of 2021. That means this course focuses heavily on modern JavaScript concepts such as promises, modules, and bundlers without wasting your time on outdated JavaScript concepts.</div>
            </div>
            <div>
              <div className="text-blue-100 text-xl font-display font-bold mb-2">What if I buy the course and do not like it?</div>
              <div className="text-blue-300 ml-0 sm:ml-4 text-lg mb-8">While I am sure that you will love this course, if for any reason you do not, just email me at
                <a href="mailto:kyle@webdevsimplified.com" className="hover:text-blue-100 text-blue-300 border-b-2 font-bold border-blue-500 hover:border-blue-300">kyle@webdevsimplified.com</a> within one year for a full refund.</div>
            </div>
            <div>
              <div className="text-blue-100 text-xl font-display font-bold mb-2">Can I upgrade my bundle later?</div>
              <div className="text-blue-300 ml-0 sm:ml-4 text-lg mb-8">Yes! If you would like to update your bundle later just send me an email at
                <a href="mailto:kyle@webdevsimplified.com" className="hover:text-blue-100 text-blue-300 border-b-2 font-bold border-blue-500 hover:border-blue-300">kyle@webdevsimplified.com</a>.
              </div>
            </div>
            <div>
              <div className="text-blue-100 text-xl font-display font-bold mb-2">Can I buy a team bundle?</div>
              <div className="text-blue-300 ml-0 sm:ml-4 text-lg mb-8">Of course! Just send me an email at
                <a href="mailto:kyle@webdevsimplified.com" className="hover:text-blue-100 text-blue-300 border-b-2 font-bold border-blue-500 hover:border-blue-300">kyle@webdevsimplified.com</a>and we can workout a bundle for your entire team.</div>
            </div>
            <div>
              <div className="text-blue-100 text-xl font-display font-bold mb-2">Any other questions?</div><div className="text-blue-300 ml-0 sm:ml-4 text-lg mb-8">If you have any more questions about the course email me async function name(params:type) {

              }<a href="mailto:kyle@webdevsimplified.com" className="hover:text-blue-100 text-blue-300 border-b-2 font-bold border-blue-500 hover:border-blue-300">kyle@webdevsimplified.com</a> and I will answer any questions you have.</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full">
        <nav className="flex gap-10 items-center">
          <a className="cursor-pointer">Terms of Service</a>
          <a className="cursor-pointer">Privacy Policy</a>
        </nav>
      </footer>
    </main>
  );
}
