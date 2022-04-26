import { useSelector } from "react-redux";
import "../pages/Dashboard/Products/Products.scss";

const ProductImage = () => {
  const { picture } = useSelector((state) => state.products.data);

  return (
    <>
      <section className="product-main-info mb-4 component-bg">
        <img src={picture} style={{ width: "300px" }} alt="product" />
      </section>
    </>
  );
};
export default ProductImage;
