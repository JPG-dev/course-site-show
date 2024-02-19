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
    <main className="min-h-screen p-8">
      <Header loggedIn={true} />
      <section className="container mx-auto px-8 lg:px-0 pt-40 pb-20">
        <div className="flex mb-4">
          <button
            className={`mr-4 py-2 px-4 rounded-t-lg ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            onClick={() => handleTabChange('all')}
          >
            All Courses
          </button>
          <button
            className={`py-2 px-4 rounded-t-lg ${activeTab === 'my' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            onClick={() => handleTabChange('my')}
          >
            My Courses
          </button>
        </div>

        <h2 className="text-xl font-bold mb-4">{activeTab === "all" ? "All Courses" : "My Courses"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeTab === 'all' && (
            <>
              <HomeCourse price="$230" />
              <HomeCourse price="$230" />
              <HomeCourse price="$230" />
              <HomeCourse price="$230" />
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
