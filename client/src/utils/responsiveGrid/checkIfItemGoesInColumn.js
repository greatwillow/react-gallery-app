// ============================ COLUMN 1 =============================

const checkIfItemGoesInColumn1 = (scope, adjustedIndex) => {
  let goesInColumn = false;

  if (scope.props.windowWidth >= 700) {
    if (adjustedIndex % 1 === 0 && adjustedIndex % 2 !== 0 && adjustedIndex % 3 !== 0) {
      goesInColumn = true;
    }
  } else if (scope.props.windowWidth >= 500 && scope.props.windowWidth < 700) {
    if (adjustedIndex % 2 !== 0) {
      goesInColumn = true;
    }
  } else if (scope.props.windowWidth < 500) {
    goesInColumn = true;
  }
  return goesInColumn;
};

// ============================ COLUMN 2=============================

const checkIfItemGoesInColumn2 = (scope, adjustedIndex) => {
  let goesInColumn = false;

  if (scope.props.windowWidth >= 700) {
    if (adjustedIndex % 2 === 0 && adjustedIndex % 3 !== 0) {
      goesInColumn = true;
    }
  } else if (scope.props.windowWidth >= 500 && scope.props.windowWidth < 700) {
    if (adjustedIndex % 2 === 0) {
      goesInColumn = true;
    }
  }
  return goesInColumn;
};

// ============================ COLUMN 3 =============================

const checkIfItemGoesInColumn3 = (scope, adjustedIndex) => {
  let goesInColumn = false;

  if (scope.props.windowWidth >= 700) {
    if (adjustedIndex % 3 === 0) {
      goesInColumn = true;
    }
  }
  return goesInColumn;
};

// ============================ ALL COLUMNS =============================

const checkIfItemGoesInColumn = (scope, adjustedIndex, column) => {
  let goesInColumn = false;
  if (column === 1) {
    goesInColumn = checkIfItemGoesInColumn1(scope, adjustedIndex);
  } else if (column === 2) {
    goesInColumn = checkIfItemGoesInColumn2(scope, adjustedIndex);
  } else if (column === 3) {
    goesInColumn = checkIfItemGoesInColumn3(scope, adjustedIndex);
  } else {
    console.error('A column parameter needs to be provided!');
  }
  return goesInColumn;
};

export default checkIfItemGoesInColumn;
