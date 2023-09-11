import React from 'react';

function Buttons() {
  return(
    <section className='p-10 grow text-black'>
      <header className='text-tittle-buttons text-[24px] mb-8 mt-3'>Buttons</header>

      <aricle className='flex flex-row text-[10px]' >
        <div className='mr-40'>
          <div> &lt;Button /&gt; </div>
          <button class="bg-gray-200 py-2 px-4 rounded mt-2">Button</button>
        </div>
        <div>
          <div className='text-gray-400'> &:hover, &:focus </div>
          <button class="bg-gray-300 focus:ring focus:ring-black hover:bg-gray-200 py-2 px-4 rounded mt-2">Button</button>
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