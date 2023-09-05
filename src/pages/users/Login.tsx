import DropDown from "@/components/DropDown"
import { useTranslation } from 'react-i18next'
import { FormEvent, memo, useState } from "react"
import api from '@services/apis'
import Loading from './components/Loading'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, message, Modal } from 'antd';
import './user.scss'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );
    const { t } = useTranslation();

    async function login(event: FormEvent) {
        event.preventDefault();

        if (load) return

        let data = {
            userName: (event.target as any).userName.value,
            password: (event.target as any).password.value,
        }

        setLoad(true)

        await api.userApi.login(data)
            .then(res => {
                if (res.status != 200) {
                    Modal.confirm({
                        content: res.data.message,
                        okText: "thử lại"
                    })
                } else {
                    Modal.confirm({
                        content: res.data.message,
                        okText: "ok",
                        onOk: () => {
                            localStorage.setItem("token", res.data.token)
                            window.location.href = '/'
                        }
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
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {t('createYourAccount')}
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={(e) => {
                        login(e)
                    }}
                        className="space-y-6" action="#" >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                {t('userName')}
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
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    {t('passWord')}
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
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
                                {t('signin')}
                                <div className='btn_loading'>
                                    <Spin indicator={antIcon} />
                                </div>
                            </button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        {t('notMember')}
                        <a
                            href="#"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            {t('freeTrial')}
                        </a>
                    </p>
                    <DropDown />
                </div>
            </div>
        </>
    )
}

export default memo(Register)