import userModule from "./modules/user.module";
import categoryModule from "./modules/category.module";
import productModule from "./modules/product.module";
import purchaseModules from "./modules/purchase.modules";
import "./axios.instance";

export default {
    userApi: userModule,
    categoryApi: categoryModule,
    productApi: productModule,
    purchaseApi: purchaseModules
}