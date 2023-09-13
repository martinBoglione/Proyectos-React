import React from 'react';
import Footer from './footer.js'
import Header from './header.js'

function Buttons() {
  return(
    <section className='flex flex-col justify-between  pl-10 pt-8 pb-4 grow text-black'>
      <Header/>

      <aricle className='flex flex-row w-[300px] justify-between text-[10px]' >
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

      <aricle className='flex flex-row w-[300px] justify-between text-[10px]' >
        <div>
          <div> &lt;Button variant="text"/&gt; </div>
          <button class="bg-transparent text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &:hover, &:focus </div>
          <button class="bg-gray-100 focus:ring focus:ring-gray-300 hover:bg-gray-300 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[300px] justify-between text-[10px]' >
        <div>
          <div> &lt;Button disableShadow"/&gt; </div>
          <button class="bg-transparent text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[378px] justify-between text-[10px]' >
        <div>
          <div> &lt;Button disabled"/&gt; </div>
          <button class="bg-transparent text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &lt;Button variant="text" disabled/&gt; </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[450px] justify-between text-[10px]' >
        <div>
          <div> &lt;Button startIcon="local_grocery_store"/&gt; </div>
          <button class="bg-transparent text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &lt;Button endIcon="local_grocery_store"/&gt; </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
      </aricle>
 
      <aricle className='flex flex-row w-[400px] justify-between text-[10px]' >
        <div>
          <div> &lt;Button size="sm"/&gt; </div>
          <button class="bg-transparent text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &lt;Button size="md"/&gt; </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &lt;Button size="lg"/&gt; </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[600px] justify-between text-[10px]' >
        <div>
          <div> &lt;Button color="default"/&gt; </div>
          <button class="bg-transparent text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &lt;Button color="primary"/&gt; </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'>  &lt;Button color="secondary"/&gt; </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'>  &lt;Button color="danger"/&gt; </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[600px] justify-between text-[10px]' >
        <div>
          <div> &lt;Button color="default"/&gt; </div>
          <button class="bg-transparent text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &lt;Button color="primary"/&gt; </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'>  &lt;Button color="secondary"/&gt; </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
        <div>
          <div className='text-gray-400'>  &lt;Button color="danger"/&gt; </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-2">Default</button>
        </div>
      </aricle>

      <article className='text-footer font-semibold text-[12px]'>Icons: <a href='https://material.io/resources/icons/?style=round'>https://material.io/resources/icons/?style=round</a></article> 
      
    <Footer/>
    </section>
  );

}

export default Buttons; 