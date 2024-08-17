import React from 'react';
import WorkFlowCard from './work-flow-card';
import Icons from './icons';

const WorkFlow = () => {
  return (
    <div
      className='mx-auto flex w-full flex-col bg-neutral-100 py-20'
      data-scroll-section
    >
      <div className='mx-auto flex w-[90%] flex-col items-center justify-center space-y-10'>
        <p className='text-2xl font-semibold'>How JobPilot Works</p>
        <div className='flex flex-col items-center justify-between md:flex-row md:flex-wrap xl:flex-nowrap'>
          <div className='relative md:basis-1/2 xl:basis-1/4'>
            {/* <div className='absolute left-44 top-0 z-10'>
              <Icons.arrows className='p-1 text-primary' />
            </div> */}
            <WorkFlowCard invertColor />
          </div>
          <div className='relative md:basis-1/2 xl:basis-1/4'>
            {/* <div className='absolute left-44 top-16 z-10 -scale-y-100'>
              <Icons.arrows className='p-1 text-primary' />
            </div> */}
            <WorkFlowCard />
          </div>
          <div className='relative md:basis-1/2 xl:basis-1/4'>
            {/* <div className='absolute left-44 top-0 z-10'>
              <Icons.arrows className='p-1 text-primary' />
            </div> */}
            <WorkFlowCard invertColor />
          </div>
          <div className='md:basis-1/2 xl:basis-1/4'>
            <WorkFlowCard invertColor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
