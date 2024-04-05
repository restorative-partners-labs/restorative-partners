import Footer from '@/components/footer'
import HeaderFour from '@/components/header/headerFour'

const layout = ({ children }) => {
    return (
        <div>
            <HeaderFour />
            {children}
            <Footer />
        </div>
    )
}

export default layout