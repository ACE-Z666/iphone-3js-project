import React from 'react'
import {appleImg} from '../utils'
import {bagImg, searchImg} from '../utils'
import {navlists} from '../constants'
const Navbar = () => {
  return (
    <div>
     <header className='sm:px-10 px-5 flex justify-between items-center  w-full'>
        <nav className='flex w-full screen-max-width mt-5 sm:h-1/6'>
            <img src={appleImg} alt="apple" width={18} height={18}/>
            <div className='flex-1 flex justify-center max-sm:hidden pl-10 '>
                {navlists.map((nav) => (
                    <div key={nav} className='py-3 px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                        {nav}
                    </div>
                ))}
            </div>
            <div className='flex items-center gap-5 max-sm:justify-end max-sm:flex-1 mr-3 '>
                <img src={searchImg} alt="search" width={18} height={18}/>
                <img src={bagImg} alt="bag" width={18} height={18}/>
            </div>
        </nav>
     </header>
    </div>
  )
}

export default Navbar
