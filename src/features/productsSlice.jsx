import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/data/data";


export const productSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    },

    reducers: {
        filterProducts(state, action) {
            try{
                const filter = storeData.filter(
                    (product) => product.type === action.payload
            );
            state.filteredProducts = filter;
            console.log("filter", filter);
            const savedState = JSON.stringify(filter);
            sessionStorage.setItem("filteredData", savedState);
            } catch (err) {
                return console.log(err);
                ;
            }
        },
    },
});


export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;