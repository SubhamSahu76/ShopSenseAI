import React from "react";
import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
    if (!products) {
        // Return a loading indicator or handle the case when products are not available yet.
        return <div>Loading...</div>;
    }

    if (products.length === 0) {
        console.log("No products available");
        // Return a message indicating that there are no products.
        return <div>No products available.</div>;
    }

    console.log("Products exist");

    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {/* {console.log(products)} */}
                {products.data?.map((item, k) => (
                    <Product
                        key={k}
                        id={item?.id}
                        data={item?.attributes}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
