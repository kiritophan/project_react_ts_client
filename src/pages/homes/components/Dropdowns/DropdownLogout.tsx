import React from 'react';
import './dropdown.scss';
import { useNavigate } from 'react-router-dom';

export default function DropdownLogout() {
    const navigate = useNavigate();
    const handleLogout = () => {
        if (window.confirm("Bạn có muốn đăng xuất không?")) {
            localStorage.removeItem("token");
            navigate("/login");
        }
    };
    return (
        <div className="dropdown">
            <button
                className="btn dropdown-toggle account-btn"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
            >
                <span className="material-symbols-outlined">
                    person
                </span>
                <span className='icon_title'><span className='userName'></span></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                    <a className="dropdown-item" href="/profile">
                        Profile
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href='/receipts'>
                        Purchase History
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" onClick={() => {
                        handleLogout()
                    }}>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}
