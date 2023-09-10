import './payment.scss'
import React, { useEffect, useState } from 'react'
import api from '@services/apis'
import { Link } from 'react-router-dom';
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

interface newGuestReceipt {

    email: string;
    phoneNumber: string;
    total: number;
    payMode: string;

}
export default function Payment() {
    const [cart, setCart] = useState<CartItemDetail[]>([]);
    console.log("cartpayment:", cart)
    useEffect(() => {
        async function formatCartPay() {
            let cartTemp: CartItemDetail[] = [];
            let carts: CartItem[] = JSON.parse(localStorage.getItem("carts") ?? "[]");
            for (let i in carts) {
                let productDetail = await api.productApi.findById(carts[i].productId).then(res => res.data.data)
                cartTemp.push({
                    ...carts[i],
                    productDetail
                })
            }
            setCart(cartTemp);
        }

        formatCartPay();
    }, []);

    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [email, setEmail] = useState('');

    function handleOrder() {
        let newGuestReceipt: newGuestReceipt = {

            email: "phanvandau1510@gmail.com",
            phoneNumber: "0888868798",

            total: cart.reduce((value, cur) => {
                return value + cur.quantity * cur.productDetail.price;
            }, 0),
            payMode: "CASH",

        }
        let guestReceiptDetailList = JSON.parse(localStorage.getItem("carts") ?? "[]")

        api.purchaseApi.createGuestReceipt(newGuestReceipt, guestReceiptDetailList)
            .then(res => {
                console.log("res", res.data)
                localStorage.removeItem("carts");
            })
    }
    return (
        <>
            <div>
                <Link to={"/"}>
                    Quay về trang chủ
                </Link>
            </div>
            <div className='payment-container'>
                <h1>Product cart</h1>
                <div className='payment-element'>
                    <div>
                        {
                            cart.map(item => (
                                <div key={item.productId} className='render-items'>
                                    <span>Name: {item.productDetail.name}</span>
                                    <span>Price: {item.productDetail.price}</span>
                                    <span>Quantity: {item.quantity}</span>
                                    <span>
                                        <img src={item.productDetail.avatar} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Lựa chọn phương thức thanh toán
                        </label>
                        <select
                            id="countries"
                            className="bg-gray-50 mb-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="CASH">Tiền Mặt</option>
                            <option value="ZALO">Zalo</option>
                            <option value="BITCOIN">Bitcoin</option>
                            <option value="NFT">NFT</option>
                        </select>
                        <button onClick={() => {
                            handleOrder()
                        }} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Đặt hàng ngay</button>

                    </div>
                </div>


            </div>
        </>

    )
}

