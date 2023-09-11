import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./search.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '@services/apis'

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

function SearchModal() {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchStatus, setSearchStatus] = useState(false);
    const [searchData, setSearchData] = useState([]);

    let timeOut: string | number | NodeJS.Timeout | undefined; // tạo ra 1 biến để lưu timeout

    function search(e: any) {
        clearTimeout(timeOut); // việc đầu tiên khi on change là remove timeout sắp diễn ra.
        if (e.target.value == "") {
            setSearchData([])
        }
        // ghi đè timeout thành 1 time out mới  => nếu không onchange nữa thì sẽ không bị clear và sẽ diễn ra nội dung bên trong timeout
        timeOut = setTimeout(async () => {
            // call api
            setSearchStatus(true);
            try {
                if (searchStatus) {
                    return;
                }
                let result = await api.productApi.searchByName(e.target.value);
                if (result.status == 200) {
                    // ok sau 1.5s thì update data và tắt hiệu ứng
                    setTimeout(() => {
                        setSearchStatus(false);
                        setSearchData(result.data.data);
                    }, 1500);
                } else {
                    // failed
                }
            } catch (err) {
                // lỗi call api
            }
        }, 700); // sau 700 ms không gõ thì thực thi
    }
    // console.log("searchData", searchData);
    return (
        <>
            <Button variant="light" onClick={handleShow} size="sm" className="search-btn-container">
                <div id="search-btn" className="fas fa-search search-btn"></div>
            </Button>

            <Modal show={show} onHide={handleClose} size='xl' fullscreen='xxl-down'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <input onChange={(e) => search(e)} className='input-search' type="text" placeholder='SEARCH PRODUCT' autoFocus />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-body-container'>
                        <div className='search-render'>
                            <h3>SUGGESTED PRODUCTS</h3>
                            <div className='search-product-container'>
                                {searchData?.map((product, index) => (
                                    <div key={Math.random() * Date.now()} className='product'>
                                        <img src={(product as Product).avatar} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default SearchModal;