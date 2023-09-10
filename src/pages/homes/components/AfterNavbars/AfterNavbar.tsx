// import React from 'react'
// import img1 from './logodesign.png'
// import './afterNavbar.scss'

// export default function AfterNavbar() {
//     return (
//         <nav className="bg-gray-800 after-navbar">
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                 <div className="relative flex h-16 items-center justify-between">
//                     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                         <button
//                             type="button"
//                             className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                             aria-controls="mobile-menu"
//                             aria-expanded="false"
//                         >
//                             <span className="absolute -inset-0.5" />
//                             <span className="sr-only">Open main menu</span>
//                             <svg
//                                 className="hidden h-6 w-6"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 aria-hidden="true"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
//                         <div className="flex flex-shrink-0 items-center">
//                             <img
//                                 className="h-8 w-auto"
//                                 src={img1}
//                                 alt="Your Company"
//                             />
//                         </div>
//                         <div className="hidden sm:ml-6 sm:block">
//                             <div>

//                                 <div className="relative mt-2 rounded-md shadow-sm">
//                                     <input
//                                         type="text"
//                                         name="price"
//                                         id="price"
//                                         className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

//                                     />
//                                     <div className="absolute inset-y-0 right-0 flex items-center">
//                                         <label htmlFor="currency" className="sr-only">
//                                             Currency
//                                         </label>
//                                         <span className="material-symbols-outlined">
//                                             search
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                         <button type="button" className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                             <span className="material-symbols-outlined">
//                                 shopping_cart
//                             </span>
//                             <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">20</div>
//                         </button>

//                         <div className="relative ml-3">
//                             <div>
//                                 <button
//                                     type="button"
//                                     className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                                     id="user-menu-button"
//                                     aria-expanded="false"
//                                     aria-haspopup="true"
//                                 >
//                                     <span className="absolute -inset-1.5" />
//                                     <span className="sr-only">Open user menu</span>
//                                     <img
//                                         className="h-8 w-8 rounded-full"
//                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                                         alt=""
//                                     />
//                                 </button>
//                             </div>
//                             <div
//                                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//                                 role="menu"
//                                 aria-orientation="vertical"
//                                 aria-labelledby="user-menu-button"
//                                 tabIndex={-1}
//                             >

//                                 <a
//                                     href="#"
//                                     className="block px-4 py-2 text-sm text-gray-700"
//                                     role="menuitem"
//                                     tabIndex={-1}
//                                     id="user-menu-item-0"
//                                 >
//                                     Your Profile
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="block px-4 py-2 text-sm text-gray-700"
//                                     role="menuitem"
//                                     tabIndex={-1}
//                                     id="user-menu-item-1"
//                                 >
//                                     Sign in
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="block px-4 py-2 text-sm text-gray-700"
//                                     role="menuitem"
//                                     tabIndex={-1}
//                                     id="user-menu-item-2"
//                                 >
//                                     Sign out
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="sm:hidden" id="mobile-menu">
//                 <div className="space-y-1 px-2 pb-3 pt-2">
//                     <a
//                         href="#"
//                         className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
//                         aria-current="page"
//                     >
//                         Dashboard
//                     </a>
//                     <a
//                         href="#"
//                         className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
//                     >
//                         Team
//                     </a>
//                     <a
//                         href="#"
//                         className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
//                     >
//                         Projects
//                     </a>
//                     <a
//                         href="#"
//                         className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
//                     >
//                         Calendar
//                     </a>
//                 </div>
//             </div>
//         </nav>

//     )
// }

import { useState, useContext } from 'react';
import './afterNavbar.scss'
import img1 from './nhaxinh.png'
import { useNavigate } from 'react-router-dom';
import DropdownLogout from '../Dropdowns/DropdownLogout';
import DropdownLogin from '../Dropdowns/DropdownLogin';
import SearchModal from '../Search/Search';
import { useSelector, useDispatch } from 'react-redux'
import { StoreType } from '@/stores'
import { useEffect } from 'react'
import api from '@services/apis'
import { userAction } from '@/stores/slices/user.slice'



export default function AfterNavbar() {
    const dispatch = useDispatch();
    const store = useSelector(store => store) as StoreType;

    useEffect(() => {
        if (localStorage.getItem("token")) {
            api.userApi.authentication()
                .then(res => {
                    console.log("res", res)
                    if (res.status == 200) {
                        dispatch(userAction.setLoginData(res.data.data))
                    } else {
                        localStorage.removeItem("token")
                    }
                })
        }
    }, [])

    const [cartLocalTotal, setCartLocalTotal] = useState(null);
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null);

    const [cartTotal, setCartTotal] = useState<number | null>(null);
    useEffect(() => {
        const localStorageCart = JSON.parse(localStorage.getItem("carts") || "[]");
        const total = localStorageCart.reduce((result: number, nextItem: any) => {
            return (result += nextItem.quantity);
        }, 0);
        setCartTotal(total);
    }, []);
    return (
        <nav>
            <div className='nav_content '>
                {/* <div className="navbar-top">
                    <span onClick={() => navigate("/store")}>Store Locator</span>
                    {isAdmin ? <span onClick={() => navigate("/admin")}>Admin</span> : <span>Support Pages</span>}
                </div> */}
                <div className="navbar-bottom">
                    <div className="nav-left">
                        <img className='logo' src={img1} alt="logo" onClick={() => navigate("/")} />
                    </div>
                    <div className="nav-right">
                        <span className='search_container'>
                            <SearchModal />
                        </span>
                        <span className='account_container'>
                            {isLogin ? <DropdownLogout /> : <DropdownLogin />}
                            <span style={{ fontSize: '5px' }}>
                                Hi: {store.userStore.data?.lastName}
                            </span>
                        </span>

                        <span className='icon_container'>
                            <span className="material-symbols-outlined">
                                favorite
                            </span>
                        </span>
                        <span className='cart-icon' onClick={() => navigate("/cart")}>
                            <div style={{ fontSize: '15px', color: "red", transform: 'translate(30px,-20px)' }}> {cartTotal != null ? cartTotal : 0}</div>
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </span>


                    </div>
                </div>
                <div className="navbar-dropdown">
                    {/* <MenuFull /> */}
                </div>
            </div>
        </nav>
    )
}
