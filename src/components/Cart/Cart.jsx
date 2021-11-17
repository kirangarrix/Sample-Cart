import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "react-use-cart";
import Table from "react-bootstrap/Table";

const Cart = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    cartTotal,
    removeItem,
  } = useCart();
  console.log(items);

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;

  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              {Object.keys(items).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={`http://fda.intertoons.com/media/product/${items[item].image}`}
                        alt={index}
                        style={{ height: "6rem", width: "100px" }}
                      />
                    </td>
                    <td>{items[item].name}</td>
                    <td>{items[item].price}</td>
                    <td>{items[item].quantity}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() =>
                          updateItemQuantity(
                            items[item].id,
                            items[item].quantity - 1
                          )
                        }
                        style={{ color: "red" }}
                      >
                        Delete-
                      </button>
                      <button
                        className="btn"
                        style={{ color: "green" }}
                        onClick={() =>
                          updateItemQuantity(
                            items[item].id,
                            items[item].quantity + 1
                          )
                        }
                      >
                        Add+
                      </button>
                      <button
                        className="btn"
                        onClick={() => removeItem(items[item].id)}
                        style={{ color: "green" }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </Table>
            <div className="ms-auto col-auto">
              <h2>Total price :{cartTotal}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
