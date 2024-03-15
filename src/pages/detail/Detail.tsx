import DescDetail from "../../components/descDetail/DescDetail"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import NavDetail from "../../components/navDetail/NavDetail"
import ProductDetail from "../../components/productDetail/ProductDetail"
import RelatedDetail from "../../components/relatedProductDetail/RelatedDetail"


const Detail = () => {
  return (
    <>
        <Header />
        <NavDetail />
        <ProductDetail />
        <DescDetail />
        <RelatedDetail />
        <Footer />
    </>
  )
}

export default Detail