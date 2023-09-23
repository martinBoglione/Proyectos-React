import React from "react";
import Footer from './footer.js'
import Header from './header.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLock } from '@fortawesome/free-solid-svg-icons';


function Inputs() {
    return(
        <section className='flex flex-col justify-between pl-10 pt-8 pb-2 grow text-black'>
        <Header/>
  
        <aricle className='flex flex-row w-[728px] h-[105px] justify-between text-[10px] mb-8' >
          <div className="flex flex-col">
            <div> &lt;Input /&gt; </div>
            <label className="text-gray-900 mt-2">Label</label>
            <input type="text" className="border border-gray-400 text-gray-900 text-sm font-semibold rounded-lg p-2 h-12 w-52" placeholder="Placeholder"></input>
          </div>
          <div className="flex flex-col">
            <div className='text-gray-400'> &:hover</div>
            <label className="text-gray-900 mt-2 ">Label</label>
            <input type="text" className="border border-gray-800 text-gray-900 text-sm font-semibold hover:bg-gray-200 rounded-lg p-2 h-12 w-42" placeholder="Placeholder"></input>
          </div>
          <div className="flex flex-col">
            <div className='text-gray-400'> &:focus </div>
            <label className="text-blue-900 mt-2">Label</label>
            <input type="text" className="border border-blue-700 text-gray-900 text-sm placeholder-gray-400 font-semibold focus:ring-2 focus:outline-none focus:ring-blue-900 rounded-lg p-2 h-12 w-42" placeholder="Placeholder"></input>
          </div>
        </aricle>

        <aricle className='flex flex-row w-[728px] h-[105px] justify-between text-[10px] mb-8' >
          <div className="flex flex-col">
            <div> &lt;Input error /&gt; </div>
            <label className="text-red-700 mt-2">Label</label>
            <input type="text" className="border border-red-700 text-gray-900 text-sm font-semibold rounded-lg focus:outline-none p-2 h-12 w-52" placeholder="Placeholder"></input>
          </div>
          <div className="flex flex-col">
            <div className='text-gray-400'> &:hover</div>
            <label className="text-gray-900 mt-2 ">Label</label>
            <input type="text" className="border border-gray-800 text-gray-900 text-sm font-semibold hover:bg-red-300 rounded-lg focus:outline-none p-2 h-12 w-42" placeholder="Placeholder"></input>
          </div>
          <div className="flex flex-col">
            <div className='text-gray-400'> &:focus </div>
            <label className="text-red-700 mt-2">Label</label>
            <input type="text" className="border border-red-700 text-gray-900 text-sm placeholder-gray-400 font-semibold focus:ring-2 focus:outline-none focus:ring-red-900 rounded-lg p-2 h-12 w-42" placeholder="Placeholder"></input>
          </div>
        </aricle>

        <aricle className='flex flex-row w-[728px] h-[105px] justify-between text-[10px] mb-8' >
          <div className="flex flex-col">
            <div> &lt;Input disabled/&gt; </div>
            <label className="text-gray-900 mt-2">Label</label>
            <input type="text" disabled className="border bg-gray-100 border-gray-400 text-gray-900  text-sm font-semibold rounded-lg p-2 h-12 w-52" placeholder="Placeholder"></input>
          </div>
        </aricle>

        <aricle className='flex flex-row w-[600px] h-[105px] justify-between text-[10px] mb-8' >
          <div className="flex flex-col">
            <div> &lt;Input helperText="Some interesting text"/&gt; </div>
            <label className="text-gray-900 mt-2">Label</label>
            <input type="text" className="border border-gray-400 text-gray-900 text-sm font-semibold rounded-lg p-2 h-12 w-52" placeholder="Placeholder"></input>
            <div className="text-gray-300"> Some interesting text </div>
          </div>
          <div className="flex flex-col">
            <div className='text-gray-400'> &lt;Input helperText="Some interesting text" error/&gt;</div>
            <label className="text-red-700 mt-2 ">Label</label>
            <input type="text" className="border border-red-700 text-gray-900 text-sm font-semibold rounded-lg p-2 h-12 w-60" placeholder="Placeholder"></input>
            <div className="text-red-700"> Some interesting text </div>
          </div>
        </aricle>

        <aricle className='flex flex-row w-[600px] h-[105px] justify-between text-[10px] mb-8' >
          <div className="flex flex-col">
            <div> &lt;Input startIcon/&gt; </div>
            <label className="text-gray-900 mt-2">Label</label>
            <div>
              <FontAwesomeIcon icon={faPhone} className="absolute w-4 h-4 p-2 m-2 text-gray-400" /> 
              <input type="text" className="border border-gray-400 text-gray-900 text-sm font-semibold rounded-lg pl-12 h-12 w-52" placeholder="Placeholder"></input>
            </div>
          </div>
          <div className="flex flex-col">
            <div className='text-gray-900'> &lt;Input endIcon/&gt;</div>
            <label className="text-gray-900 mt-2 ">Label</label>
            <div>
              <FontAwesomeIcon icon={faLock} className="absolute w-4 h-4 pl-48 p-2 m-2 text-gray-400" /> 
              <input type="text" className="border border-gray-400 text-gray-900 text-sm font-semibold rounded-lg p-2 h-12 w-60" placeholder="Placeholder"></input>
            </div>
          </div>
        </aricle>

        <aricle className='flex flex-row w-[728px] h-[105px] justify-between text-[10px] mb-8' >
          <div className="flex flex-col">
            <div> &lt;Input value="text"/&gt; </div>
            <label className="text-gray-900 mt-2">Label</label>
            <input type="text" className="border border-gray-400 text-gray-900 text-sm font-semibold rounded-lg p-2 h-12 w-52" placeholder="Placeholder"></input>
          </div>
        </aricle>

        <aricle className='flex flex-row w-[600px] h-[105px] justify-between text-[10px] mb-8' >
          <div className="flex flex-col">
            <div> &lt;Input size="sm"/&gt; </div>
            <label className="text-gray-900 mt-2">Label</label>
            <input type="text" className="border border-gray-400 text-gray-900 text-sm font-semibold rounded-lg p-2 h-12 w-52 h-8" placeholder="Placeholder"></input>
          </div>
          <div className="flex flex-col">
            <div className='text-gray-400'> &lt;Input size="md"/&gt; </div>
            <label className="text-gray-900 mt-2 ">Label</label>
            <input type="text" className="border border-gray-400 text-gray-900 text-sm font-semibold rounded-lg p-2 h-14" placeholder="Placeholder"></input>
          </div>
        </aricle>

        <aricle className='h-[105px] text-[10px] mb-8' >
          <div className="flex flex-col pr-40">
            <div> &lt;Input fullWidth/&gt; </div>
            <label className="text-gray-900 mt-2">Label</label>
            <input type="text" className="w-full border border-gray-400 text-gray-900 text-sm font-semibold rounded-lg p-2 h-12" placeholder="Placeholder"></input>
          </div>
        </aricle>

        <aricle className='flex flex-row w-[728px] h-[105px] justify-between text-[10px] mb-8' >
          <div className="flex flex-col">
            <div> &lt;Input multiline row="4"/&gt; </div>
              <label className="text-gray-900 mt-2">Label</label>
              <textarea
               rows="4"  // Establecer el número de filas
                className="w-full border border-gray-800 text-gray-900 text-sm rounded-lg p-2"
                placeholder="Placeholder"  // Placeholder personalizado
              ></textarea>
          </div>
        </aricle>
        
        <Footer/>
      </section>
    );
}

export default Inputs;