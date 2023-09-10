import { Route } from "react-router-dom";
import Lazy from '@/utils/lazies/Lazy'
import AddProduct from './AddProduct'
import Category from './Caterogy'
import Product from "./Product";


export default (
    <>
        <Route path="/admin" element={Lazy(() => import("@pages/admin/Admin"))()}>
            <Route index element={<Product />}></Route>
            <Route path="add-products" element={<AddProduct />}></Route>
            <Route path="category" element={<Category />}></Route>
        </Route>
    </>
);
