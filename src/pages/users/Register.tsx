import DropDown from "@/components/DropDown"
import { useTranslation } from 'react-i18next'
import { FormEvent, memo, useState } from "react"
import api from '@services/apis'
import Loading from './components/Loading'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, message, Modal } from 'antd';
import './user.scss'
import img from './nhaxinh.png'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );
    const { t } = useTranslation();

    async function register(event: FormEvent) {
        event.preventDefault();
        if (load) return
        let newUser = {
            email: (event.target as any).email.value,
            userName: (event.target as any).userName.value,
            password: (event.target as any).password.value,
            firstName: (event.target as any).firstName.value,
            lastName: (event.target as any).lastName.value,
        }
        console.log("newuser", newUser)
        setLoad(true)
        await api.userApi.register(newUser)
            .then(res => {
                if (res.status != 200) {
                    Modal.confirm({
                        content: res.data.message,
                        okText: "thử lại"
                    })
                } else {
                    Modal.success({
                        content: res.data.message,
                        okText: "login"
                    })
                }
            })
            .catch(_err => {
                Modal.success({
                    content: "Sập server!",
                    okText: "thử lại"
                })
            })
        setLoad(false)
    }


    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" style={{ width: '500px', height: '100%', margin: '50px auto', border: '1px solid black' }} >
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <img
                        className="mx-auto h-10 w-auto"
                        src={img}
                        alt="Your Company"
                        onClick={() => navigate('/')}
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {t('createYourAccount')}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={(e) => {
                        register(e)
                    }}
                        className="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                User Name
                            </label>
                            <div className="mt-2">
                                <input
                                    name="userName"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Firts Name
                            </label>
                            <div className="mt-2">
                                <input
                                    name="firstName"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    name="lastName"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder=" •••••••• "
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Confirm  Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="confirm-password"
                                    type="password"
                                    placeholder=" •••••••• "
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            {
                                load && <Loading />
                            }
                            <button
                                type="submit"
                                className={`${load && 'active'} btn_submit flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                            >
                                {t('signup')}
                                <div className='btn_loading'>
                                    <Spin indicator={antIcon} />
                                </div>
                            </button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500 d-flex">
                        {t('notMember')}
                        <a
                            href="/login"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            {t('loginNow')}

                        </a>
                        <DropDown />
                    </p>
                </div>
            </div>
        </>
    )
}

export default memo(Register)