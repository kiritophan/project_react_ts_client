import Lazy from '@/utils/lazies/Lazy'
import { Route } from 'react-router-dom'
import Payment from "@/pages/carts/Payment";
import Receipts from "@/pages/carts/Receipts";

export default
    <>
        <Route path="/products" element={Lazy(() => import("@pages/products/Product"))()}>
            <Route path="/products/:id" element={Lazy(() => import("@pages/products/productDetails/ProductDetail"))()}></Route>
        </Route>
        <Route path="/product-detail/:productId" element={Lazy(() => import("@pages/products/productDetails/ProductDetail"))()}></Route>
        <Route path="/allproduct" element={Lazy(() => import("@pages/products/productOptions/ProductOptions"))()}></Route>
        <Route path="/cart" element={Lazy(() => import("@pages/carts/Cart"))()}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/receipt" element={<Receipts />}></Route>
    </>