import Feedback from '@/components/section/feedback'
import ProductCard from '@/components/ui/cards/productCard'
import Pagination from '@/components/ui/pagination'
import SectionTitle from '@/components/ui/sectionTitle'
import { productData } from '@/lib/fackData/productData'

export const metadata = {
    title: "Architronix -- Product Archive",
    description: "Architronix is a next js and tailwind css website",
};

const ProductArchive = () => {
    return (
        <>
            <section>
                <div className='container-fluid '>
                    <SectionTitle sectionName={"Shop"} sectionTitle={"Design Elegance Emporium"} sectionDesc={"Discover Unparalleled Luxury for Your Space"} />
                </div>
                <div className='container mt-30'>
                    <div className='grid lg:grid-cols-3 2sm:grid-cols-2 gap-x-7 gap-y-17.5 mb-25'>
                        {
                            productData.map(({ id, price, product_img, product_name, rating }) => <ProductCard key={id} id={id} price={price} product_img={product_img} product_name={product_name} rating={rating} />)
                        }
                    </div>
                    <Pagination />
                </div>
            </section>
            <Feedback />
        </>
    )
}

export default ProductArchive