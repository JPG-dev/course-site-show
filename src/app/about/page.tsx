import Image from "next/image";
import Link from 'next/link'
import NextLogo from '../../../public/vercel.svg';
import ProfilePic from '../../../public/profilePicImage.jpeg'; // Import the image file
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
    <Header />

<div className="container mx-auto flex lg:space-x-16 pt-40 px-8 md:px-0">
  {/* Side nav */}
  <div data-nav="list">
    <ul className="hidden lg:block mt-6 space-y-1 sticky top-[9rem] mb-16">
      <li className="">
        <a href="#about" className="block py-2 px-8 font-bold text-white rounded-md">ABOUT US</a>
        </li>
          <li className="">
            <a href="#chart" className="block py-2 px-8 font-bold text-white rounded-md">Organizational Chart</a>
            </li>
            <li className="">
              <a href="#board" className="block py-2 px-8 font-bold text-white rounded-md">The Board</a>
              </li>
              <li className="">
                <a href="#managers" className="block py-2 px-8 font-bold text-white rounded-md">Managers</a>
                </li>
                <li className="">
                  <a href="#teachers" className="block py-2 px-8 font-bold text-white rounded-md">Teachers</a>
                  </li>
                        </ul>
                        </div>

{/* About */}
<div className="lg:flex-1 animate-fade-in-right-little">
  <div id="about" className="pb-20">
    <div className="text-5xl font-extrabold" style={{ paddingBottom: '20px' }}>ABOUT US</div>
    <div className="text-paragraph">
      <span>Insignia Ventures Academy (IVA) is a private education institution that offers programs and courses that provides the opportunity for individuals to get a headstart in building a track record in the startup space.</span>
      <br/>
      <br/>
      <span>One of its flagship program, Certificate in VC is a 12-week, fully immersive experiential venture capital program that provides the opportunity for individuals to get a headstart in building a track record as an investor.</span>
      <br/>
      <br/>
      <span>First of its kind in Asia, the program has students go through live online classes headed by top investors and seasoned startup founders, practical exercises and investment committee meetings. Throughout the program, students get mentored by experienced venture capitalists and gain valuable connections with fellow aspiring investors and founders.</span>
      <br/>
      <br/>
      <span>By the end of the program, students can expect to have built an understanding of investment fundamentals and repertoire of skills that will help them advance in their investment career.</span>
      </div>
      </div>

      <section id="chart" className="pt-8">
        <div className="pb-8">
          <div className="text-5xl font-extrabold">Organizational Chart</div>
          <div className="space-y-4">
            <div className="lg:flex items-center lg:space-x-20">
              <div className="text-gray-100 basis-3/12 whitespace-pre-line mb-4 lg:mb-0">Senior Management and Board</div>
 <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
  <div className="rounded-lg flex items-center justify-center bg-dark-300 h-full">
    <div className="h-full text-white text-[20px] font-bold py-6">Tan Yinglan</div>
    </div>
    <div className="rounded-lg flex items-center justify-center bg-dark-300 h-full">
      <div className="h-full text-white text-[20px] font-bold py-6">Lim Siong Guan</div>
      </div>
      </div>
      </div>
      <div className="lg:flex items-center lg:space-x-20">
        <div className="text-22px font-bold text-gray-100 basis-3/12 whitespace-pre-line mb-4 lg:mb-0">Managers</div>
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-lg flex items-center justify-center bg-dark-300 h-full">
            <div className="h-full text-white text-[20px] font-bold py-6">Tan Yinglan</div>
            </div>
            <div className="rounded-lg flex items-center justify-center bg-dark-300 h-full">
              <div className="h-full text-white text-[20px] font-bold py-6">Yeh Huei Yu</div>
              </div>
              <div className="rounded-lg flex items-center justify-center bg-dark-300 h-full">
                <div className="h-full text-white text-[20px] font-bold py-6">Jiaway Koh</div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </section>


                <section id="board" className="py-8">
                  <div id="board" className="text-5xl font-extrabold">Senior Management and Board</div>
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:space-x-8">
                      <Image src={ProfilePic} alt="Tan Yinglan" className="rounded-md self-stretch" />
                      <div className="text-center md:text-left">
                        <div className="font-bold text-white text-[20px] mt-4 md:mt-0">Tan Yinglan</div>
                        <div className="text-gray-200 text-base my-4">Founding Managing Partner at Insignia Ventures Partners</div>
                        <div className="text-gray text-base">Tan Yinglan founded Insignia Ventures Partners in late 2017 and is the Founding Managing Partner. Prior to founding Insignia Venture Partners, Yinglan was Sequoia Capitals first hire and Venture Partner in Southeast Asia. He sourced multiple investment opportunities for Sequioa including Tokopedia, Go-jek, Traveloka, Carousell and Appier. Yinglan is an Adjunct Associate Professor at National University of Singapore, a Forbes columnist and author.</div>
                        </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-8">
                          <Image src={ProfilePic} alt="Lim Siong Guan" className="rounded-md self-stretch" />
                          <div className="text-center md:text-left">
                            <div className="font-bold text-white text-[20px] mt-4 md:mt-0">Lim Siong Guan</div>
                            <div className="text-gray-200 text-base my-4">Senior Advisor of Insignia Ventures Partners, Professor at Lee Kuan Yew School of Public Policy</div>
                            <div className="text-gray text-base">Siong Guan is a Professor in the Lee Kuan Yew School of Public Policy, instructing on leadership and change management, and a Senior Fellow of the Singapore Civil Service College. He was the Group President of GIC from 2017 to 2016. GIC is the fund manager for the foreign financial reserves of Singapore. He chairs the Board of Directors of SwissRe (Swiss Reinsurance) Asia, and a Director of Wilmar International Ltd., Asias leading agribusiness groups.</div>
                            </div>
                            </div>
                            </div>
                            </section>
                            <section id="managers" className="py-8">
                              <div className="text-5xl font-extrabold">Managers</div>
                              <div className="text-base text-gray-200 mb-8">Insignia Ventures Academy’s PEI Managers oversee the proper functioning of the PEI. They play an important role in maintaining the standards in corporate governance and information disclosure.</div>
                              <div className="space-y-4">
                                <div className="flex justify-between">
                                  <div className="text-[20px] font-bold text-white">Tan Yinglan</div>
                                  <div>
                                    <a href="mailto:yinglan@insignia.academy" className="text-purple-400">yinglan@insignia.academy</a>
                                    </div>
                                    </div>
                                    <div className="flex justify-between">
                                      <div className="text-[20px] font-bold text-white">Yeh Huei Yu</div>
                                      <div>
                                        <a href="mailto:belle@insignia.academy" className="text-purple-400">belle@insignia.academy</a>
                                        </div>
                                        </div>
                                        <div className="flex justify-between">
                                          <div className="text-[20px] font-bold text-white">Jiaway Koh</div>
                                          <div>
                                            <a href="mailto:jiaway@insignia.academy" className="text-purple-400">jiaway@insignia.academy</a>
                                            </div>
                                            </div>
                                            </div>
                                            </section>
                                            <section id="teachers" className="py-16">
                                              <div className="text-5xl font-extrabold">Teachers</div>
                                              <div className="space-y-8">
                                                <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full justify-between">
                                                  <Image src={ProfilePic} alt="Tan Yinglan" className="rounded-md self-stretch" />
                                                  <div className="flex-1">
                                                    <div className="font-bold text-white text-[20px]">Tan Yinglan</div>
                                                    <div className="text-gray-200 text-base my-4">Founding Managing Partner at Insignia Ventures Partners</div>
                                                    <div className="space-y-4">
                                                      <div className="space-y-1">
                                                        <div className="text-gray text-base">Dual B.Sc, ECE and Economics</div>
                                                        <div className="text-gray text-base font-bold">Carnegie Mellon University</div>
                                                        </div>
                                                        <div className="space-y-1">
                                                          <div className="text-gray text-base">Masters, Management Science and Engineering</div>
                                                          <div className="text-gray text-base font-bold">Stanford University</div>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          <div className="basis-1/4">
                                                            <div className="text-white font-bold text-[20px] border-b py-2">Modules (FT/PT)</div>
                                                            <ul className="list-disc ml-4 py-2 space-y-2">
                                                              <li className="text-white">Deal Sourcing</li>
                                                              <li className="text-white">Valuation</li>
                                                              <li className="text-white">Deal Structure</li>
                                                              <li className="text-white">Term Sheet Negotiation</li>
                                                              <li className="text-white">Fundraising</li>
                                                              </ul>
                                                              </div>
                                                              </div>
                                                              </div>
                                                              </section>
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
