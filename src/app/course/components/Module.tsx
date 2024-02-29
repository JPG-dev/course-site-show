'use client';
import React, { useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Module = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='module border hover cursor-pointer rounded' style={{ padding: '15px' }}>
      <div className='flex justify-between items-center'>
        <div className='mr-8'>
          <div className='bold'>
            Module 1: Southeast Asia is not Silicon Valley
          </div>
          <p className='mt-5'>Introduction to Venture Capital</p>
        </div>

        <div
          className='arrow cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ArrowDownwardIcon style={{ rotate: '180deg' }} />
          ) : (
            <ArrowDownwardIcon />
          )}
        </div>
      </div>

      {isOpen ? (
        <div className='metadata mt-5'>
          <p>
            Begin your journey understanding venture capital through the lens of
            Southeast Asia’s startup ecosystem. Learn what makes VC such a
            catalyst for technology market creation: business model, fund lives,
            and firm structures.
          </p>

          <div className='grid gap-5 mt-5'>
            <div className='flex items-center gap-5'>
              <div className='circle w-5 h-5 rounded-full' />
              <p>1 Introduction to Venture Capital [VIDEO]</p>
            </div>

            <div className='flex items-center gap-5'>
              <div className='circle w-5 h-5 rounded-full' />
              <p>Foreword</p>
            </div>

            <div className='flex items-center gap-5'>
              <div className='circle w-5 h-5 rounded-full' />
              <p>Chapter 1 - Backing the Bold Supplementary Reading</p>
            </div>

            <div className='flex items-center gap-5'>
              <div className='circle w-5 h-5 rounded-full' />
              <p>Homework</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Module;
