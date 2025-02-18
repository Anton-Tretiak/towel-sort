
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ([...arguments].length == 0){
    return [];
  }
  else {
    return matrix.reduce((acc, cur, i) => {
      return acc.concat((!(i % 2) ? cur : cur.reverse()));
    }, [])
  }
}
