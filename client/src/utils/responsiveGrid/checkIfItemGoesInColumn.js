// ============================ COLUMN 1 =============================

export const checkIfItemGoesInColumn1 = (props, adjustedIndex) => {
  let goesInColumn = false;

  if (props.windowWidth >= 700) {
    if (adjustedIndex % 1 === 0 && adjustedIndex % 2 !== 0 && adjustedIndex % 3 !== 0) {
      goesInColumn = true;
    }
  } else if (props.windowWidth >= 500 && props.windowWidth < 700) {
    if (adjustedIndex % 2 !== 0) {
      goesInColumn = true;
    }
  } else if (props.windowWidth < 500) {
    goesInColumn = true;
  }
  return goesInColumn;
};

// ============================ COLUMN 2=============================

export const checkIfItemGoesInColumn2 = (props, adjustedIndex) => {
  let goesInColumn = false;

  if (props.windowWidth >= 700) {
    if (adjustedIndex % 2 === 0 && adjustedIndex % 3 !== 0) {
      goesInColumn = true;
    }
  } else if (props.windowWidth >= 500 && props.windowWidth < 700) {
    if (adjustedIndex % 2 === 0) {
      goesInColumn = true;
    }
  }
  return goesInColumn;
};

// ============================ COLUMN 3 =============================

export const checkIfItemGoesInColumn3 = (props, adjustedIndex) => {
  let goesInColumn = false;

  if (props.windowWidth >= 700) {
    if (adjustedIndex % 3 === 0) {
      goesInColumn = true;
    }
  }
  return goesInColumn;
};

// ============================ ALL COLUMNS =============================

export const checkIfItemGoesInColumn = (props, adjustedIndex, column) => {
  let goesInColumn = false;
  if (column === 1) {
    goesInColumn = checkIfItemGoesInColumn1(props, adjustedIndex);
  } else if (column === 2) {
    goesInColumn = checkIfItemGoesInColumn2(props, adjustedIndex);
  } else if (column === 3) {
    goesInColumn = checkIfItemGoesInColumn3(props, adjustedIndex);
  } else {
    console.error('A column parameter needs to be provided!');
  }
  return goesInColumn;
};
