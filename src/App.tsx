import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import ShopePage from "./pages/shop/ShopePage"
import Detail from "./pages/detail/Detail"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopePage />}/>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
