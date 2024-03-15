import Banner from "../../components/banner/Banner"
import Blog from "../../components/blog/Blog"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import New from "../../components/new/New"
import Shop from "../../components/shop/Shop"


const HomePage = () => {
  return (
    <>
        <Header />
        <Banner />
        <New />
        <Shop />
        <Blog />
        <Footer />
    </>
  )
}

export default HomePage