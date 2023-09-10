import AfterNavbar from '@/pages/homes/components/AfterNavbars/AfterNavbar';
import Footer from '@/pages/homes/components/Footers/Footer';
import Navbar from '@/pages/homes/components/Navbars/Navbar';
import api from '@/services/apis';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import './productDetail.scss'
import { message, Modal } from "antd";

interface Product {
  id: string;
  name: string;
  avatar: string;
  price: number;
  des: string;
  categoryId: string;
  productPictures: {
    id: string;
    path: string;
  }[]
}
interface CartItem {
  productId: string;
  quantity: number;
}

message.config({
  top: 200,
  duration: 1,
  maxCount: 1,
  rtl: true,
  prefixCls: "my-message",
});


export default function ProductDetail() {
  const [products, setProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    api.productApi.findMany()
      .then(res => {
        if (res.status == 200) {
          setProducts(res.data.data)
        }
      })
  }, [])



  function handleAddToCart(productId: string, quantity: number) {
    let carts: CartItem[] = JSON.parse(localStorage.getItem("carts") ?? "[]");
    if (carts.length == 0) {
      // cart rỗng
      carts.push({
        productId,
        quantity
      })
    } else {
      // cart có sp
      let flag: boolean = false;
      carts = carts.map(item => {
        if (item.productId == productId) {
          item.quantity += quantity
          flag = true;
        }
        return item
      })
      if (!flag) {
        carts.push({
          productId,
          quantity
        })
      }
    }
    localStorage.setItem("carts", JSON.stringify(carts)) // save to local
  }
  return (
    <>
      <Navbar />
      <AfterNavbar />
      <Outlet />
      <div className=''>
        <div className='productItem_infor'>
          {
            products.map(product => {
              return (
                <div className='productItem_container' key={product.id} style={{ border: "1px solid black" }}>
                  <div className='image'>
                    <div >
                      <img src={product.avatar} />
                    </div>
                    <div style={{ display: "flex" }}>

                      {
                        product.productPictures.map(img => (
                          <img key={img.id} src={img.path} style={{ padding: "10px", width: "100px", height: "100px" }} />
                        ))
                      }
                    </div>
                  </div>
                  <div className='productItem_infor'>
                    <h3>Name: {product.name}</h3>
                    <p>Price: {product.price}</p>
                    <p>Des: {product.des}</p>
                    <div className="count_product">
                      <button
                        className="count"
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                          }
                        }}>
                        <span className="material-symbols-outlined">-</span>
                      </button>

                      <span className="quantity" style={{ fontSize: "25px" }}>
                        {quantity}
                      </span>
                      <button
                        className="count"
                        onClick={() => {
                          if (quantity > 0) {
                            setQuantity(quantity + 1);
                          }
                        }}
                      >
                        <span className="material-symbols-outlined">+</span>
                      </button>
                    </div>
                    <button className='add_to_cart_btn' onClick={() => {
                      handleAddToCart(product.id, quantity)
                    }} style={{ border: "1px solid black", cursor: "pointer", width: "100px", height: "50px" }}>Add to cart</button>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>

  )
}
