import { useEffect, useState } from 'react';
import axios from 'axios';
import './product.scss';
import { Link } from 'react-router-dom';
import UpdatePop from './UpdatePop';
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


export default function Product() {
    const [updateData, setUpdateData] = useState();
    const [products, setProducts] = useState<Product[]>([]);
    console.log("prodcts", products);

    useEffect(() => {
        api.productApi.findMany()
            .then(res => {
                if (res.status == 200) {
                    setProducts(res.data.data)
                }
            })
    }, [])

    return (
        <div className='product-admin-container'>
            <div>
                <div className='products'>
                    <div><Link to={"/"}>
                        Quay về trang chủ
                    </Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product ID</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product, index) => (
                                <tr key={Math.random() * Date.now()} className="product">
                                    <th scope="row">{index + 1}</th>
                                    <td className="product_image"> <img
                                        className="rounded-t-lg card-item"
                                        src={(product as Product).avatar}
                                        alt="product image"
                                    /></td>
                                    <td>{product.name}</td>
                                    <td>{product.id}</td>
                                    <td>{product.price}</td>
                                    <td><button onClick={() => {
                                        setUpdateData(product);
                                    }}>Update</button></td>
                                    <i style={{
                                        fontSize: "20px",
                                    }}
                                        className="fa-solid fa-trash"


                                    ></i>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {updateData ? <UpdatePop /> : <></>}
                </div>
            </div>
        </div>
    )
}


