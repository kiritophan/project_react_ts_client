import { Route } from "react-router-dom";
import LazyLoad from '@utils/lazies/Lazy'


export default (
    <>
        {/* <Route path="register" element={LazyLoad(() => import("./Register"))()}></Route> */}
        <Route path="login" element={LazyLoad(() => import("./Login"))()}></Route>
    </>
);
