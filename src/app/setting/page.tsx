'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Profile from './components/Profile';
import CustomModal from '@/components/CustomModal';
import Logo from '../../../public/cropped-logo.png';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Setting = () => {
  const [selectedTab, setSelectedTab] = useState<string>('profile');
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className='flex min-h-screen flex-col items-center setting'>
      <Header loggedIn={true} />
      <section
        className='container mx-auto flex items-center flex-col md:flex-row text-center relative z-99'
        style={{ marginTop: '35px' }}
      >
        <div
          className='sidebar hidden md:block bg h-full p-12 rounded'
          style={{ width: '200px' }}
        >
          <div
            onClick={() => setSelectedTab('profile')}
            className={`rounded-md row cursor-pointer mx-auto p-2 ${
              selectedTab === 'profile' ? 'active' : ''
            }`}
          >
            Profile
          </div>
          <div
            onClick={() => setSelectedTab('account')}
            className={`rounded-md row cursor-pointer mx-auto p-2 ${
              selectedTab === 'account' ? 'active' : ''
            }`}
          >
            My Account
          </div>
          <div
            onClick={() => setSelectedTab('password')}
            className={`rounded-md row cursor-pointer mx-auto p-2 ${
              selectedTab === 'password' ? 'active' : ''
            }`}
          >
            Password
          </div>
        </div>

        <CustomModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          className='modal sidebar'
        >
          <Image
            src={Logo}
            alt='logo'
            width={125}
            height={125}
            style={{ filter: 'brightness(105)' }}
          />
          <div
            onClick={() => {
              setSelectedTab('profile');
              toggleSidebar();
            }}
            className={`rounded-md row cursor-pointer mx-auto p-2 ${
              selectedTab === 'profile' ? 'active' : ''
            }`}
          >
            Profile
          </div>
          <div
            onClick={() => {
              setSelectedTab('account');
              toggleSidebar();
            }}
            className={`rounded-md row cursor-pointer mx-auto p-2 ${
              selectedTab === 'account' ? 'active' : ''
            }`}
          >
            My Account
          </div>
          <div
            onClick={() => {
              setSelectedTab('password');
              toggleSidebar();
            }}
            className={`rounded-md row cursor-pointer mx-auto p-2 ${
              selectedTab === 'password' ? 'active' : ''
            }`}
          >
            Password
          </div>
        </CustomModal>

        <div className='metadata-content w-full h-full flex flex-col px-4'>
          <div className='block md:hidden w-full text-left mb-2'>
            <MenuBookIcon
              className='sidebar cursor-pointer'
              onClick={() => toggleSidebar()}
              style={{ width: '30px', height: '30px' }}
            />
          </div>
          <div className='text-left'>
            <div className='mb-2'>Settings</div>
            <h3 className='text-2xl bold mb-2'>
              {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
            </h3>
          </div>
          <div
            className={`content bg p-12 rounded ${
              selectedTab === 'profile' ? 'flex-grow' : ''
            }`}
          >
            {selectedTab === 'profile' ? <Profile /> : null}
            {selectedTab === 'account' ? (
              <>
                <div className='text-left mb-5'>
                  <label>EMAIL</label>
                  <div className='ui input'>
                    <input
                      className='w-full p-2'
                      placeholder='Input your email'
                      name='email'
                      id='email'
                      type='text'
                    />
                  </div>
                </div>

                <div className='field'>
                  <button
                    className='ui button w-full p-2 hover:opacity-80'
                    type='submit'
                  >
                    Save
                  </button>
                </div>
              </>
            ) : null}
            {selectedTab === 'password' ? (
              <>
                <div className='text-left mb-5'>
                  <label>NEW PASSWORD</label>
                  <div className='ui input'>
                    <input
                      className='w-full p-2'
                      placeholder='Password'
                      name='password'
                      id='password'
                      type='password'
                    />
                  </div>
                </div>

                <div className='field'>
                  <button
                    className='ui button w-full p-2 hover:opacity-80'
                    type='submit'
                  >
                    Save
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Setting;
