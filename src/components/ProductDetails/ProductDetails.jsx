import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
const ProductDetails = () => {
  const { addItem } = useCart();
  const [form, setForm] = useState("");
  const { id } = useParams();

  useEffect(() => {
    // !Api call for product
    const headers = {
      Authorization: "Bearer akhil@intertoons.com",
    };
    axios
      .get(`http://fda.intertoons.com/api/V1/product/${id}`, {
        headers: headers,
      })
      .then(function (response) {
        setForm(response.data.data.product);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  console.log(form);

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card
              style={{
                width: "18rem",
                marginTop: "5rem",
                alignItems: "center",
              }}
            >
              <Card.Img
                className="mt-2"
                style={{ width: "200px", height: "200px" }}
                variant="top"
                src={`http://fda.intertoons.com/media/product/${form.image}`}
              />
              <Card.Body>
                <Card.Title>{form.name}</Card.Title>
                <Card.Text>{form.description}</Card.Text>
                <div>
                  <h4>
                    <span>${form.price}</span>
                  </h4>
                </div>
                <Button
                  as={Link}
                  to="/Cart"
                  variant="primary"
                  onClick={() => addItem(form)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
