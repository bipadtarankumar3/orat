import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../Redux/features/User/userSlice";
import ProductReducer from "../Redux/features/Product/ProductSlice";
import CartReducer from "../Redux/features/Cart/CartSlice";
import WishListReducer from "../Redux/features/wishlist/WishListSlice";
import filterReducer  from "../Redux/features/ProductFilter/FilterSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: ProductReducer,
    cart: CartReducer,
    wishlist: WishListReducer,
    filterProduct: filterReducer ,
  },
});