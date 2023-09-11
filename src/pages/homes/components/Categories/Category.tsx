import React from 'react'
import './category.scss'

import api from '@/services/apis'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { message, Modal } from "antd";

import img1 from './images/ban_lam_viec/ban-wing-300x199.jpg'
import FooterBanner from '../FooterBanners/FooterBanner'



export interface Product {
    id: string;
    des: string;
    avatar: string;
    name: string;
    price: number;
    categoryId: string;

}
export interface Category {
    id: string;
    title: string;
    avatar: string;
    aciive: boolean;
    products: Product[];
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

export default function Category() {
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

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        api.categoryApi.findMany()
            .then(res => {
                console.log("res", res)
                if (res.status == 200) {
                    setCategories(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }, []);
    return (
        <>
            <div className='categories' key={Math.random() * Date.now()}>
                <div className='category-header'>
                    <h1>Sản phẩm mới nhất</h1>
                </div>
                <div className='category-items'>
                    <div className='category-item-one grid grid-cols-4 gap-4'>
                        {
                            categories.map((category, index) => (
                                <div>
                                    <Link to={"/allproduct"}>
                                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
                                            <a href="#">
                                                <img
                                                    className="rounded-t-lg card-item"
                                                    src={(category as Category).avatar}
                                                    alt="product image"
                                                />
                                            </a>
                                            <div className="px-5 pb-5">
                                                <div className="flex items-center justify-center">
                                                    <span
                                                        style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                    >
                                                        {(category as Category).title}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            ))
                        }
                    </div>
                </div>
                <FooterBanner />
                <div className='category-header' style={{ color: 'black' }}>
                    <h1>Gợi ý hôm nay</h1>
                </div>

                <div className='category-items'>
                    <div className='category-item-one grid grid-cols-3 gap-4'>
                        {
                            products.map(product => (
                                <div>
                                    <Link to={`/product-detail/${product.id}`}>
                                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
                                            <a href="#">
                                                <img
                                                    className="rounded-t-lg card-item"
                                                    src={product.avatar}
                                                    alt="product image"
                                                />
                                            </a>
                                            <div className="px-5 pb-5">
                                                <div className="flex items-center justify-center">
                                                    <span
                                                        style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                    >
                                                        {product.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}
