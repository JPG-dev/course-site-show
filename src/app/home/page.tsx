"use client"
import React, { useState } from 'react';
import HomeCourse from "@/components/HomeCourse"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Home = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="flex min-h-screen flex-col items-center home">
      <Header loggedIn={true} />
      <section className="container mx-auto px-8 lg:px-0 md:pt-40 pt-5 pb-20">
        <div className="flex mb-4">
          <button
            className={`mr-4 py-2 px-4 rounded-t-lg tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => handleTabChange('all')}
          >
            All Courses
          </button>
          <button
            className={`py-2 px-4 rounded-t-lg tab ${activeTab === 'my' ? 'active' : ''}`}
            onClick={() => handleTabChange('my')}
          >
            My Courses
          </button>
        </div>

        <h2 className="text-xl font-bold mb-4">{activeTab === "all" ? "All Courses" : "My Courses"}</h2>

        <div className="courses-grid">
          {activeTab === 'all' && (
            <>
              <HomeCourse price="$230" />
              <HomeCourse price="$230" />
            </>
          )}
          {activeTab === 'my' && (
            <>
              <HomeCourse own />
              <HomeCourse own />
              <HomeCourse own />
              <HomeCourse own />
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
