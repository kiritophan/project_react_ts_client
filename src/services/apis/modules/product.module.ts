import axios from "axios";

export default {
    findMany: async function () {
        return await axios.get(import.meta.env.VITE_SV_HOST + "products")
    },
    create: async function (formData: FormData) {
        return await axios.post(import.meta.env.VITE_SV_HOST + "products", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    findById: async function (productId: string) {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}products/` + productId)
    },
}