import { Route } from "react-router-dom";
import Lazy from '@/utils/lazies/Lazy'
import AddProduct from './AddProduct'
import Category from './Caterogy'
import Product from "./Product";
import api from '@services/apis'

// let isAdmin = false;
// async function authenAdmin() {
//     await api.userApi.authentication({
//         token: localStorage.getItem("token")
//     })
//         .then((res: { status: number; data: { data: { role: string; }; }; }) => {
//             if (res.status == 200) {
//                 if (res.data.data.role == "ADMIN") {
//                     isAdmin = true;
//                 }
//             }
//         })
//         .catch((err: any) => {
//             console.log("err", err)
//         })
//     if (isAdmin) {
//         return Lazy(() => import("./Admin"))()
//     } else {
//         return <>404 Page</>
//     }
// }


export default (
    <>
        <Route path="/admin" element={Lazy(() => import("@pages/admin/Admin"))()}>
            <Route index element={<Product />}></Route>
            <Route path="add-products" element={<AddProduct />}></Route>
            <Route path="category" element={<Category />}></Route>
        </Route>
    </>
);
