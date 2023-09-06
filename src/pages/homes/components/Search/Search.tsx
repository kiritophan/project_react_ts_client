import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./search.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function SearchModal() {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow} size="sm" className="search-btn-container">
                <div id="search-btn" className="fas fa-search search-btn"></div>
            </Button>

            <Modal show={show} onHide={handleClose} size='xl' fullscreen='xxl-down'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <input className='input-search' type="text" placeholder='SEARCH PRODUCT' autoFocus />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-body-container'>
                        <div className='category'>
                            <h2>Category</h2>
                            <p onClick={() => {
                                navigate("/men/men-shirts")
                                handleClose()
                            }}>Men Shirts</p>
                            <p onClick={() => {
                                navigate("/men/men-trousers")
                                handleClose()
                            }}>Men Trousers</p>
                            <p onClick={() => {
                                navigate("/women/women-shirts")
                                handleClose()
                            }}>Women Shirts</p>
                            <p onClick={() => {
                                navigate("/women/women-trousers")
                                handleClose()
                            }}>Women Trousers</p>
                            <p onClick={() => {
                                navigate("/baby/baby-clothes")
                                handleClose()
                            }}>Kids</p>
                            <p onClick={() => {
                                navigate("/furniture/beds")
                                handleClose()
                            }}>Beds</p>
                        </div>
                        <div className='search-render'>
                            <h3>SUGGESTED PRODUCTS</h3>
                            <div className='search-product-container'>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default SearchModal;