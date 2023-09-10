import AfterNavbar from '@/pages/homes/components/AfterNavbars/AfterNavbar';
import Footer from '@/pages/homes/components/Footers/Footer';
import Navbar from '@/pages/homes/components/Navbars/Navbar';
import api from '@/services/apis';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import './productOption.scss'
import { message, Modal } from "antd";
import { Link } from 'react-router-dom'

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

    console.log("product", products)
    return (
        <>
            <Navbar />
            <AfterNavbar />
            <Outlet />
            <div className=''>
                <div className='productItem_infor grid grid-cols-4 gap-4'>
                    {
                        products.map(product => {
                            return (
                                <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                                    <a href="#">
                                        <img className="rounded-t-lg" src={product.avatar} alt="" />
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {product.name}
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {product.des}
                                        </p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {product.price}
                                        </p>
                                        <a
                                            onClick={() => {
                                                handleAddToCart(product.id, quantity)
                                            }}
                                            href="#"
                                            className="inline-flex mr-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Thêm vào giỏ
                                        </a>
                                        <Link
                                            onClick={() => {
                                                handleAddToCart(product.id, quantity)
                                            }}
                                            to={`/product-detail/${product.id}`}
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Xem thêm
                                            <svg
                                                className="w-3.5 h-3.5 ml-2"
                                                aria-hidden="true"
                                                xmlns={product.avatar}
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </Link>
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
