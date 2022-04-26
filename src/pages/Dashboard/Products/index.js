import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsData } from "../../../redux/productsData/productsDataActions";
import { fetchTrlData } from "../../../redux/trlData/trlDataActions";
import MainWrapper from "../../../components/MainWrapper";
import "./Products.scss";
import UserInfo from "../../../components/UserInfo";
import ProductSection from "../../../components/ProductSection";
import ProductInfoTab from "../../../components/ProductInfoTab";
import { Row, Col } from "react-bootstrap";
import ProductImage from "../../../components/ProductImage";
import Map from "../../../components/map/Map";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsData());
    dispatch(fetchTrlData());
  }, []);
  return (
    <MainWrapper>
      <Row>
        <Col lg={8} md={12}>
          <ProductImage />
          <ProductSection />
          <ProductInfoTab />
        </Col>
        <Col lg={4} md={12}>
          <div className="user-section">
            <UserInfo />
          </div>
       <Map />
        </Col>
      </Row>
    </MainWrapper>
  );
};
export default Products;
