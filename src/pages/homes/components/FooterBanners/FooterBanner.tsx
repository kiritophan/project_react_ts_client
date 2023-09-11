import React from 'react'
import './footerBanner.scss'

export default function FooterBanner() {
    return (
        <>
            <h1>Góc cảm hứng</h1>
            <div className='footerBanner-container'>
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer hover:grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-2.png" alt="image description" />
                    </a>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                        <p>Đến Nhà Xinh trò chuyện về hành trình sáng tạo</p>
                    </figcaption>
                </figure>
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    </a>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                        <p>Cuối tuần vừa qua, Nhà Xinh Phú Mỹ Hưng hân hạnh được chào đón diễn giả Trần Đình Thông cùng</p>
                    </figcaption>
                </figure>
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src="https://nhaxinh.com/wp-content/uploads/2023/03/Sofa-Royal-2-cho-vai-20419-1231x800.jpg" alt="image description" />
                    </a>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                        <p>Những lưu ý khi bài trí không gian phòng khách</p>
                    </figcaption>
                </figure>
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-4.png" alt="image description" />
                    </a>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                        <p>Phòng khách là nơi tạo ấn tượng đầu tiên cho bất cứ ai khi bước vào ngôi nhà.</p>
                    </figcaption>
                </figure>
            </div>
            <div className='footerBanner-container bg-slate-100 my-4'>
                <div className='ml-6'>
                    <p>
                        Tổ ấm của người tinh tế
                    </p>
                    <p>
                        Trong suốt hơn 22 năm qua, cảm hứng từ gu thẩm mỹ tinh tế và tinh thần “Việt” đã giúp Nhà Xinh tạo ra những thiết kế độc đáo, hợp thời và chất lượng. Nhà Xinh hiện đã mở 10 cửa hàng tại Việt Nam.
                    </p>
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Về nhà xinh</button>
                </div>
                <figure className="relative max-w-3xl transition-all duration-300 cursor-pointer hover:grayscale-0 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
                    <a href="#">
                        <img className="rounded-lg" src="https://nhaxinh.com/wp-content/uploads/2022/07/gioi-thieu-nha-xinh-moi-25-7-22-1200x800.jpg" alt="image description" />
                    </a>
                </figure>
            </div>

        </>

    )
}
