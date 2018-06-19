import fetchMock from 'fetch-mock';
import { getPhotos } from '../photoServices';
import App from '../../App';

const mockResponse = { photos: [] };

describe('Fetch Photos', () => {
  it('properly fetches the photos from the server', done => {
    fetchMock.get('/api/photos?search-term=asd', mockResponse);
    function photoFetchResponse(data) {
      expect(data).toEqual(mockResponse);
      done();
    }
    getPhotos('asd', photoFetchResponse);
  });
});
