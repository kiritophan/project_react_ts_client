import React from 'react'
import './category.scss'
import Icon from '../../../../../public/japan-flag-xs.png'
import cataImg1 from './images/sofa/Sofa-Coastal-2-cho-vai-xanh-2-300x200.jpg'
import sofagoc from './images/sofa/sofa-goc-rumaba-vai-xanh-hien-dai-101492-6-8-300x200.jpg'
import gheThuGian from './images/Ghe_thu_gian/GHE-LAZBOY-LIFT-ASTOR-TPH-DA-STORM-3106228-300x200.jpg'
import armchair from './images/armchairs/ARMCHAIR-BOC-VAI-MAU-CAM-MB141-33-300x200.jpg'
import banben from './images/Ban_ben/BAN-BEN-RETIRO-GOLD-S-30X65-6713285L-3-300x200.jpg'
// import tuTv from './images/Tu_TV/ke-tv-elegance3-300x200.jpg'
import giuongngu from './images/giuong_ngu/giuong-penny3-300x200.jpg'
import banlamviec from './images/ban_lam_viec/ban-wing-300x199.jpg'
import kesach from './images/Ke_sach/nha-xinh-ke-sach-chio-hinh_lifestyle-300x200.jpg'
import api from '@/services/apis'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';

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


export default function Category() {
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
                                    <Link to={"/product-detail"}>
                                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                <div className='category-header'>
                    <h1>Sản phẩm vừa xem</h1>
                </div>
                <div className='category-items'>
                    <div className='category-item-two grid grid-cols-4 gap-4'>
                        <div>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img
                                        className="rounded-t-lg card-item"
                                        src={cataImg1}
                                        alt="product image"
                                    />
                                </a>
                                <div className="px-5 pb-5">
                                    <div className="flex items-center justify-center">
                                        <span
                                            style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                        >
                                            Tiện
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img
                                        className="rounded-t-lg card-item"
                                        src={cataImg1}
                                        alt="product image"
                                    />
                                </a>
                                <div className="px-5 pb-5">
                                    <div className="flex items-center justify-center">
                                        <span
                                            style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                        >
                                            Tiện
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img
                                        className="rounded-t-lg card-item"
                                        src={cataImg1}
                                        alt="product image"
                                    />
                                </a>
                                <div className="px-5 pb-5">
                                    <div className="flex items-center justify-center">
                                        <span
                                            style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                        >
                                            Tiện
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img
                                        className="rounded-t-lg card-item"
                                        src={cataImg1}
                                        alt="product image"
                                    />
                                </a>
                                <div className="px-5 pb-5">
                                    <div className="flex items-center justify-center">
                                        <span
                                            style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                        >
                                            Tiện
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* {
                categories.map((category) => (
                    <div className='categories' key={Math.random() * Date.now()}>
                        <div className='category-header'>
                            <h1>Sản phẩm mới nhất</h1>
                        </div>
                        <div className='category-items'>
                            <div className='category-item-one grid grid-cols-4 gap-4'>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={category.avatar}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    {category.title}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={sofagoc}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    {category.title}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={gheThuGian}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    Ghế thư giãn
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={armchair}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    Armchair
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='category-item-two grid grid-cols-4 gap-4'>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={banben}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    Bàn bên
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={giuongngu}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    Giường ngủ
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={banlamviec}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    Bàn làm việc
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={kesach}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    Kệ sách
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='category-header'>
                            <h1>Sản phẩm vừa xem</h1>
                        </div>
                        <div className='category-items'>
                            <div className='category-item-two grid grid-cols-4 gap-4'>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={cataImg1}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    Tiện
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={cataImg1}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    Tiện
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={cataImg1}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    Tiện
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg card-item"
                                                src={cataImg1}
                                                alt="product image"
                                            />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-center">
                                                <span
                                                    style={{ width: '100%', cursor: 'pointer' }} className="text-white bg-orange-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                                >
                                                    Tiện
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            } */}
        </>
    )
}
