const sampleArray =  [ 'a', 10, 'b', 'hola', 122, 15];

const arrayFilter = (array) => {
  const charactersArray = array.filter((element) => typeof element === 'string');
  const numbersArray = array.filter((element) => typeof element === 'number');
  const maxNumber = Math.max(...numbersArray);

  const result = {
    charactersArray,
    numbersArray,
    maxNumber,
  };

  return result;
};

console.log(arrayFilter(sampleArray));
