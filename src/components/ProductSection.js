import { useSelector } from "react-redux";
import "../pages/Dashboard/Products/Products.scss";

const ProductSection = () => {
  const { name, type } = useSelector((state) => state.products?.data);
  return (
    <>
      <section className="product-main-info mb-4 component-bg p-3">
        <h2 className="">{name}</h2>
        <h6>({type?.name} Industry)</h6>
      </section>
    </>
  );
};
export default ProductSection;
