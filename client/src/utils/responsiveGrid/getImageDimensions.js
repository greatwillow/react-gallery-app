export const setImageHeight = (scope, imageActualHeight) => {
  scope.setState({
    imageHeight: imageActualHeight
  });
};

export const getImageDimensions = scope => {
  const imageExpandedWidth = scope.props.photo.width;
  const imageExpandedHeight = scope.props.photo.height;
  let imageActualWidth = 100;
  if (scope.imageContainerRef && scope.imageContainerRef.offsetWidth) {
    imageActualWidth = scope.imageContainerRef.offsetWidth;
  }
  const imageActualHeight = (imageExpandedHeight / imageExpandedWidth) * imageActualWidth;

  setImageHeight(scope, imageActualHeight);
};
