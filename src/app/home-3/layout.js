import Footer from '@/components/footer'
import HeaderThree from '@/components/header/headerThree'


const Layout = ({ children }) => {
    return (
        <div>
            <HeaderThree />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout