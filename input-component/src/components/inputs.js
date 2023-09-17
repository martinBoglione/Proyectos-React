import React from "react";
import Footer from './footer.js'
import Header from './header.js'


function Inputs() {
    return(
        <section className='flex flex-col justify-between pl-10 pt-8 pb-2 grow text-black'>
        <Header/>
  
        <aricle className='flex flex-row w-[728px] h-[105px] justify-between text-[10px] mb-2' >
          <div className="flex flex-col">
            <div> &lt;Input /&gt; </div>
            <label className="text-gray-900 mt-2">Label</label>
            <input type="text" className="border border-gray-400 text-gray-900 text-sm font-semibold rounded-lg p-2 h-12 w-42" placeholder="Placeholder"></input>
          </div>
          <div className="flex flex-col">
            <div className='text-gray-400'> &:hover</div>
            <label className="text-gray-900 mt-2 ">Label</label>
            <input type="text" className="border border-gray-800 text-gray-900 text-sm font-semibold rounded-lg p-2 h-12 w-42" placeholder="Placeholder"></input>
          </div>
          <div className="flex flex-col">
            <div className='text-gray-400'> &:focus </div>
            <label className="text-blue-900 mt-2">Label</label>
            <input type="text" className="border border-blue-700 text-gray-900 text-sm placeholder-gray-400 font-semibold rounded-lg p-2 h-12 w-42" placeholder="Placeholder"></input>
          </div>
        </aricle>
        
        <Footer/>
      </section>
    );
}

export default Inputs;