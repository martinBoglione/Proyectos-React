import React from 'react';

function Buttons() {
  return(
    <section className='p-10 grow text-black'>
      <header className='text-tittle-buttons text-[24px] mb-8 mt-3'>Buttons</header>

      <aricle className='flex flex-row w-[300px] justify-between text-[10px] mb-10' >
        <div>
          <div> &lt;Default /&gt; </div>
          <button class="bg-gray-200 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &:hover, &:focus </div>
          <button class="bg-gray-300 font-bold focus:ring focus:ring-black hover:bg-gray-200 py-2 px-4 rounded mt-2">Default</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[300px] justify-between text-[10px]' >
        <div>
          <div> &lt;Button variant="outline"/&gt; </div>
          <button class="bg-transparent text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &:hover, &:focus </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
      </aricle>
 

      <article className='m-4 text-footer font-semibold text-[12px]'>Icons: <a href='https://material.io/resources/icons/?style=round'>https://material.io/resources/icons/?style=round</a></article> 
      
      <footer className='m-4 text-footer font-semibold text-[14px]'>
        created by <span className='underline font-bold'>Martin Boglione</span> - devChallenges.io
      </footer>
    </section>
  );

}

export default Buttons; 