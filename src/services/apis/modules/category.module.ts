import axios from "axios";

export default {
    findMany: async function () {
        return await axios.get(import.meta.env.VITE_SV_HOST + "categories")
    },
    create: async function (formData: FormData) {
        return await axios.post(import.meta.env.VITE_SV_HOST + "categories", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    findByCategory: async function (categoryId: string) {
        return await axios.get(`${process.env.VITE_SV_HOST}/categories/menu/${categoryId}`);
    }
}