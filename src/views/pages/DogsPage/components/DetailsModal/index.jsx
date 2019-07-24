import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const DetailsModal = ({ visibleModal, handleCancel, currentImage }) => (
  <Modal centered footer={[]} visible={visibleModal} onCancel={handleCancel}>
    <img
      src={currentImage}
      style={{
        marginTop: 15,
        width: '100%',
        minHeight: '100%',
        cursor: 'pointer',
        backgroundPosition: 'center',
        objectFit: 'cover',
      }}
      alt="dog"
    />
  </Modal>
);

DetailsModal.propTypes = {
  visibleModal: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  currentImage: PropTypes.string,
};

export default DetailsModal;
