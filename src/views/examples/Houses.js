import React from "react";
import NavBar from "components/Navbars/NavBar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { useParams } from 'react-router-dom';
import data from 'data/DummyData';
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const House = () => {
  const { id } = useParams();
  const house = data.find(item => item.id === parseInt(id));

  if (!house) {
    return <div>House not found</div>;
  }

  // Create carousel items from the house images, if they exist
  const carouselItems = house.images?.map((img, index) => ({
    src: img,
    altText: `Slide ${index + 1}`,
    caption: '',
    header: '',
  })) || [];

  return (
    <>
      <NavBar />
      <br/>
      <section className="section section-shaped">
        <div className="shape shape-style-1 shape-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container className="py-md">
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
              Détails:
              </h1>
              <p className="lead text-white mt-4">
                 {house.details}
              </p>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                {carouselItems.length > 0 ? (
                  <UncontrolledCarousel items={carouselItems} />
                ) : (
                  <img src={house.images[0]} alt={house.Location} className="img-fluid" />
                )}
              </div>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
      <CardsFooter />
    </>
  );
};

export default House;
