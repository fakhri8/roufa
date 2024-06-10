import React from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap"; 
import NavBar from "components/Navbars/NavBar";
import data from "data/DummyData";
import withNavigation from "./withNavigation";

class ListHouse extends React.Component {
  handleCardClick = (id) => {
    this.props.navigate(`/house/${id}`);
  };
  render() {
    return (
        <>
        <NavBar/>
        <br/>
        <main>
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
                <div className="shape shape-style-1 shape-default">
                  <span />
                  <span />
                </div>
                
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
                    <polygon
                      className="fill-white"
                      points="2560 0 2560 100 0 100"
                    />
                  </svg>
                </div>
                <section style={{ backgroundColor: 'white', top:'0px', position:'relative' }}> {/* Adjust the minHeight as needed */}
            <Container className="d-flex flex-column align-items-start py-5"> {/* Adjusted for vertical alignment */}
              <Row className="row-grid align-items-center">
                {data.map((item, index) => (
                  <Col key={index} sm="12" md="4">
                    <Card className="bg-default shadow border-0 mb-4" onClick={() => this.handleCardClick(item.id)}>
                      <CardImg
                        alt="..."
                        src={item.image} 
                        top
                      />
                      <CardBody>
                        <h6 className="display-5 font-weight text-white">
                          Localisation: {`${item.Location}`}
                        </h6>
                        <p className="lead text-italic text-white">
                        Prix: {item.Price}
                        </p>
                        <p className="lead text-italic text-white">
                         Description: {item.Description}
                        </p>
                        <p className="text-white">
                          Date: {item.Date}
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
            </section>
          </div>
          
        </main>
        </>
    );
  }
}

export default withNavigation(ListHouse);
