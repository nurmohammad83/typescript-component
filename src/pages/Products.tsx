import ProductCard from "../Components/ProductCard"
import { products } from "../constants"
import { IProduct } from "../types/types"

const Products = () => {
  return (
    <>
    <div className="py-8 sm:py-16">
      <h1 className="text-center text-black font-medium text-4xl">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12 p-5 sm:py-16 sm:px-12">
        {products?.map((product:IProduct) => (
          <ProductCard key={product.model} product={product} />
        ))}

      </div>
    </div>
  </>
  )
}
export default Products