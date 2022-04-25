
import "../pages/Dashboard/Products/Products.scss"
const MappedList = ({header, array}) => {


  return (
    <>
 <section className="product-main-info mb-4 component-bg p-3">
 <h5>{header}</h5>
                {array &&
                  array.map((item) => <li key={item.id} className="ps-3">{item.name}</li>)}
          </section>
    </>
  );
};
export default MappedList;
