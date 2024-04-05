import Footer from '@/components/footer'
import HeaderTwo from '@/components/header/headerTwo'

const Layout = ({ children }) => {
    return (
        <div>
            <HeaderTwo />
            {children}
            <Footer />
        </div>
    )
}

export default Layout