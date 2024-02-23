import React from 'react'
import AboutUsImg from '../../../assets/FeaturedProducts1.jpg'
import rectangle35 from '../../../assets/rectangle-35@2x.png'
import rectangle36 from '../../../assets/rectangle-36@2x.png'
import rectangle34 from '../../../assets/rectangle-34@2x.png'



const AboutUs = () => {
  return (
    <section className=' mt-[5rem] ' >
        <h2 className=' text-4xl font-bold font-poppins  text-secondary-dark-color  ml-[4rem] ' >About Us</h2>
       
        <div className=' flex mt-[2rem] gap-10 mx-[2rem]  ' >
            <div>
                <img className=' sm:block hidden w-[25rem] h-[25rem] object-cover  shadow-2xl shadow-light-text-color ' src={AboutUsImg} />
            </div>
            <div className=' mt-[1rem] ml-[2rem] flex flex-col space-y-3 gap-3 max-w-[50vw] ' >
                <h3 className=' font-poppins font-semibold text-3xl text-secondary-dark-color ' >Why Choose Us?</h3>
                <p className=' font-poppins font-normal text-xl text-secondary-dark-color ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia eligendi accusantium dolores natus esse excepturi ab ratione, quasi corrupti quaerat quisquam voluptate magni voluptates dignissimos temporibus eius sapiente nulla.</p>

                <p className=' font-poppins font-normal text-xl text-secondary-dark-color ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt repellat modi possimus magnam. Nisi pariatur dolore quia nulla ratione magnam dolorum, ad maiores rerum consequatur illum porro sapiente soluta hic doloribui.</p>

                <button className=' rounded-xl w-[10rem] text-xl bg-primarycolor text-whitecolor py-2 px-4
                 hover:bg-blue-primary hover:text-secondary-dark-color transition duration-300 ' >
                    <a href='/about-us' >Learn More</a></button>

            </div>
        </div>
        <div className=" mt-[9rem]">
        <div className="flex space-x-[1.1rem] md:space-x-[2rem] justify-between ssm:ml-[1.9rem] ssm:mr-[1.8rem] mr-[1rem]
         ml-[1rem]  ">
        <div className="flex flex-col  items-center">
  <img src={rectangle34}  alt="Returns & Exchanges" className=" w-8 h-8 md:w-[4.16rem] md:h-[4.16rem] 
  ssm:w-[3.68rem] 
  ssm:h-[3.68rem] lg:h-14 lg:w-14 " />
  <p className="text-black text-[1.2rem] font-poppins md:text-[1.7rem]  font-normal leading-normal ssm:text-[1.5rem]
   mt-2 lg:text-2xl text-primarycolor  ">Offers & Gifts</p>
  <div className="flex flex-col">
    <p className="text-black font-poppins  text-[0.9rem] mt-1 text-center ssm:text-[1rem] md:text-[1.2rem]   header-info-subtext lg:text-xl text-secondary-dark-color  ">
      We strive to make fashion accessible to everyone,       
    </p>
    <p className=' text-center text-secondary-dark-color font-poppins text-[0.9rem] ssm:text-[1rem] md:text-[1.2rem] lg:text-xl '> no matter your budget.</p>
    
  </div>
</div>
          
          <div className="flex flex-col items-center">
            <img src={rectangle35} alt="Fast Shipping" className="w-8 h-8 ssm:w-[3.68rem] 
  ssm:h-[3.68rem] md:w-[4.16rem] md:h-[4.16rem] lg:h-14 lg:w-14  " />
            <p className="text-black font-kurale font-normal md:text-[1.7rem] leading-normal mt-2 ssm:text-[1.5rem]  text-[1.2rem] lg:text-2xl text-primarycolor font-poppins  ">Fast Shipping</p>
            <p className="text-black font-kurale  mt-1 text-center header-info-subtext ssm:text-[1rem]
             md:text-[1.2rem]  text-[0.9rem] text-secondary-dark-color font-poppins lg:text-xl ">
      We strive to make fashion accessible to everyone,       
    </p>
    <p className=' text-secondary-dark-color font-poppins text-center  ssm:text-[1rem] font-kurale   text-[0.9rem] md:text-[1.2rem] lg:text-xl '> no matter your budget.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={rectangle36} alt="Support 24/7" className="w-8 h-8 ssm:w-[3.68rem] 
  ssm:h-[3.68rem] md:w-[4.16rem] md:h-[4.16rem] lg:h-14 lg:w-14  " />
            <p className="text-black font-kurale  font-normal md:text-[1.7rem] leading-normal mt-2 header-info-text text-[1.2rem] ssm:text-[1.5rem] lg:text-2xl text-primarycolor font-poppins   ">Support 24/7</p>
            <p className="text-black font-kurale  mt-1 text-center header-info-subtext ssm:text-[1rem] 
            md:text-[1.2rem] lg:text-xl text-[0.9rem] text-secondary-dark-color font-poppins  ">
      We strive to make fashion accessible to everyone,       
    </p>
    <p className=' text-secondary-dark-color font-poppins text-center text-[0.9rem] ssm:text-[1rem] font-kurale  md:text-[1.2rem] lg:text-xl '> no matter your budget.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutUs