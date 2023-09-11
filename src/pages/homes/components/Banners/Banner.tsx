import React, { useState } from "react";
import './Banner.scss';
import img from './assets/logo.svg'
import img1 from './assets/couch.png'
import img2 from './assets/app.svg'
import img3 from './assets/dots.svg'
import img4 from './assets/partner1.svg'
import img5 from './assets/partner2.svg'
import img6 from './assets/partner3.svg'
import img7 from './assets/partner4.svg'
import img8 from './assets/partner5.svg'
import img9 from './assets/partner6.svg'
import img10 from './assets/partner7.svg'
import table from './assets/table.png'
import lamp from './assets/lamp.png'
import app from './assets/app.svg'


export default function Banner() {

    return (
        <>
            <nav >
                <div
                    className="
                            container
                            mx-auto
                            flex
                            items-center
                            justify-between
                        "
                >
                    <a
                        href="/"
                        className="
                            focus:outline-none
                            focus-visible:ring-4
                            ring-neutral-900
                            rounded-sm
                            ring-offset-4
                            ring-offset-amber-400
                            lg:absolute
                            lg:left-1/2
                            lg:-translate-x-1/2
                            lg:top-9
                            z-50
                            hover:opacity-75
                            transition-opacity
                            "
                        aria-label="Go to homepage"
                    >
                        <img
                            src={img}
                            width={200}
                            className="w-48 md:w-64 lg:w-72"
                            alt="Home Smart Logo"
                        />
                    </a>
                    <button
                        id="menu"
                        className="
                                    lg:hidden
                                    focus:outline-none
                                    focus-visible:ring-4
                                    ring-neutral-900
                                    rounded-sm
                                    ring-offset-4
                                    ring-offset-amber-400
                                    text-neutral-900
                                    hover:text-neutral-600
                                    transition-colors
                                    "
                        aria-expanded="false"
                        aria-label="Open Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                </div>
            </nav>
            <header className="relative pt-16 md:pt-24 lg:pt-48">
                <div
                    className="
                            absolute
                            inset-0
                            bottom-8
                            md:bottom-24
                            xl:bottom-32
                            -z-10
                            bg-gradient-to-b
                            from-amber-400
                            to-amber-600
                            "
                ></div>
                <div
                    className="
                            container
                            mx-auto
                            grid
                            grid-rows-1
                            place-items-end
                            px-2
                                "
                >
                    <img
                        src={img1}
                        className="
                                row-start-1
                                row-end-2
                                col-start-1
                                col-end-2
                                mx-auto
                                "
                        alt="Couch"
                    />
                    <img
                        src={img2}
                        className="
                            row-start-1
                            row-end-2
                            col-start-1
                            col-end-2
                            mx-auto
                            w-40
                            sm:w-52
                            md:w-64
                            lg:w-72
                            duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-110
                            "
                        alt="app"
                    />
                </div>
            </header>
            <main
                className="
                            grid
                            gap-12
                            sm:gap-16
                            md:gap-24
                            lg:gap-32
                            px-8
                            overflow-hidden
                            "
            >
                <a
                    href="#"
                    className="
                                py-2
                                px-6
                                bg-amber-400
                                dark:text-neutral-900
                                mx-auto
                                my-12
                                flex
                                gap-2
                                shadow-xl
                                hover:shadow-none
                                transition-shadow
                                focus:outline-none
                                focus-visible:ring-4
                                ring-neutral-900
                                rounded-md
                                ring-offset-4
                                ring-offset-white
                                dark:ring-amber-400
                                dark:ring-offset-neutral-800
                                "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                    <span>Download the App</span>
                </a>
                <section aria-labelledby="qualities" className="relative">
                    <img
                        src={img3}
                        className="
                                hidden
                                lg:block
                                absolute
                                top-1/2
                                -translate-y-1/2
                                -left-24
                                xl:-left-7
                                "
                        alt="dots"
                        aria-hidden="true"
                    />
                    <img
                        src={img3}
                        className="
                                    hidden
                                    lg:block
                                    absolute
                                    top-1/2
                                    -translate-y-1/2
                                    -right-24
                                    xl:-right-7
                                    "
                        alt="dots"
                        aria-hidden="true"
                    />
                    <h2 id="qualities" className="sr-only">
                        Our Qualities
                    </h2>
                    <div
                        className="container
                                    mx-auto
                                    max-w-5xl
                                    flex
                                    gap-12
                                    flex-wrap
                                    items-start
                                    justify-center
                                    md:justify-between
                                    "
                    >
                        <div
                            className="
                                    grid
                                    gap-4
                                    justify-items-center
                                    text-center
                                    md:flex-1
                                    "
                        >
                            <div
                                className="
                                    rounded-full
                                    border-8
                                    border-amber-400
                                    p-4
                                    "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-14 w-14 duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-150"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold">Safe</h3>
                            <p>Our products are secure and private out-of-the-box</p>
                        </div>
                        <div
                            className="
                                        grid
                                        gap-4
                                        justify-items-center
                                        text-center
                                        md:flex-1
                                        "
                        >
                            <div
                                className="
                                            rounded-full
                                            border-8
                                            border-amber-400
                                            p-4
                                            duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-150
                                            "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-14 w-14"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold">Efficient</h3>
                            <p>Feel good about your wallet and the environment</p>
                        </div>
                        <div
                            className="
                                        grid
                                        gap-4
                                        justify-items-center
                                        text-center
                                        md:flex-1
                                        "
                        >
                            <div
                                className="
                                        rounded-full
                                        border-8
                                        border-amber-400
                                        p-4
                                        duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-150
    "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-14 w-14"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold">Proven</h3>
                            <p>Leading the Smart Home world for 10 years</p>
                        </div>
                    </div>
                </section>
                <section
                    aria-labelledby="partners"
                    className="text-center grid gap-8 place-items-center"
                >
                    <div className="grid gap-4">
                        <h2 id="partners" className="text-4xl font-bold text-amber-400">
                            Our Partners
                        </h2>
                        <p className="w-full max-w-lg">
                            We’ve partnered with hundreds of smart home brands to help you create
                            a smart home that fits your needs and doesn’t lock you in.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
                        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-110">
                            <img
                                src={img4}
                                alt="Partner"
                                className="h-16 w-16"
                            />
                        </div>
                        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-110">
                            <img
                                src={img5}
                                alt="Partner"
                                className="h-16 w-16"
                            />
                        </div>
                        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-110">
                            <img
                                src={img6}
                                alt="Partner"
                                className="h-16 w-16"
                            />
                        </div>
                        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-110">
                            <img
                                src={img7}
                                alt="Partner"
                                className="h-16 w-16"
                            />
                        </div>
                        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-110">
                            <img
                                src={img8}
                                alt="Partner"
                                className="h-16 w-16"
                            />
                        </div>
                        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-110">
                            <img
                                src={img9}
                                alt="Partner"
                                className="h-16 w-16"
                            />
                        </div>
                        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-110">
                            <img
                                src={img10}
                                alt="Partner"
                                className="h-16 w-16"
                            />
                        </div>
                    </div>
                </section>
                <section aria-labelledby="home" className="relative">
                    <div className="flex flex-wrap-reverse gap-8 justify-center">
                        <div className="flex gap-6 flex-wrap flex-col items-start lg:justify-center">
                            <div className="flex flex-wrap flex-col items-start gap-2">
                                <h2 className="text-4xl font-bold">Relax, you’re home!</h2>
                                <p className="max-w-md">
                                    All our supported hardware includes traditional inputs so you can
                                    integrate our products into your house in a way that’s best for
                                    everyone.
                                </p>
                            </div>
                            <a
                                href="/register"
                                className="
                                            py-2
                                            px-6
                                            bg-amber-400
                                            dark:text-neutral-900
                                            flex
                                            gap-2
                                            shadow-xl
                                            hover:shadow-none
                                            transition-shadow
                                            focus:outline-none
                                            focus-visible:ring-4
                                            ring-neutral-900
                                            rounded-md
                                            ring-offset-4
                                            ring-offset-white
                                            dark:ring-amber-400
                                            dark:ring-offset-neutral-800
                                        "
                            >
                                Sign Up
                            </a>
                        </div>
                        <img src={table} alt="Table" />
                    </div>
                    <div
                        className="
                            absolute
                            -bottom-6
                            -right-32
                            -z-10
                            aspect-square
                            md:border-8
                            border-amber-400
                            rounded-full
                            md:w-64
                            lg:w-96
                            xl:max-w-lg
                                "
                    />
                    <div
                        className="
                                bg-teal-900
                                h-24
                                xl:h-48
                                -mx-8 
                                mt-12
                                xl:mt-0
                                xl:absolute
                                w-screen
                                -bottom-8
                                -z-10
                                    "
                    />
                </section>
            </main>
        </>


    );
}
