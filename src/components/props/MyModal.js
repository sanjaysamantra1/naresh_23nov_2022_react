import React from "react";
import PropTypes from 'prop-types'

export default function MyModal({heading="Default Heading",children}) {
  return (
    <>
      <div className="container mt-3">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Open modal
        </button>
      </div>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{heading}</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >   Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
MyModal.propTypes = {
    children : PropTypes.element,
    heading:PropTypes.string
}