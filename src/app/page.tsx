import Link from 'next/link'
import Header from "@/components/Header";
import Experience from "@/components/Experience"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={{ background: `url(https://i.ibb.co/HCvgSJZ/hero.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%' }}>
        <Header />
        <section className="container mx-auto px-8 lg:px-0 flex items-center text-center pt-40 pb-20">
          <div className="lg:w-3/4 mt-24 md:mt-0 mx-auto">
            <h1 className="text-5xl font-extrabold" style={{ lineHeight: '1.5' }}>
              Start your journey to become a 6 figure blockchain developer today
            </h1>
            <div className="transform: translate(0px, 0px); opacity: 1;">
              <p className="text-paragraph w-5/6 mx-auto py-8">
                Powered by BearTech Learning, join and grow alongside a growing community of developers
              </p>
              <div className="mx-auto block md:flex flex-row md:space-x-4 space-y-8 md:space-y-0 justify-center gap-y-4">
                <a href="#programs" className="w-full md:w-auto block md:inline">
                  <button className="p-3 bg-purple-500 rounded-lg font-extrabold">Explore our programs</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Experience />

      <section id="programs" className="py-10 px-8 lg:px-0">
        <div className="container mx-auto">
          <div className="text-3xl font-extrabold text-center">REMOTE PROGRAMS BUILT FOR EVERYONE</div>
          <div className="text-paragraph mx-auto md:w-2/3 text-center py-8 px-0">Embark on an educational pathway best suited to your style of learning. Either way, we bring community and peer-to-peer engagement to you for an optimal boost to your career.</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <Link href="firstCourse">
              <div className="p-12 group rounded cursor-pointer group duration-500 bg-gray-800 hover:bg-[#FFFAE1]">
                <div className="text-sm font-bold text-yellow group-hover:text-[#2A1D7A]">SELF-PACED ONLINE MASTERCLASS</div>
                <div className="text-32px py-6 font-bold text-white group-hover:text-[#262626]">6-Month VC Launchpad</div>
                <div className="text-base font-light text-white group-hover:text-[#262626]">Enroll in our online course designed for emerging investors seeking to pick up venture capital fundamentals at their own pace. Get access to over 30 hours of video content, exercises and materials curated by industry veterans to hit the ground running as you kickstart your early-stage investing journey. </div>
                <div className="text-base text-blue font-bold mt-6 text-yellow group-hover:text-[#2A1D7A]">LEARN MORE</div>
              </div>
            </Link>


            <Link href="firstCourse">
              <div className="p-12 group rounded cursor-pointer group duration-500 bg-gray-800 hover:bg-[#FFFAE1]">
                <div className="text-sm font-bold text-yellow group-hover:text-[#2A1D7A]">SELF-PACED ONLINE MASTERCLASS</div>
                <div className="text-32px py-6 font-bold text-white group-hover:text-[#262626]">6-Month VC Launchpad</div>
                <div className="text-base font-light text-white group-hover:text-[#262626]">Enroll in our online course designed for emerging investors seeking to pick up venture capital fundamentals at their own pace. Get access to over 30 hours of video content, exercises and materials curated by industry veterans to hit the ground running as you kickstart your early-stage investing journey. </div>
                <div className="text-base text-blue font-bold mt-6 text-yellow group-hover:text-[#2A1D7A]">LEARN MORE</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-8 lg:px-0">
        <div className="text-3xl font-extrabold text-center">NEED A HAND?</div>
        <div className="md:w-1/2 text-center text-paragraph mx-auto">Check out our free resources that help propel your startup or career forward.</div>
        <div className="my-16">
          <div className="gradient-bg p-8 md:py-[35px] md:px-[65px] rounded lg:w-2/3 mx-auto my-16 bg-cover bg-top bg-gradient-2">
            <div>
              <div className="lg:basis-9/12 flex flex-col justify-between">
                <div className="text-3xl font-extrabold text-center text-white text-32px mb-4 text-center lg:text-left">Funds, Accelerators &amp; Incubators</div>
                <div className="text-white font-base mb-8 text-center lg:text-left">Get an overview of the players in the startup ecosystem (Southeast Asia and beyond) and decide which provides the most value-add for your company.</div>
                <div className="flex items-start flex-col lg:flex-row lg:space-y-0 space-y-4 lg:space-x-8">
                  <div className="lg:basis-2/3 w-full">
                    <div className="w-full">
                      <input type="text" placeholder="Email address" className="rounded w-full px-4 py-3 text-base h-[44px] outline-0 placeholder-gray duration-500 w-full" value="" />
                    </div>
                  </div>
                  <div className="lg:basis-1/3 w-full">
                    <button className="button whitespace-nowrap duration-500 inline-flex items-center justify-center bg-purple border border-purple font-bold hover:bg-purple-500 hover:border-purple-500 w-full">Access the list</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full">
        <nav className="flex gap-10 items-center">
          <a className="cursor-pointer">Terms of Service</a>
          <a className="cursor-pointer">Privacy Policy</a>
        </nav>
      </footer>
    </main>
  );
}
