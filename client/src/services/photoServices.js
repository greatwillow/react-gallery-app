const getPhotos = (searchTerm, callBack) => {
  return fetch(`/api/photos?search-term=${searchTerm}`, {
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
      callBack({
        photos: data.photos
      });
      if (data.total_results === 0) {
        callBack({
          errorMessage: {
            errorFound: true,
            message: 'Unfortunately there were no photos found for the given term.'
          },
          modalOpen: true
        });
      }
    })
    .catch(err => {
      callBack({
        errorMessage: {
          errorFound: true,
          message: `It looks like the error is that: ${err.message}`
        },
        modalOpen: true
      });
    });
};

export { getPhotos };
