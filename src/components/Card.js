import React from "react";
import CardModal from "./CardModal";

function Card({ id, name, link, onDelete, onMove }) {
  const [showModal, setShowModal] = React.useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleMove = () => {
    onMove(id);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <a href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
          </p>
          <button className="btn btn-danger mr-2" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn btn-secondary mr-2" onClick={handleMove}>
            Move
          </button>
          <button className="btn btn-primary" onClick={handleModalOpen}>
            Play
          </button>
        </div>
      </div>
      {showModal && (
        <CardModal link={link} onClose={handleModalClose} />
      )}
    </>
  );
}

export default Card;
