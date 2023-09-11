import React, { useRef } from "react";
import { Modal, message } from "antd";
import api from '@services/apis'
import './updatePop.scss';
import { useParams } from "react-router-dom";

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

message.config({
    top: 200,
    duration: 1,
    maxCount: 1,
    rtl: true,
    prefixCls: "my-message",
});

export default function Update() {


    return (
        <div className="product_update_pop">
            <div

                className="over_hidden"
            ></div>

            <form

                className="update_form"
            >
                <div className="form_add_avatar">
                    <img
                        style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                        }}

                        src=""
                    />
                    <br />

                    <input
                        name="avatar"

                        type="file"
                    />
                    <br />
                </div>
                <div className="form_add_product">
                    <select
                        name="category_id"
                        style={{
                            border: "1px solid black",
                            borderRadius: "5px",
                        }}

                    >

                    </select>
                    <br />
                    <input type="text" placeholder="Name Product" name="name"></input>
                    <br />
                    <input type="text" placeholder="Des" name="des"></input>
                    <br />
                    <input type="text" placeholder="Price" name="price"></input>
                    <br />
                    <button className="btn btn-info" type="submit">
                        Save
                    </button>
                    <button className="btn btn-danger" type="button">
                        Cancel
                    </button>

                </div>
            </form>
        </div>
    );
}
