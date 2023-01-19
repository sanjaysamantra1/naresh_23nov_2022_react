import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function ModalDemo2() {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);

  function openModal1() {
    setFlag1(true);
  }
  function closeModal1() {
    setFlag1(false);
  }
  function openModal2() {
    setFlag2(true);
  }
  function closeModal2() {
    setFlag2(false);
  }

  return (
    <>
      <Button className="m-1" onClick={openModal1}>
        Table inside Modal
      </Button>
      <Button className="m-1" onClick={openModal2}>
        Form inside Modal
      </Button>

      <Modal show={flag1} onHide={closeModal1}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-bordered table-striped">
            <tr>
              <td>data1</td>
              <td>data2</td>
              <td>data3</td>
              <td>data4</td>
              <td>data5</td>
            </tr>
            <tr>
              <td>data1</td>
              <td>data2</td>
              <td>data3</td>
              <td>data4</td>
              <td>data5</td>
            </tr>
            <tr>
              <td>data1</td>
              <td>data2</td>
              <td>data3</td>
              <td>data4</td>
              <td>data5</td>
            </tr>
            <tr>
              <td>data1</td>
              <td>data2</td>
              <td>data3</td>
              <td>data4</td>
              <td>data5</td>
            </tr>
            <tr>
              <td>data1</td>
              <td>data2</td>
              <td>data3</td>
              <td>data4</td>
              <td>data5</td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <h2>This is My Footer</h2>
          <Button variant="secondary" onClick={closeModal1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={flag2} onHide={closeModal2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 2 heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
