import React from "react";

function CardForm({ card, onSubmit, onCancel }) {
  const [name, setName] = React.useState(card.name || "");
  const [link, setLink] = React.useState(card.link || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, link });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="link">Link</label>
        <input
          type="url"
          className="form-control"
          id="link"
          value={link}
          onChange={(event) => setLink(event.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mr-2">
        {card.id ? "Save" : "Create"}
      </button>
      <button type="button" className="btn btn-secondary" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}

export default CardForm;
