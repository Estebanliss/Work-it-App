import { PRODUCTS } from "../../data/products"

const initialState = {
    products: PRODUCTS,
    filteredProducts: [],
    selected: null,
}

const ProductsReducer = (state = initialState, action) => {
    return state
}

export default ProductsReducer

