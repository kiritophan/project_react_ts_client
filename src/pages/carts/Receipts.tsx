import React, { useState } from 'react'
import api from '@/services/apis';
import './payment.scss'

export default function Receipts() {
    const [loading, setLoading] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [receipts, setReceipts] = useState([])
    console.log("receipts", receipts);

    function handleGetOtp() {
        setLoading(true);
        api.purchaseApi.findGuestReceipt({ email: emailInput })
            .then(res => {
                if (res.status == 200) {
                    setLoading(false);
                    alert(res.data.message)
                }
                console.log("đã vào đây", res.data)
            })
            .catch(err => {
                setLoading(false);
                console.log("lỗi", err)
            })

    }
    function handleGetReceipt() {
        api.purchaseApi.findGuestReceipt({ email: emailInput, otp: window.prompt("OTP của bạn ?") ?? "29121999" })
            .then(res => {
                if (res.status == 200) {
                    setLoading(false);
                    setReceipts(res.data.data)
                }
            })
    }
    return (
        <div className='payment-container'>
            <h1>CheckOrder</h1>
            <>
                <label
                    htmlFor="input-group-1"
                    className="ml-10 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your Email
                </label>
                <div className="relative mb-6 flex justify-center m-auto ">
                    <div className="absolute inset-y-0 left-0 flex justify-center items-center pl-3.5 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 16"
                        >
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input
                        value={emailInput} onChange={(e) => {
                            setEmailInput(e.target.value)
                        }}
                        type="text"
                        id="input-group-1"
                        className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-8/12 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                    />
                    <button onClick={() => {
                        handleGetOtp()
                    }} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">{loading ? <span className='loading-spinner'></span> : "Lấy mã OTP"}</button>
                </div>
                <button className='flex m-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={() => {
                    handleGetReceipt()
                }}> Lấy hóa đơn
                </button>
            </>
            <br></br>
            <div className='payment-element flex-wrap grid grid-cols-4 gap-4'>
                {
                    receipts.map((receipt: any, index: number) => {
                        return (
                            <div style={{ borderBottom: '1px solid gray' }} key={receipt.id}>
                                <span>STT: {index + 1}</span> <br />
                                <span>Mã hóa đơn: {receipt.id}</span> <br />
                                <div>
                                    Sản Phẩm
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        {
                                            receipt.guestReceiptDetail.map((item: any, index2: number) => {
                                                return (
                                                    <div key={item.productId}>
                                                        <span>STT: {index2 + 1}</span>
                                                        <span>Mã SP: {item.productId}</span>
                                                        <span>Số Lượng: {item.quantity}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
