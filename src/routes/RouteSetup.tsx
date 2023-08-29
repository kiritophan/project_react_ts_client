import { BrowserRouter, Routes, Route } from "react-router-dom"
import Lazy from '@utils/lazies/Lazy'
import Home from '@pages/homes/Home'
import RouteProduct from './RouteProduct'
import RouteAuths from '../pages/auths/Route'

export default function RouteSetup() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />}>
          <Route path="about" element={Lazy(() => import("@pages/homes/Home"))()}></Route>
          <Route path="infor" element={<>Thông Tin</>}></Route>
          {RouteProduct}
        </Route>
        {RouteAuths}
      </Routes>
    </BrowserRouter>
  )
}