import React from 'react';
import Header from '../Header';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Header component renders the header correctly', () => {
  const props = {
    handleSubmitSearchTerm: jest.fn(),
    handleSearchTermChange: jest.fn(),
    searchTerm: 'test',
    windowWidth: 800
  };

  const header = shallow(<Header {...props} />);

  it('renders correctly', () => {
    expect(header).toMatchSnapshot();
  });
});
