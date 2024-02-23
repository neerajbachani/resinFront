import React, { useState } from 'react';
import dept_menu from '../../../assets/menus.png';
import herosection from '../../../assets/CouponPoster.jpeg'
import { useMenu } from '../ContextProvider/MenuContext';


const DeptAndSearch = () => {

  const { isOpen, toggleDropdown } = useMenu();

  const menuItems = [
    {
      name: 'Resin Art',
      url: '/products?category=Resin&subcategories=Key%20Chains', // Add the URL for Resin Art
      subItems: [
        { name: 'Key Chains', url: '/products?category=Resin&subcategory=Key%20Chains' },
        { name: 'Geode Art', url: '/products?category=Resin&subcategory=Wall%20Clock' },
        { name: 'Digital Art', url: 'products?category=digital' },
        { name: 'Neon Art', url: '/products?category=Lippan&subcategory=Lippan%20Art' },
        { name: 'Reart Art', url: '/reart-art' },
        { name: 'Gift Card', url: '/gift-card' },
      ],
    },
    'Lippan Art',
    'Digital Art',
    'Geode Art',
    'For Business',
    'Vintage frames',
    'Jewellry',
    'Festival Special',
  ];


  return (
    
    <section className='  bg-[#3b78ab] flex justify-between px-5 items-center'>
      
      <div className='bg-[#55bae9]  relative p-5  flex justify-between rounded-tr-md rounded-tl-md gap-[5rem] items-center mt-4'>
        <div className='flex flex-col -space-y-1'>
          <h2 className='text-xl text-[#fff] font-poppins font-bold'>All Departments</h2>
          <h3 className='text-sm text-[#fff] font-poppins font-semibold text-opacity-80'>500+ Products Available</h3>
        </div>
        <div className='inline-block '>
          <button onClick={toggleDropdown} >
            <img className='h-7 w-7' src={dept_menu} alt='Menubar' />
          </button>

          
          { isOpen && (<div className='origin-top-right absolute right-0  left-0 top-[100%] bg-[#edf2fb] rounded-bl-md rounded-br-md shadow-lg bg-white ring-opacity-5 '>
            <div className=' border-[0.1rem] divide-y divide-border-color border-border-color'>

              {menuItems.map((item, index) => (
                <div className='flex justify-between items-center relative group' key={index}>
                  {typeof item === 'object' ? (
                    <div className=''>
                      <a
                        href={item.url}
                        className='block px-4 py-4 hover:text-[#0077b6] text-xl font-poppins font-semibold text-secondary-dark-color'
                      >
                        {item.name}
                      </a>
                      <ul style={{
                        background: "rgb(224,235,255)",
                        background: "linear-gradient(90deg, rgba(224,235,255,1) 0%, rgba(107,154,240,1) 100%)",

                      }}
                        className="hidden z-30 absolute left-[100%] top-0 w-[100%] border-[0.1rem] border-border-color group-hover:block    overflow-x-hidden ">
                        <img src={herosection} className=' object-cover h-full  absolute opacity-30   ' />
                        {item.subItems.map((subItem, subIndex) => (
                          <div className='relative'>
                            <li className=' h-auto   p-5' key={subIndex}>
                              <a
                                href={subItem.url}
                                className='text-xl  font-poppins text-primarycolor hover:text-[#0077b6]  '
                              >
                                {subItem.name}
                              </a>
                            </li>
                          </div>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <a
                      href='#'
                      className='block px-4 py-4 text-secondary-dark-color font-poppins hover:text-[#0077b6] text-xl font-semibold '
                    >
                      {item}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeptAndSearch;


