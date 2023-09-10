import React, { useEffect, useState } from 'react'
import api from '@/services/apis'
import './cart.scss'
import Navbar from '../homes/components/Navbars/Navbar';
import { Outlet } from 'react-router-dom';
import AfterNavbar from '../homes/components/AfterNavbars/AfterNavbar';
import Footer from '../homes/components/Footers/Footer';
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
interface CartItemDetail extends CartItem {
    productDetail: Product
}

message.config({
    top: 200,
    duration: 1,
    maxCount: 1,
    rtl: true,
    prefixCls: "my-message",
});

export default function Cart() {
    const [cart, setCart] = useState<CartItemDetail[]>([]);
    async function formatCart() {
        let cartTemp: CartItemDetail[] = [];
        let carts: CartItem[] = JSON.parse(localStorage.getItem("carts") ?? "[]");
        for (let i in carts) {
            let productDetail = await api.productApi.findById(carts[i].productId).then(res => res.data.data)
            cartTemp.push({
                ...carts[i],
                productDetail
            })
        }
        setCart(cartTemp)
    }

    const deleteCart = (productId: string) => {
        if (localStorage.getItem("carts")) {
            const updatedCarts = cart.filter((item) => item.productId !== productId);
            setCart(updatedCarts);

            localStorage.setItem("carts", JSON.stringify(updatedCarts));
        }
    };

    const updateQuantity = (productId: string, newQuantity: number) => {
        const updatedCart = cart.map((item) => {
            if (item.productId === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem("carts", JSON.stringify(updatedCart));
    };

    const calculateTotal = () => {
        let total = 0;
        for (const item of cart) {
            total += item.quantity * item.productDetail.price;
        }
        return total;
    };

    useEffect(() => {
        formatCart();
    }, [])
    return (
        <>
            <Navbar />
            <AfterNavbar />
            <Outlet />
            <div className='cart_container'>
                <div className='cart_shipping'>
                    <h1>Shopping Cart</h1>
                </div>
                <div className="cart_content_container" >
                    {
                        cart.map(item => (
                            <div key={item.productId} className="cart_content">
                                <div className="cart_image">Name: {item.productDetail.name}</div>
                                <div className="cart_item">
                                    <p>
                                        <img src={item.productDetail.avatar} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                                    </p>
                                    <div className="cart_price">Price: {item.productDetail.price}</div>
                                    <div className="cart_count">
                                        <button onClick={() => {
                                            if (item.quantity > 1) {
                                                updateQuantity(item.productId, item.quantity - 1)
                                            }
                                        }
                                        }>
                                            -
                                        </button>
                                        <span className="quantity" style={{ margin: "20px" }}>{item.quantity}</span>
                                        <button onClick={() => {
                                            if (item.quantity > 0) {
                                                updateQuantity(item.productId, item.quantity + 1)
                                            }
                                        }}>
                                            +
                                        </button>
                                    </div>

                                    <div>

                                        <i style={{
                                            fontSize: "20px",
                                        }}
                                            className="fa-solid fa-trash"

                                            onClick={() => {
                                                Modal.warning({

                                                    content: "Delete this item?",
                                                    onOk: () => {
                                                        deleteCart(item.productId)
                                                    },
                                                });
                                            }}
                                        ></i>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className='total-cart'>
                        <span>Total Cart</span>
                        <p>
                            {calculateTotal()} VND
                        </p>

                    </div>

                    <button
                        onClick={() => {
                            window.location.href = '/payment'
                        }}
                        type="button" className="btn btn-bgr btn-summary btn-block btn-lg focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
                        Check Out
                    </button>
                </div>
            </div>
            <Footer />
        </>

    )
}
