import './payment.scss'
import React, { useEffect, useState } from 'react'
import api from '@services/apis'
import { Link } from 'react-router-dom';
import { message } from 'antd';
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
    const [loading, setLoading] = useState(false);
    console.log("cartpayment:", cart)

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

    useEffect(() => {
        formatCartPay();
    }, [localStorage.getItem("carts")]);

    function handleOrder(e: any) {
        setLoading(true);
        e.preventDefault();
        let newGuestReceipt: newGuestReceipt = {
            email: e.target.email.value,
            phoneNumber: e.target.phone.value,
            total: cart.reduce((value, cur) => {
                return value + cur.quantity * cur.productDetail.price
            }, 0),
            payMode: e.target.payMode.value
        }

        let guestReceiptDetailList = JSON.parse(localStorage.getItem("carts") ?? "[]")

        api.purchaseApi.createGuestReceipt(newGuestReceipt, guestReceiptDetailList)
            .then(res => {
                console.log("res", res)
                if (res.status == 200) {
                    console.log("res", res)
                    setLoading(false);
                    localStorage.removeItem("carts");
                    message.success(res.data.message);
                    window.location.href = "/receipt"
                } else {
                    message.error(res.data.message);
                }
            })
            .catch(err => {
                console.log("err", err)
                setLoading(false);
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
                    <form action="" onSubmit={(e) => handleOrder(e)}>
                        <div className="form-group">
                            <input type="text" placeholder='First name' required className='firstName' />
                            <input type="text" placeholder='Last name' required className='lastName' />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder='Email' required className='email' name='email' />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder='Address' required className='address' />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder='Apartment, suite, etc. (optional)' required className='apartment' />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder='city' required className='city' />
                            <select placeholder='Province' required>
                                <option disabled selected hidden>Province</option>
                                <option value="">A</option>
                                <option value="">B</option>
                            </select>
                            <input type="text" placeholder='Postal code' required className='postalCode' />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder='Phone (optional)' required className='phone' name='phone' />
                        </div>
                        <div className='payMode'>
                            <div className='cash'>
                                <input type="radio" name='payMode' value="CASH" /> <span>CASH</span> <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Flogo%2Fdollar.png?alt=media&token=1c7122a8-d844-4a4a-bf3b-10da944e1f71" alt="" />
                            </div>
                            <div className='zalo'>
                                <input type="radio" name='payMode' value="ZALO" /> <span>ZALO</span> <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Flogo%2Fzalo.webp?alt=media&token=a125c1dc-0788-48da-a0ea-24ba4b45d406" alt="" />
                            </div>
                        </div>
                        <div className="form-group checkbox-container">
                            <input type="checkbox" id='checkbox' />
                            <label htmlFor="checkbox">Save this information for next time</label>
                        </div>
                        <button className='continue-button' type='submit'>
                            {loading ? <span className='loading-spinner'></span> : "Continue to shipping"}
                        </button>
                    </form>
                </div>


            </div>
        </>

    )
}

