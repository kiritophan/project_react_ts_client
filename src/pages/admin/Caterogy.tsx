import { useEffect, useRef, useState } from 'react'
import api from '@services/apis'

interface Product {
    id: string;
    des: string;
    avatar: string;
    name: string;
    price: number;
    categoryId: string;

}
interface Category {
    id: string;
    title: string;
    avatar: string;
    active: boolean;
    products: Product[];
}
interface Picture {
    file: File;
    url: string;
}
export default function Category() {
    const imgPreviewRef = useRef();
    const [categories, setCategories] = useState([]);
    const [pictures, setPictures] = useState<Picture[]>([]);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);



    function addNewCategory(e: FormDataEvent) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("category", JSON.stringify({
            title: (e.target as any).title.value,
        }))
        formData.append("imgs", avatarFile!)

        api.categoryApi.create(formData)
            .then(res => {
                console.log("res", res)
            })
            .catch(err => {

            })

        window.alert("Thêm caterogies thành công")
    }
    return (
        <form className='admin_container' onSubmit={(e) => {
            addNewCategory(e);
        }}>
            <h2>Add Category</h2>
            <div className='admin_content'>
                <div className='product_infor'>
                    <div className="form_group">
                        <label htmlFor="">Title</label><br />
                        <input name='title' type="text" />
                    </div>
                </div>

                <div>

                    <label htmlFor="">Avatar</label><br />
                    <input name='imgs' type="file" onChange={(e) => {
                        if (e.target.files) {
                            if (e.target.files.length > 0) {
                                (imgPreviewRef.current! as HTMLImageElement).src = URL.createObjectURL(e.target.files[0]);
                                setAvatarFile(e.target.files[0])
                            }
                        }
                    }} />
                    <img ref={imgPreviewRef} className='mt-4' style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                </div>
            </div>

            <button className='addProduct_btn' type='submit'>Add Caterogy</button>
        </form>
    )
}
