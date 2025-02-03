import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navbar";
import Header from "./Headers";
import CardComponent from "./Card";
import { Container } from "react-bootstrap";


function App() {
  return (
    <>
      <Navigation/>
      <Container className="mt-4">
        <Header />
        <div className="d-flex justify-content-around mt-4">
          <CardComponent
            title="Service 1"
            description="Description de notre premier service."
            image="https://via.placeholder.com/150"
          />
          <CardComponent
            title="Service 2"
            description="Description de notre deuxième service."
            image="https://via.placeholder.com/150"
          />
          <CardComponent
            title="Service 3"
            description="Description de notre troisième service."
            image="https://via.placeholder.com/150"
          />
        </div>
      </Container>

    </>
  );
}

export default App;
