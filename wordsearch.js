const wordSearch = (letters, word) => { 
    if(letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    const verticalMatrix = transpose(letters);
    const verticalJoin = verticalMatrix.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}
const transpose = function(matrix) {
    // Put your solution here
    let newArray = [];
    let maxCols = matrix[0].length;
    for(let x = 0; x < maxCols; x++) {
      newArray[x] = [];
    }
    if(matrix.length == 1)
    {
      for(let i = 0; i < matrix[0].length; i++) {
        newArray[i].push(matrix[0][i]);
      }
      return newArray;
    }  
    recurFunction(matrix, newArray, maxCols, 0);
    return newArray;
  };
  const recurFunction = (matrix, outputArray, maxCols, colIndex) => {
    if(colIndex === matrix.length) {
      return;
    }
    if(colIndex === maxCols) {
      return;
    }
    for(let x = 0; x < matrix.length; x++) {
      outputArray[colIndex].push(matrix[x][colIndex]);
    }
    recurFunction(matrix, outputArray, maxCols, ++colIndex);
  };

module.exports = wordSearch