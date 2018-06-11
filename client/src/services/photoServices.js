const getPhotos = (scope, searchTerm) => {
  fetch(`/api/photos?search-term=${searchTerm}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      scope.setState({
        photos: data.photos
      });
    })
    .catch(err => {
      console.log('ERROR GETTING PHOTOS WITH ERROR ', err);
    });
};

export { getPhotos };
