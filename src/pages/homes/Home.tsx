import { Outlet } from 'react-router-dom'
import './home.scss'
import Navbar from './components/Navbars/Navbar'
import Footer from './components/Footers/Footer'
import Banner from './components/Banners/Banner'
import AfterNavbar from './components/AfterNavbars/AfterNavbar'
import Category from './components/Categories/Category'

// import Blog from './components/Blogs/Blog'

export default function Home() {
    return (
        <div className='home_page'>
            <div className='home_page_content'>
                <div>
                    <Navbar />
                    <AfterNavbar />
                </div>
                <Banner />
                <Outlet />
                <div className='category'>
                    <div className='category-content'>
                        <Category />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>

            </div>
        </div>
    )
}
