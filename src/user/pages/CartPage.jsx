import React from 'react'
import Cart from '../components/Cart/Cart'


const CartPage = () => {
  return (
    <>
  <div className="flex my-10 gap-5 justify-between px-5 w-full text-sm max-w-[1240px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 my-auto whitespace-nowrap text-neutral-600">
          <div className="flex gap-5 justify-between">
            <div className="text-black">Home</div>
            <div>Product</div>
            <div>Categories</div>
            <div>SALE</div>
          </div>
          <div className="h-0.5 bg-black rounded-md w-[39px]" />
        </div>
        <div className="flex-auto self-start text-xl text-center text-black">
          RESIN ART STUDIO
        </div>
        <div className="flex gap-5 justify-between items-center whitespace-nowrap text-black text-opacity-80">
          <div className="flex gap-5 justify-between self-stretch px-4 py-2 rounded-xl bg-zinc-300 bg-opacity-30">
            <div className="self-start mt-1">Search</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a53b29a88b923a352949703e10824b954d49015b8b0ad6673c962e29c1fcba1e?apiKey=5c337082bd0c417f9937b8845eb44d9a&"
              className="aspect-square w-[22px]"
            />
          </div>
          <a href='/cart'>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/04a5564d990ade536ce97f811fc9ecd550aa97a9e539fdca2a8613698f62fd09?apiKey=5c337082bd0c417f9937b8845eb44d9a&"
            className="self-stretch my-auto aspect-square w-[18px]"
          />
          </a>
         
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84b7722f5b3416ddb0a0853a3ca98c0c1d423a63b296a881577485bcc2fe052e?apiKey=5c337082bd0c417f9937b8845eb44d9a&"
            className="self-stretch my-auto aspect-square w-[18px]"
          />
        </div>
      </div>
    <Cart/>
    </>
  )
}

export default CartPage