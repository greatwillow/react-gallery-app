import React from 'react';
import Modal from '../Modal';
import renderer from 'react-test-renderer';

describe('Modal component renders the modal correctly', () => {
  const handleShowModal = jest.fn();
  const handleSearchTermChange = jest.fn();
  const photo = {
    src: {
      medium: null
    }
  };
  const windowWidth = 800;

  const rendered = renderer.create(
    <Modal handleShowModal={handleShowModal} photo={photo} windowWidth={windowWidth} />
  );
  it('renders correctly', () => {
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
