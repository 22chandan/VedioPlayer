import React from 'react';
import { Modal } from 'antd';

const CardModal = ({ visible, card, handleCancel }) => {
  return (
    <Modal
      open={visible}
      title={card.name}
      onCancel={handleCancel}
      footer={null}
    >
      <iframe
        src={card.videoUrl}
        width="100%"
        height="315"
        title={card.name}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </Modal>
  );
};

export default CardModal;
