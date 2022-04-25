import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../../redux/productsData/productsDataActions";
import MainWrapper from "../../../components/MainWrapper";
import "./Products.scss";
import UserInfo from "../../../components/UserInfo";
import ProductSection from "../../../components/ProductSection";
import ProductInfoTab from "../../../components/ProductInfoTab";
import {Row, Col } from "react-bootstrap";
import ProductImage from "../../../components/ProductImage";

const Products = () => {
  const dispatch = useDispatch();
  const { name, type, picture, description} =
    useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);
  return (
    <MainWrapper>
      {/* <div className="productsPage"> */}
      <Row>
        {/* <div className="product-container"> */}
        <Col lg={8} md={12}>
          <ProductImage />
       <ProductSection />
          <ProductInfoTab />
          </Col>
        {/* </div> */}
        <Col lg={4} md={12}>
        <div className="user-section"><UserInfo /></div>
        </Col>
      {/* </div> */}
      </Row>
    </MainWrapper>
  );
};
export default Products;
