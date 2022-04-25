import { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import MappedList from "./MappedItems";
import "../pages/Dashboard/Products/Products.scss";

const ProductInfoTab = () => {
  const { categories, businessModels, trl, description } = useSelector(
    (state) => state.products.data
  );

  return (
    <>
      <section className="tab mb-4 component-bg p-3"> 
        <Tabs
          defaultActiveKey="description"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="description" title="Description">
            <p>{description}</p>
          </Tab>
          <Tab eventKey="attributes" title="Attributes">
            <MappedList header="Categories" array={categories} />
            <MappedList header="Business Models" array={businessModels} />

            <h5>TRL</h5>
            {trl ? <p>{trl.name}</p> : null}
          </Tab>
        </Tabs>
      </section>
    </>
  );
};
export default ProductInfoTab;
