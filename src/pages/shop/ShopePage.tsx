import BannerSmall from "../../components/bannerSmall/BannerSmall"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import NavShop from "../../components/navShop/NavShop"
import ProductList from "../../components/productList/ProductList"


const ShopePage = () => {
  return (
    <>
        <Header />
        <BannerSmall />
        <NavShop />
        <ProductList />
        <Footer />
    </>
  )
}

export default ShopePage