import React from 'react';
import PropTypes from 'prop-types';

import './ModalPhotoInset.css';

const ModalPhotoInset = ({ photo, photoSpecifiedWidth }) => {
  return (
    <div className="modal-photo-inset">
      <img src={photo.src.medium} alt={photo.url} width={photoSpecifiedWidth} />
      <p>
        This photograph has been taken from{' '}
        <a href="http://www.pexels.com">www.pexels.com</a>.<br />
        The stated photographer is: &nbsp;{photo.photographer}
        <br />
        Find out more by clicking <a href={photo.url}>here.</a>
      </p>
    </div>
  );
};

ModalPhotoInset.propTypes = {
  photo: PropTypes.object.isRequired,
  photoSpecifiedWidth: PropTypes.string.isRequired
};

export default ModalPhotoInset;
