/* eslint-disable @typescript-eslint/no-explicit-any */

import { IProduct } from "../types/types";
type IProps ={
    product: IProduct;
  }
  

const ProductCard = ({ product}:IProps) => {

  return (
    <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>

      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature?.map((feature:any) => {
            return (
              <li key={feature} className='text-sm '>
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        
          <button
           
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          >
            Add to cart
          </button>
        
       
          <button
            title='Remove'
           
            className='px-3 bg-red-500 text-white p-1 rounded-full flex-1'
          >
           Remove
          </button>
    
      </div>
    </div>
  );
};

export default ProductCard;
