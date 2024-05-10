import Feedback from '@/components/section/feedback'
import ProductDescription from '@/components/section/productSingle/productDescription'
import ProductOverview from '@/components/section/productSingle/productOverview'
import ProductPreview from '@/components/section/productSingle/productPreview'
import ProductCard from '@/components/ui/cards/productCard'
import Title from '@/components/ui/title'
import { productData } from '@/lib/fackData/productData'

export const metadata = {
  title: "Architronix -- Product Single",
  description: "Architronix is a next js and tailwind css website",
};

const ProductSingle = () => {
  const findProduct = productData[0]
  return (
    <>
      <div className='container mt-20'>
        <div className='grid xl:grid-cols-[55%_auto] lg:grid-cols-2 gap-12.5'>
          <ProductPreview findProduct={findProduct} />
          <ProductOverview findProduct={findProduct} />
        </div>
        <ProductDescription />
      </div>
      {/* --------- related products */}
      <div className='container mt-30'>
        <Title title_text={"Related Products"} className={"mb-10 md:mb-20"} />
        <div className='grid lg:grid-cols-3 2sm:grid-cols-2 gap-7.5'>
          {
            productData.slice(0, 3).map(({ id, price, product_img, product_name, rating }) => {
              return (
                <ProductCard key={id} price={price} product_img={product_img} product_name={product_name} rating={rating} />
              )
            })
          }
        </div>
      </div>
      {/* --------- related products */}
      <Feedback />
    </>
  )
}

export default ProductSingle