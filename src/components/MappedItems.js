import { useEffect, useRef, useState } from "react";
import "../pages/Dashboard/Products/Products.scss";

const MappedList = ({ header, mappedListArray }) => {
  const [data, setData] = useState([]);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, mappedListArray?.length);
  }, [mappedListArray]);

  useEffect(() => {
    setData(mappedListArray);
  }, [[], mappedListArray]);

  return (
    <>
      <section className="product-main-info mb-4 component-bg p-3">
        <h5>{header}</h5>
        {mappedListArray &&
          data.map((item, i) => (
            <div className="mb-3" key={i}>
            <input
              ref={(el) => (itemsRef.current[i] = el)}
              defaultValue={item.name}
            /></div>
          ))}
      </section>
    </>
  );
};

export default MappedList;
