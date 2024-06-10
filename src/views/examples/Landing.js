
import React from "react";
import withNavigation from "./withNavigation";
import classnames from "classnames";
import house from '../../assets/house.jpg'
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledAlert
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

const router='ListHouse'

class Landing extends React.Component {
  state = {
    showAlert: false 
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  handleButtonClick = () => {
    this.props.navigate(router);
  };
  handleButtonClick1 = () => {
    this.setState({ showAlert: true }); // Show alert when button is clicked
    setTimeout(() => {
      this.setState({ showAlert: false }); // Hide alert after some time
    }, 5000); // Adjust timeout as needed
  };
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              {this.state.showAlert && (
  <UncontrolledAlert color="warning" fade={false}>
    <span className="alert-inner--icon">
      <i className="ni ni-bell-55" />
    </span>
    <span className="alert-inner--text ml-1">
      <strong>Warning!</strong> You should sign up first.
    </span>
  </UncontrolledAlert>
)}
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Soyer les bienvenus{" "}
                        <span>chez DARY</span>
                      </h1>
                      <p className="lead text-white">
                      Découvrez des hébergements uniques et vivez des expériences locales authentiques avec notre application.
                      </p>
                     
                    </Col>
                  </Row>
                </div>
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
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                          Recherche d’hébergements
                          </h6>
                          <p className="description mt-3">
                          Trouvez le logement parfait selon vos critères et votre budget.
                          </p>
                          <Button
                            className="mt-4"
                            color="primary"
                            onClick={this.handleButtonClick}
                          >
                           Nos hébergements
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                          Réservation facile
                          </h6>
                          <p className="description mt-3">
                          Réservez en toute sécurité directement via l'application. Payez à votre arrivée.
                          </p>
        
                          <Button
                            className="mt-4"
                            color="success"
                            onClick={this.handleButtonClick1}
                          >
                            Réserver
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Assistance 24/7
                          </h6>
                          <p className="description mt-3">
                          Obtenez de l'aide à tout moment grâce à notre support client disponible en continu.
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Obtenir de l'aide
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
         
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={house}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Chez Dary
                      </h4>
                      <p className="lead text-italic text-white">
                      Trouvez des logements allant des appartements confortables aux maisons pittoresques, 
                      et réservez facilement votre prochain séjour partout dans la Tunisie.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Nos Services</h3>
                    <p className="lead">
                    Notre application Airbnb vous permet 
                    de découvrir et de réserver facilement des hébergements uniques pour vous.
                    </p>
                    <p>
                    Grâce à une interface conviviale, vous pouvez 
                    rechercher et trouver le logement parfait selon vos critères et votre budget.
                    </p>
                    <p>
                    Une fois que vous avez trouvé un hébergement qui vous plaît, 
                    réservez-le en toute sécurité directement via l'application et payez à votre arrivée.
                    Profitez également de notre sélection d'expériences locales proposées par des hôtes passionnés, 
                    qui vous permettront de vivre des moments inoubliables et authentiques.
                    </p>
                   
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
         
          <section className="section section-lg">
            <Container>
             
             
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default withNavigation(Landing);
