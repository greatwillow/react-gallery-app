import React from 'react';
import ImageGallery from '../ImageGallery';
import renderer from 'react-test-renderer';

describe('Image Gallery component renders the header correctly', () => {
  const handleProvidePhoto = jest.fn();
  const handleShowModal = jest.fn();
  const photos = null;
  const windowWidth = 800;

  const rendered = renderer.create(
    <ImageGallery
      handleProvidePhoto={handleProvidePhoto}
      handleShowModal={handleShowModal}
      photos={photos}
      windowWidth={windowWidth}
    />
  );

  it('renders correctly', () => {
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
