import React from 'react';
import Header from '../Header';
import renderer from 'react-test-renderer';

describe('Header component renders the header correctly', () => {
  const handleSubmitSearchTerm = jest.fn();
  const handleSearchTermChange = jest.fn();
  const searchTerm = 'test';
  const windowWidth = 800;

  const rendered = renderer.create(
    <Header
      handleSubmitSearchTerm={handleSubmitSearchTerm}
      handleSearchTermChange={handleSearchTermChange}
      searchTerm={searchTerm}
      windowWidth={windowWidth}
    />
  );
  it('renders correctly', () => {
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
