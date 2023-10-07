import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();

    if (!categories) {
      // Return a loading indicator or handle the case when products are not available yet.
      return <div>Loading...</div>;
    }

    if (categories.length === 0) {
      console.log("No category available");
      // Return a message indicating that there are no products.
      return <div>No products available.</div>;
    }
    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories.map((item, k) => (
                    <div
                        key={item.id}
                        className="category"
                        // onClick={() => navigate(`/category/${k}`)}
                    >
                        <img
                            src={`/assets/category/cat-${k+1}.jpg`}
                            alt="alt"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;