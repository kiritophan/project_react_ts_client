import Lazy from '@/utils/lazies/Lazy'
import { Route } from 'react-router-dom'
import Payment from "@/pages/carts/Payment";

export default
    <>
        <Route path="/products" element={Lazy(() => import("@pages/products/Product"))()}>
            <Route path="/products/:id" element={Lazy(() => import("@pages/products/productDetails/ProductDetail"))()}></Route>
        </Route>
        <Route path="/product-detail" element={Lazy(() => import("@pages/products/productDetails/ProductDetail"))()}></Route>
        <Route path="/cart" element={Lazy(() => import("@pages/carts/Cart"))()}></Route>
        <Route path="/payment" element={<Payment />}></Route>
    </>