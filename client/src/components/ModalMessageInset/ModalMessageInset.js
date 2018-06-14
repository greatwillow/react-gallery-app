import React from 'react';
import PropTypes from 'prop-types';

import './ModalMessageInset.css';

const ModalMessageInset = ({ errorMessage }) => {
  return (
    <div className="modal-message-inset">
      <h3>
        It looks like something went wrong! <br />
      </h3>
      <p>{errorMessage.message}</p>
      <br />
      <p>Perhaps try another search!</p>
    </div>
  );
};

ModalMessageInset.propTypes = {
  errorMessage: PropTypes.object.isRequired
};

export default ModalMessageInset;
