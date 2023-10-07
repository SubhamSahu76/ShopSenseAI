import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import products from "../../data/products.js"
import categories from "../../data/categories.js"

const Home = () => {
    // const { products, setProducts, categories, setCategories } =
    //     useContext(Context);
    // useEffect(() => {
    //     getProducts();
    //     getCategories();
    // }, []);

    // const getProducts = () => {
    //     fetchDataFromApi("/api/products?populate=*").then((res) => {
    //         console.log(res);
    //         setProducts(res);
    //     });
    // };
    // const getCategories = () => {
    //     fetchDataFromApi("/api/categories?populate=*").then((res) => {
    //         setCategories(res);
    //     });
    // };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;