import React, { Component } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.mainRef = React.createRef();
  }

  async componentDidMount() {
    await this.handleFetchUser();
    console.log(this.mainRef.current);
  }

  handleFetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/users/all");
      this.setState({ users: response.data });
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref={this.mainRef}>
          <section className="section-profile-cover section-shaped my-0">
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="separator separator-bottom separator-skew" />
          </section>
          <section className="section">
            <Container>
              <Row className="justify-content-center">
                {this.state.users.map((user, index) => (
                  <Col key={index} lg="3">
                    <div className="card-profile-image">
                    
                    </div>
                    <h4>{user.nom}</h4>
                    <p>{user.email}</p>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
