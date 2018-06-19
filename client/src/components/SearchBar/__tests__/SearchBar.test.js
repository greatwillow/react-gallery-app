import React from 'react';
import SearchBar from '../SearchBar';
import { shallow } from 'enzyme';

describe('SearchBar functionality', () => {
  const props = {
    searchTerm: 'test',
    handleSubmitSearchTerm: jest.fn(),
    handleSearchTermChange: jest.fn()
  };
  const searchBar = shallow(<SearchBar {...props} />);

  describe('when user clicks submit on search term', () => {
    searchBar.find('form').simulate('submit');

    it('calls the handle search function', () => {
      expect(props.handleSubmitSearchTerm).toBeCalled();
    });
  });

  describe('when typing into the search input', () => {
    searchBar.find('input').simulate('change', { target: { value: 'test' } });
    it('updates the state of the search term', () => {
      expect(props.searchTerm).toEqual('test');
    });
  });
});
