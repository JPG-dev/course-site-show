import Link from 'next/link'
import Header from "@/components/Header";
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={{ background: `url(https://i.ibb.co/HCvgSJZ/hero.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%' }}>
        <Header />
        <section className="container mx-auto px-8 lg:px-0 flex items-center text-center md:pt-40 pt-5 pb-20">
          <div className="lg:w-3/4 mt-12 md:mt-0 mx-auto">
            <h1 className="md:text-5xl text-3xl font-extrabold mb-5" style={{ lineHeight: '1.5' }}>
              Start your journey to become a 6 figure blockchain developer today
            </h1>
            <div className="transform: translate(0px, 0px); opacity: 1;">
              <p className="text-paragraph w-5/6 mx-auto mb-5">
                Powered by BearTech Learning, join and grow alongside a growing community of developers
              </p>
              <div className="mx-auto block md:flex flex-row md:space-x-4 space-y-8 md:space-y-0 justify-center gap-y-4">
                <a href="#programs" className="w-full md:w-auto block md:inline">
                  <button className="p-3 rounded-lg font-extrabold">Explore our programs</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Experience />

      <section id="programs" className="py-10 px-8 lg:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-center">REMOTE PROGRAMS BUILT FOR EVERYONE</h2>
          <div className="text-paragraph mx-auto md:w-2/3 text-center py-8 px-0">Embark on an educational pathway best suited to your style of learning. Either way, we bring community and peer-to-peer engagement to you for an optimal boost to your career.</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <Link href="firstCourse" className='program bg hover'>
              <div className="p-12 group rounded cursor-pointer group duration-500  ">
                <h3 className="text-sm font-bold">SELF-PACED ONLINE MASTERCLASS</h3>
                <div className="text-32px py-6 font-bold  g">6-Month VC Launchpad</div>
                <div className="text-base">Enroll in our online course designed for emerging investors seeking to pick up venture capital fundamentals at their own pace. Get access to over 30 hours of video content, exercises and materials curated by industry veterans to hit the ground running as you kickstart your early-stage investing journey. </div>
                <div className="text-base font-bold mt-6 text-center button py-2 px-4 rounded">LEARN MORE</div>
              </div>
            </Link>


            <Link href="firstCourse" className='program bg hover'>
              <div className="p-12 group rounded cursor-pointer group duration-500">
                <h3 className="text-sm font-bold">SELF-PACED ONLINE MASTERCLASS</h3>
                <div className="text-32px py-6 font-bold">6-Month VC Launchpad</div>
                <div className="text-base">Enroll in our online course designed for emerging investors seeking to pick up venture capital fundamentals at their own pace. Get access to over 30 hours of video content, exercises and materials curated by industry veterans to hit the ground running as you kickstart your early-stage investing journey. </div>
                <div className="text-base font-bold mt-6 text-center button py-2 px-4 rounded">LEARN MORE</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-8 lg:px-0">
        <h2 className="text-3xl font-extrabold text-center mb-5">NEED A HAND?</h2>
        <div className="md:w-1/2 text-center text-paragraph mx-auto">Check out our free resources that help propel your startup or career forward.</div>
        
          <div className="p-8 md:py-[35px] md:px-[65px] rounded lg:w-2/3 mx-auto my-8">
              <div className="lg:basis-9/12 flex flex-col justify-between bg p-12 rounded">
                <h2 className="text-3xl font-extrabold text-center text-32px mb-4 lg:text-left">Funds, Accelerators &amp; Incubators</h2>
                <div className=" font-base mb-8 text-center lg:text-left">Get an overview of the players in the startup ecosystem (Southeast Asia and beyond) and decide which provides the most value-add for your company.</div>
                <div className="flex items-start flex-col lg:flex-row lg:space-y-0 space-y-4 lg:space-x-8">
                  <div className="lg:basis-2/3 w-full">
                    <div className="w-full">
                      <input type="text" placeholder="Email address" className="rounded w-full px-4 py-3 text-base h-[44px] outline-0 placeholder-gray duration-500 w-full" value="" />
                    </div>
                  </div>
                  <div className="lg:basis-1/3 w-full">
                    <button className="button duration-500 inline-flex items-center justify-center h-[44px] font-bold w-full">Access the list</button>
                  </div>
                </div>
              </div>
            
          </div>
        
      </section>

      <Footer />
    </main>
  );
}
