import React from "react";

const ConfirmDialog = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="confirmation-container">
      <div className="dialog-body">
        <div className="confirmation-dialog">
          <p>{message}</p>
          <div className="d-flex gap-2">
            <button onClick={onCancel} className="btn btn-sm btn-secondary">
              Cancel
            </button>
            <button onClick={onConfirm} className="btn btn-sm btn-success">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
