import React from 'react';
import ImageGallery from '../ImageGallery';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Image Gallery component renders correctly', () => {
  const props = {
    handleProvidePhoto: jest.fn(),
    handleShowModal: jest.fn(),
    photos: null,
    windowWidth: 800,
    errorMessage: {
      errorFound: false,
      message: 'test message'
    }
  };
  const imageGallery = shallow(<ImageGallery {...props} />);

  it('renders correctly', () => {
    expect(imageGallery).toMatchSnapshot();
  });
});
