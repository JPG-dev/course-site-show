import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Module from './components/Module';
import Link from 'next/link';

const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Header loggedIn={true} />

      <section className='container mx-auto px-8 lg:px-0 flex items-center justify-center text-center pt-40 pb-20'>
        <div
          className='mock-container text-left rounded-md bg'
          style={{
            padding: '25px',
            maxWidth: '800px',
          }}
        >
          <div className='flex justify-between items-center mb-6'>
            <div className='text-3xl font-bold'>Venture Capital Launchpad</div>

            <Link
              className='button'
              href='/checkout'
              style={{ padding: '10px 25px', borderRadius: '10px' }}
            >
              Buy
            </Link>
          </div>

          <p className='mb-6'>
            The Venture Capital Launchpad is 13-module introductory course
            designed for anyone looking to learn more about the basics of
            early-stage venture capital in Southeast Asia, regardless of your
            career and background. Each module has corresponding videos,
            quizzes, supplementary readings and activities to go through.
            Complete the quizzes and activities for each module to proceed to
            the next, and at the end a final boss exam awaits. Pass the exam and
            you can unlock more resources and ways for you to take this journey
            youve begun to the next level, if you are hungry for more.
          </p>

          <div className='text-3xl mb-5 font-bold'>Modules</div>

          <p className='font-bold mb-5'>Venture Capital Fundamentals</p>

          <div className='grid gap-10'>
            <Module />
            <Module />
            <Module />
            <Module />
          </div>


          <p className='font-bold mb-5 mt-5'>Portfolio Management</p>

          <div className='grid gap-10'>
            <Module />
            <Module />
            <Module />
            <Module />
          </div>



        </div>
      </section>

      <Footer />
    </main>
  );
};

export default page;
