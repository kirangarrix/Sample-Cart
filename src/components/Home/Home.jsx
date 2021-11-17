import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Card,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

import axios from "axios";

const Home = () => {
  const [loadText, setLoadText] = useState("Load-more");
  const [visible, setVisible] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState({
    currentpage: 1,
    pagesize: 100,
    sortorder: {
      field: "menu_name",
      direction: "desc",
    },
    searchstring: searchTerm,
    filter: {
      category: "",
    },
  });

  const [form, setForm] = useState("");

  useEffect(() => {
    // !Api call
    const headers = {
      "Content-Type": "application/json",
      Authorization: " Bearer akhil@intertoons.com",
    };
    axios
      .post("http://fda.intertoons.com/api/V1/products", state, {
        headers: headers,
      })
      .then(function (response) {
        setForm(response.data.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [state]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
    setState({
      ...state,
      searchstring: e.target.value,
    });
  };

  const showMoreItem = () => {
    setVisible((prevValue) => {
      if (prevValue > 50) {
        setLoadText("No more Products");
        return prevValue;
      } else return prevValue + 10;
    });
  };
  return (
    <div>
      <Container fluid>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleChange}
            style={{ marginBottom: "2rem" }}
          />
        </Form>
        <Row xs={1} md={5} lg={3} className="g-4">
          {Object.keys(form)
            .slice(0, visible)
            .map((item, index) => {
              return (
                <Col key={index}>
                  <Card style={{ width: "18rem", alignItems: "center" }}>
                    <Card.Img
                      className="mt-2"
                      variant="top"
                      style={{ width: "200px", height: "200px" }}
                      src={form[item].image}
                    />
                    <Card.Body>
                      <Card.Title>{form[item].name}</Card.Title>
                      <Card.Text style={{ height: "100px" }}>
                        {form[item].description}
                      </Card.Text>
                      <div>
                       <h4><span>${form[item].price}</span></h4> 
                      </div>
                      <Button
                        as={Link}
                        to={`/product-details/${form[item].id}`}
                        variant="primary"
                      >
                        Buy
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Col style={{ display: "flex", padding: "10px" }}>
          {form.length ? (
            <Button
              variant="primary"
              onClick={showMoreItem}
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              {loadText}
            </Button>
          ) : (
            "No Data found"
          )}
        </Col>
      </Container>
    </div>
  );
};

export default Home;
