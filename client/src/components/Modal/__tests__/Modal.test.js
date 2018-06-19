import React from 'react';
import Modal from '../Modal';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Modal component renders the modal correctly', () => {
  const windowWidth = 800;
  const props = {
    handleSearchTermChange: jest.fn(),
    handleShowModal: jest.fn(),
    photo: {
      src: {
        medium: null
      }
    },
    errorMessage: {
      errorFound: false,
      message: 'test message'
    }
  };
  const modal = shallow(<Modal {...props} />);

  it('renders correctly', () => {
    expect(modal).toMatchSnapshot();
  });
});
