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
    const [cartLocalTotal, setCartLocalTotal] = useState(null);
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null);
    const [isAdmin, setIsAdmin] = useState(false);


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


    const checkAdmin = () => {
        if (store.userStore.data?.isAdmin) {
            setIsAdmin(!isAdmin)
        }
    }

    useEffect(() => {
        checkAdmin()
    }, [store])

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
                            {isAdmin ? <span onClick={() => navigate("/admin")}>Admin</span> : <span style={{ fontSize: '20px' }} ><span className="material-symbols-outlined">
                                favorite
                            </span></span>}

                        </span>
                        <span className='cart-icon' onClick={() => navigate("/cart")}>
                            <div style={{ fontSize: '15px', color: "red", transform: 'translate(30px,-20px)' }}> {cartTotal != null ? cartTotal : 0}</div>
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </span>
                        <div >
                            {/* {isAdmin ? <span onClick={() => navigate("/admin")}>Admin</span> : <span style={{ fontSize: '20px' }} >Support</span>} */}
                        </div>
                    </div>
                </div>
                <div className="navbar-dropdown">
                    {/* <MenuFull /> */}
                </div>
            </div>
        </nav>
    )
}
