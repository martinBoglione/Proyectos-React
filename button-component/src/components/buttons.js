import React from 'react';
import Footer from './footer.js'
import Header from './header.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Buttons() {
  return(
    <section className='flex flex-col justify-between pl-10 pt-8 pb-2 grow text-black'>
      <Header/>

      <aricle className='flex flex-row w-[300px] justify-between text-[10px] mb-2' >
        <div>
          <div> &lt;Default /&gt; </div>
          <button class="bg-gray-200 font-bold shadow-md shadow-grey-500 py-2 px-4 rounded mt-1">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &:hover, &:focus </div>
          <button class="bg-gray-300 font-bold shadow-md shadow-grey-500 focus:ring focus:ring-black hover:bg-gray-200 py-2 px-4 rounded mt-1">Default</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[300px] justify-between text-[10px] mb-2' >
        <div>
          <div> &lt;Button variant="outline"/&gt; </div>
          <button class="bg-transparent text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded mt-1">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &:hover, &:focus </div>
          <button class="bg-blue-100 focus:ring focus:ring-blue hover:bg-blue-300 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mt-1">Default</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[300px] justify-between text-[10px] mb-2' >
        <div>
          <div> &lt;Button variant="text"/&gt; </div>
          <button class="bg-transparent text-blue-500 font-bold py-2 px-4 rounded mt-1">Default</button>
        </div>
        <div>
          <div className='text-gray-400'> &:hover, &:focus </div>
          <button class="bg-gray-100 focus:ring focus:ring-gray-300 hover:bg-gray-300 text-blue-500 font-bold py-2 px-4 rounded mt-1">Default</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[300px] justify-between text-[10px] mb-2' >
        <div>
          <div> &lt;Button disableShadow"/&gt; </div>
          <button class="bg-blue-600 text-white border border-blue-600 shadow-none font-bold py-2 px-4 rounded mt-1">Default</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[378px] justify-between text-[10px] mb-2' >
        <div>
          <div> &lt;Button disabled"/&gt; </div>
          <button class="bg-gray-200 text-gray-400 border cursor-not-allowed font-bold py-2 px-4 rounded mt-1">Disabled</button>
        </div>
        <div>
          <div className='text-gray-600'> &lt;Button variant="text" disabled/&gt; </div>
          <button class="bg-transparent  text-gray-400 cursor-not-allowed font-bold py-2 px-4 rounded mt-1">Disabled</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[450px] justify-between text-[10px] mb-2' >
        <div>
          <div> &lt;Button startIcon="local_grocery_store"/&gt; </div>
          <button class="bg-blue-500 text-white shadow-md shadow-grey-500 border border-blue-500 font-bold py-2 px-4 rounded mt-1 items-center">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />  
          Default
          </button>

        </div>
        <div>
          <div> &lt;Button endIcon="local_grocery_store"/&gt; </div>
          <button class="bg-blue-500 text-white shadow-md shadow-grey-500 border border-blue-500 font-bold py-2 px-4 rounded mt-1 items-center">
          Default
          <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />  
          </button>
        </div>
      </aricle>
 
      <aricle className='flex flex-row w-[400px] justify-between text-[10px] mb-2' >
        <div>
          <div> &lt;Button size="sm"/&gt; </div>
          <button class="bg-blue-500 w-16 h-7 shadow-md shadow-grey-500 text-white border border-blue-500 font-bold rounded mt-1">Default</button>
        </div>
        <div>
          <div> &lt;Button size="md"/&gt; </div>
          <button class="bg-blue-500 w-18 h-8 shadow-md shadow-grey-500 border border-blue-500 text-white font-bold py-2 px-4 rounded mt-1">Default</button>
        </div>
        <div>
          <div> &lt;Button size="lg"/&gt; </div>
          <button class="bg-blue-500 w-20 h-10 shadow-md shadow-grey-500 border border-blue-500 text-white font-bold rounded mt-1">Default</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[600px] justify-between text-[10px] mb-2' >
        <div>
          <div> &lt;Button color="default"/&gt; </div>
          <button class="bg-gray-200 text-gray-500 font-bold py-2 px-4 rounded mt-1">Default</button>
        </div>
        <div>
          <div> &lt;Button color="primary"/&gt; </div>
          <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded mt-1">Default</button>
        </div>
        <div>
          <div>  &lt;Button color="secondary"/&gt; </div>
          <button class="bg-gray-500 text-white font-bold py-2 px-4 rounded mt-1">Secondary</button>
        </div>
        <div>
          <div>  &lt;Button color="danger"/&gt; </div>
          <button class="bg-red-400 text-white font-bold py-2 px-4 rounded mt-1">Danger</button>
        </div>
      </aricle>

      <aricle className='flex flex-row w-[600px] justify-between text-[10px] mb-2' >
        <div>
          {/* El texto está en blanco para mantener las distacias xd */}
        <div> &:hover, &:focus <span className='text-white'>&lt;"priy"/&gt;</span> </div>
          <button class="bg-gray-300 text-gray-500 focus:ring focus:ring-gray-400 hover:bg-gray-400 font-bold py-2 px-4 rounded mt-1">Default</button>
        </div>
        <div>
        <div className='text-white'> &lt;Button color="primary"/&gt; </div>
          <button class="bg-blue-600 text-white focus:ring focus:ring-blue-700 hover:bg-blue-700 font-bold py-2 px-4 rounded mt-1">Default</button>
        </div>
        <div>
        <div className='text-white'> &lt;Button color="secondary"/&gt; </div>
          <button class="bg-gray-700 text-white focus:ring focus:ring-gray-800 hover:bg-gray-800 font-bold py-2 px-4 rounded mt-1">Secondary</button>
        </div>
        <div>
        <div className='text-white'>  &lt;Button color="danger"/&gt; </div>
          <button class="bg-red-700 text-white focus:ring focus:ring-red-800 hover:bg-red-800 font-bold py-2 px-4 rounded mt-1">Danger</button>
        </div>
      </aricle>

      <article className='text-footer font-semibold text-[12px]'>Icons: <a href='https://material.io/resources/icons/?style=round'>https://material.io/resources/icons/?style=round</a></article> 
      
      <Footer/>
    </section>
  );

}

export default Buttons; 