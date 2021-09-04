







const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        //swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }


  return {...array}
}



let sortedNumbers = bubbleSort(numbers)

console.log(sortedNumbers)